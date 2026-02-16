"use client";

import { useState, useEffect, useCallback } from 'react';
import { Companion } from '../types';

const MOCK_COMPANIONS: Companion[] = [
    {
        id: '1',
        name: 'Aisha',
        age: 24,
        location: 'Mumbai',
        price: 3500,
        bio: 'Fashion designer who loves food and travel. I enjoy meaningful conversations and exploring new places.',
        interests: ['Fashion', 'Food', 'Travel'],
        images: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '2',
        name: 'Priya',
        age: 26,
        location: 'Bangalore',
        price: 5000,
        bio: 'Software engineer by day, artist by night. I love visiting art galleries and discussing modern literature.',
        interests: ['Art', 'Literature', 'Tech'],
        images: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '3',
        name: 'Riya',
        age: 23,
        location: 'Delhi',
        price: 4000,
        bio: 'Aspiring model and dancer. Energetic and fun-loving, perfect for parties and social events.',
        interests: ['Dancing', 'Modeling', 'Parties'],
        images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
];

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
                } else {
                    setCompanions(MOCK_COMPANIONS);
                    localStorage.setItem('velvet_date_companions', JSON.stringify(MOCK_COMPANIONS));
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
