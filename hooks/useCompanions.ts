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
            if (!res.ok) throw new Error('Failed to fetch from API');
            const data = await res.json();
            // Map _id to id if necessary
            const mappedData = data.map((c: any) => ({ ...c, id: c._id || c.id }));
            setCompanions(mappedData);
        } catch (error) {
            console.warn('API unavailable or failed, falling back to local storage', error);
            // Fallback to localStorage
            if (typeof window !== 'undefined') {
                const stored = localStorage.getItem('velvet_date_companions');
                if (stored) {
                    setCompanions(JSON.parse(stored));
                }
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCompanions();
    }, [fetchCompanions]);

    // Helper to sync with localStorage
    const syncToLocalStorage = (newCompanions: Companion[]) => {
        setCompanions(newCompanions);
        if (typeof window !== 'undefined') {
            localStorage.setItem('velvet_date_companions', JSON.stringify(newCompanions));
        }
    };

    const addCompanion = async (companionData: Omit<Companion, 'id'>) => {
        const newId = Date.now().toString();
        const newCompanion = { ...companionData, id: newId, isAvailable: true };

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
            throw new Error('API failed');
        } catch (e) {
            console.warn("API add failed, using local storage fallback");
            syncToLocalStorage([...companions, newCompanion]);
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
            console.warn("API update failed, using local storage fallback");
            const updatedList = companions.map(c => c.id === id ? { ...c, ...updates } : c);
            syncToLocalStorage(updatedList);
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
            console.warn("API delete failed, using local storage fallback");
            const updatedList = companions.filter(c => c.id !== id);
            syncToLocalStorage(updatedList);
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
