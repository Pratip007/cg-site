"use client";

import { useState, useEffect, useCallback } from 'react';
import { Companion } from '../types';



export function useCompanions() {
    const [companions, setCompanions] = useState<Companion[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCompanions = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/companions');
            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || `Failed to fetch from API: ${res.status}`);
            }
            const data = await res.json();
            // Map _id to id if necessary
            const mappedData = data.map((c: any) => ({ ...c, id: c._id || c.id }));
            setCompanions(mappedData);
        } catch (error) {
            console.error('API unavailable or failed', error);
            // No fallback to local storage
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCompanions();
    }, [fetchCompanions]);

    const addCompanion = async (companionData: Omit<Companion, 'id'>) => {
        // We don't generate ID here anymore, let the DB handle it
        const newCompanion = { ...companionData, isAvailable: true };

        try {
            const res = await fetch('/api/companions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCompanion),
            });
            if (res.ok) {
                await fetchCompanions(); // Refresh from server
                return;
            }
            const errorData = await res.json();
            throw new Error(errorData.error || 'API failed');
        } catch (e) {
            console.error("API add failed:", e);
            alert("Failed to add companion: " + e);
        }
    };

    const updateCompanion = async (id: string, updates: Partial<Companion>) => {
        try {
            const res = await fetch(`/api/companions/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates),
            });
            if (res.ok) {
                await fetchCompanions(); // Refresh from server
                return;
            }
            throw new Error('API failed');
        } catch (e) {
            console.error("API update failed:", e);
            alert("Failed to update companion");
        }
    };

    const deleteCompanion = async (id: string) => {
        try {
            const res = await fetch(`/api/companions/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                await fetchCompanions(); // Refresh from server
                return;
            }
            throw new Error('API failed');
        } catch (e) {
            console.error("API delete failed:", e);
            alert("Failed to delete companion");
        }
    };

    const getCompanion = (id: string) => companions.find(c => c.id === id);

    return {
        companions,
        loading,
        addCompanion,
        updateCompanion,
        deleteCompanion,
        getCompanion,
        refresh: fetchCompanions
    };
}
