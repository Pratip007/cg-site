"use client";

import { useState, useEffect } from 'react';
import { Companion } from '../types';

const STORAGE_KEY = 'velvet_date_companions';

const INITIAL_DATA: Companion[] = [
    {
        id: '1',
        name: 'Ishani',
        age: 23,
        location: 'Kolkata',
        price: 3500,
        bio: 'Masters student at Jadavpur University. I love the old-world charm of North Kolkata, Phuchka dates at Victoria Memorial, and deep conversations about Bengali literature and cinema. Fluent in Bengali, English, and Hindi.',
        interests: ['Bengali Literature', 'Coffee', 'Photography', 'Art'],
        images: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1515023115689-589c33041697?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '2',
        name: 'Riya',
        age: 25,
        location: 'Kolkata',
        price: 4500,
        bio: 'Professional fashion stylist living in Salt Lake. Let\'s explore the upscale cafes in Park Street or enjoy a sunset walk by the Hooghly river. I appreciate fine dining and good music.',
        interests: ['Fashion', 'Music', 'Fine Dining', 'Travel'],
        images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '3',
        name: 'Sayeri',
        age: 22,
        location: 'Kolkata',
        price: 3000,
        bio: 'An aspiring artist and a huge fan of Kolkata\'s street food. I\'m fun, energetic, and love discovering hidden gems in the city. Let\'s go for a tram ride or visit Kumartuli together!',
        interests: ['Painting', 'Street Food', 'Singing'],
        images: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '4',
        name: 'Tithi',
        age: 24,
        location: 'Kolkata',
        price: 3800,
        bio: 'Classical dancer and history enthusiast. I can take you on a tour of the Marble Palace or share stories about Kolkata\'s colonial past. Elegant, refined, and a great listener.',
        interests: ['Dance', 'History', 'Museums', 'Conversation'],
        images: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '5',
        name: 'Ananya',
        age: 26,
        location: 'Kolkata',
        price: 5500,
        bio: 'Corporate lawyer with a passion for jazz and rooftop lounges. Looking for a refined companion for a sophisticated evening. Perfect for business dinners or gala events.',
        interests: ['Jazz', 'Law', 'Wine', 'Networking'],
        images: ['https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    },
    {
        id: '6',
        name: 'Piyali',
        age: 21,
        location: 'Kolkata',
        price: 2500,
        bio: 'Journalism student who loves the chaos of Gariahat and the peace of Rabindra Sarobar Lake. I\'m curious, talkative, and always up for an adventure.',
        interests: ['Journalism', 'Walking Tours', 'Movies'],
        images: ['https://images.unsplash.com/photo-1512353075813-75c0274ee887?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        isAvailable: true,
    }
];

export function useCompanions() {
    const [companions, setCompanions] = useState<Companion[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load from local storage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setCompanions(JSON.parse(stored));
        } else {
            // Initialize if empty
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
            setCompanions(INITIAL_DATA);
        }
        setLoading(false);
    }, []);

    const addCompanion = (companion: Omit<Companion, 'id'>) => {
        const newCompanion = { ...companion, id: Date.now().toString() };
        const updated = [...companions, newCompanion];
        setCompanions(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const updateCompanion = (id: string, updates: Partial<Companion>) => {
        const updated = companions.map(c => c.id === id ? { ...c, ...updates } : c);
        setCompanions(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const deleteCompanion = (id: string) => {
        const updated = companions.filter(c => c.id !== id);
        setCompanions(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const getCompanion = (id: string) => companions.find(c => c.id === id);

    return {
        companions,
        loading,
        addCompanion,
        updateCompanion,
        deleteCompanion,
        getCompanion
    };
}
