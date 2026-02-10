
"use client";

import { useState } from 'react';
import { useCompanions } from '../../hooks/useCompanions';
import Link from 'next/link';
import { Companion } from '../../types';

export default function Browse() {
    const { companions, loading } = useCompanions();
    const [searchTerm, setSearchTerm] = useState('');
    const [locationFilter, setLocationFilter] = useState('');

    // Filtering Logic
    const filteredCompanions = companions.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (locationFilter ? c.location === locationFilter : true)
    );

    if (loading) return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Loading...</div>;

    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-slate-900 text-white">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Filters Sidebar */}
                <aside className="w-full md:w-1/4">
                    <div className="glass rounded-xl p-6 sticky top-24">
                        <h2 className="text-xl font-serif font-bold mb-4 text-pink-500">Find Your Match</h2>

                        {/* Search */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Search Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Ishani"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-purple-500 transition"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Location Filter */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">In Your City</label>
                            <select
                                title="Select City"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-purple-500 transition"
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                            >
                                <option value="">All Areas</option>
                                <option value="Kolkata">Kolkata (All)</option>
                                <option value="Park Street">Park Street</option>
                                <option value="Salt Lake">Salt Lake</option>
                                <option value="New Town">New Town</option>
                                <option value="Ballygunge">Ballygunge</option>
                                <option value="South City">South City</option>
                            </select>
                        </div>

                        <button
                            onClick={() => { setSearchTerm(''); setLocationFilter(''); }}
                            className="text-sm text-pink-400 hover:text-pink-300 underline mt-2 block w-full text-center"
                        >
                            Reset Filters
                        </button>
                    </div>
                </aside>

                {/* Grid */}
                <main className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-serif font-bold">Our <span className="text-pink-500">Companions</span></h1>
                        <span className="text-gray-400 text-sm">{filteredCompanions.length} Profiles Found</span>
                    </div>

                    {filteredCompanions.length === 0 ? (
                        <p className="text-gray-400 text-center py-12">No companions found matching your criteria.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCompanions.map((companion) => (
                                <CompanionCard key={companion.id} companion={companion} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

function CompanionCard({ companion }: { companion: Companion }) {
    return (
        <div className="glass rounded-xl overflow-hidden hover:bg-white/5 transition group border border-gray-800 hover:border-pink-500/30">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={companion.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={companion.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-white flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-1.5 ${companion.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    {companion.isAvailable ? 'Available' : 'Booked'}
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif text-white">{companion.name}, {companion.age}</h3>
                    <div className="flex items-center text-yellow-400 text-sm font-bold">
                        ★ 4.9
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">{companion.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4 h-16 overflow-hidden">
                    {companion.interests.slice(0, 3).map((interest, i) => (
                        <span key={i} className="bg-slate-800 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700">{interest}</span>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <span className="text-pink-400 font-bold">₹{companion.price}<span className="text-gray-500 text-xs font-normal">/hr</span></span>
                    <Link href={`/companions/${companion.id}`} className="text-sm font-bold text-white hover:text-pink-400 transition">View Profile →</Link>
                </div>
            </div>
        </div>
    );
}
