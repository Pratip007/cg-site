"use client";

import { useState, useEffect } from 'react';
import { Companion } from '../types';

export function useCompanions() {
    const [companions, setCompanions] = useState<Companion[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCompanions = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/companions');
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            // Map _id to id for frontend compatibility
            const mappedData = data.map((c: any) => ({ ...c, id: c._id }));
            setCompanions(mappedData);
        } catch (error) {
            console.error('Error fetching companions:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanions();
    }, []);

    const addCompanion = async (companion: Omit<Companion, 'id'>) => {
        try {
            const res = await fetch('/api/companions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(companion),
            });
            if (!res.ok) throw new Error('Failed to add');
            await fetchCompanions(); // Refresh list
        } catch (error) {
            console.error('Error adding companion:', error);
        }
    };

    const updateCompanion = async (id: string, updates: Partial<Companion>) => {
        try {
            const res = await fetch(`/api/companions/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates),
            });
            if (!res.ok) throw new Error('Failed to update');
            await fetchCompanions(); // Refresh list
        } catch (error) {
            console.error('Error updating companion:', error);
        }
    };

    const deleteCompanion = async (id: string) => {
        try {
            const res = await fetch(`/api/companions/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete');
            await fetchCompanions(); // Refresh list
        } catch (error) {
            console.error('Error deleting companion:', error);
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
