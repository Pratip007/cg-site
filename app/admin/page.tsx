"use client";

import { useState } from 'react';
import { useCompanions } from '../../hooks/useCompanions';
import { Companion } from '../../types';

export default function AdminPanel() {
    const { companions, addCompanion, updateCompanion, deleteCompanion } = useCompanions();
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        age: 18,
        location: '',
        price: 0,
        bio: '',
        interests: '',
        images: '',
        isAvailable: true
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const companionData = {
            name: formData.name,
            age: Number(formData.age),
            location: formData.location,
            price: Number(formData.price),
            bio: formData.bio,
            interests: formData.interests.split(',').map(i => i.trim()).filter(Boolean),
            images: formData.images.split('\n').map(i => i.trim()).filter(Boolean),
            isAvailable: formData.isAvailable
        };

        if (editingId) {
            updateCompanion(editingId, companionData);
            setEditingId(null);
        } else {
            addCompanion(companionData);
        }

        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            age: 18,
            location: '',
            price: 0,
            bio: '',
            interests: '',
            images: '',
            isAvailable: true
        });
        setShowForm(false);
        setEditingId(null);
    };

    const handleEdit = (companion: Companion) => {
        setFormData({
            name: companion.name,
            age: companion.age,
            location: companion.location,
            price: companion.price,
            bio: companion.bio,
            interests: companion.interests.join(', '),
            images: companion.images.join('\n'),
            isAvailable: companion.isAvailable
        });
        setEditingId(companion.id);
        setShowForm(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this companion profile?')) {
            deleteCompanion(id);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                            Admin <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Dashboard</span>
                        </h1>
                        <p className="text-gray-400">Manage all companion profiles</p>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/30 transition transform hover:scale-105 text-sm md:text-base w-full md:w-auto"
                    >
                        {showForm ? '✕ Cancel' : '+ Add New Companion'}
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="glass rounded-xl p-6 border-l-4 border-purple-500">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Total Profiles</p>
                        <p className="text-3xl font-bold">{companions.length}</p>
                    </div>
                    <div className="glass rounded-xl p-6 border-l-4 border-green-500">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Available</p>
                        <p className="text-3xl font-bold text-green-400">{companions.filter(c => c.isAvailable).length}</p>
                    </div>
                    <div className="glass rounded-xl p-6 border-l-4 border-red-500">
                        <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Booked</p>
                        <p className="text-3xl font-bold text-red-400">{companions.filter(c => !c.isAvailable).length}</p>
                    </div>
                </div>

                {/* Add/Edit Form */}
                {showForm && (
                    <div className="glass rounded-2xl p-6 md:p-8 mb-8 border border-yellow-500/30">
                        <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                            {editingId ? 'Edit Companion Profile' : 'Add New Companion'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                                        placeholder="e.g. Ishani Sharma"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Age *</label>
                                    <input
                                        type="number"
                                        required
                                        min="18"
                                        max="50"
                                        value={formData.age}
                                        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Location *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                                        placeholder="e.g. Kolkata, Park Street, Salt Lake"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Price (₹/hr) *</label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        step="500"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                                        placeholder="e.g. 3500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Bio *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                                    placeholder="Write a compelling bio..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Interests (comma-separated) *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.interests}
                                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                                    placeholder="e.g. Reading, Travel, Cooking, Music"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Image URLs (one per line) *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.images}
                                    onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500 font-mono text-sm"
                                    placeholder="https://example.com/photo1.jpg&#10;https://example.com/photo2.jpg&#10;https://example.com/photo3.jpg"
                                />
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {formData.images.split('\n').filter(i => i.trim() && i.startsWith('http')).slice(0, 5).map((url, idx) => (
                                        <div key={idx} className="relative w-12 h-12 rounded border border-gray-700 overflow-hidden">
                                            <img src={url.trim()} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    {formData.images.split('\n').filter(i => i.trim()).length > 5 && (
                                        <div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center text-xs text-gray-500">
                                            +{formData.images.split('\n').filter(i => i.trim()).length - 5}
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Enter each photo URL on a new line. You can add as many as you want!</p>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="available"
                                    checked={formData.isAvailable}
                                    onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                                    className="w-4 h-4 text-purple-600 bg-slate-800 border-gray-700 rounded focus:ring-purple-500"
                                />
                                <label htmlFor="available" className="ml-2 text-sm font-medium text-gray-400">
                                    Available for Booking
                                </label>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-2.5 md:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/30 transition text-sm md:text-base"
                                >
                                    {editingId ? 'Update Profile' : 'Add Profile'}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-4 py-2.5 md:px-6 md:py-3 bg-slate-700 rounded-lg font-bold hover:bg-slate-600 transition text-sm md:text-base"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Companions List */}
                <div className="glass rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">All Companion Profiles ({companions.length})</h2>

                    {companions.length === 0 ? (
                        <p className="text-gray-400 text-center py-12">No companions yet. Add your first profile!</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-gray-700">
                                    <tr>
                                        <th className="pb-3 text-gray-400 font-medium text-sm">Photo</th>
                                        <th className="pb-3 text-gray-400 font-medium text-sm">Name</th>
                                        <th className="pb-3 text-gray-400 font-medium text-sm hidden md:table-cell">Location</th>
                                        <th className="pb-3 text-gray-400 font-medium text-sm hidden md:table-cell">Price</th>
                                        <th className="pb-3 text-gray-400 font-medium text-sm">Status</th>
                                        <th className="pb-3 text-gray-400 font-medium text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companions.map((companion) => (
                                        <tr key={companion.id} className="border-b border-gray-800 hover:bg-white/5 transition">
                                            <td className="py-4">
                                                <img
                                                    src={companion.images[0] || 'https://via.placeholder.com/100'}
                                                    alt={companion.name}
                                                    className="w-16 h-16 rounded-lg object-cover"
                                                />
                                            </td>
                                            <td className="py-4">
                                                <p className="font-bold">{companion.name}</p>
                                                <p className="text-sm text-gray-400">{companion.age} years</p>
                                            </td>
                                            <td className="py-4 hidden md:table-cell text-gray-300">{companion.location}</td>
                                            <td className="py-4 hidden md:table-cell text-pink-400 font-bold">₹{companion.price}/hr</td>
                                            <td className="py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${companion.isAvailable ? 'bg-green-900/30 text-green-400 border border-green-500/50' : 'bg-red-900/30 text-red-400 border border-red-500/50'}`}>
                                                    {companion.isAvailable ? 'Available' : 'Booked'}
                                                </span>
                                            </td>
                                            <td className="py-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(companion)}
                                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition"
                                                        title="Edit"
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(companion.id)}
                                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition"
                                                        title="Delete"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
