"use client";

import { useParams } from 'next/navigation';
import { useCompanions } from '../../../hooks/useCompanions';
import Link from 'next/link';
import { useState } from 'react';

export default function CompanionProfile() {
    const params = useParams();
    const { getCompanion } = useCompanions();
    const companion = getCompanion(params.id as string);

    const [bookingDate, setBookingDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [duration, setDuration] = useState('2 Hours');
    const [meetingPlace, setMeetingPlace] = useState('');
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const handleBookingRequest = () => {
        if (!bookingDate || !startTime || !meetingPlace) {
            alert('Please fill in all fields');
            return;
        }

        const formattedDate = bookingDate.split('-').reverse().join('-');

        const message = `Booking Request for ${companion?.name || 'Companion'}
        
Date: ${formattedDate}
Start Time: ${startTime}
Duration: ${duration}
Meeting Place: ${meetingPlace}`;

        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        if (whatsappNumber) {
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        } else {
            console.error('WhatsApp number not configured');
            alert('WhatsApp number not configured in environment variables');
        }
    };

    if (!companion) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Profile Loading...</h1>

                </div>
            </div>
        );
    }

    return (
        <div className="pt-4 md:pt-14 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-slate-900 text-white">

            {/* Breadcrumb */}
            <nav className="flex mb-2 text-gray-400 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/browse" className="hover:text-white">Browse</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{companion.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Photos & About */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Photo */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[400px] md:h-[600px] bg-slate-800">
                        <img
                            src={activeImage || companion.images[0] || 'https://via.placeholder.com/1200x600?text=No+Image'}
                            alt={companion.name}
                            className="w-full h-full object-cover transition-all duration-500"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">
                                📷 {companion.images.length} Photos
                            </span>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    {companion.images.length > 1 && (
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                            {companion.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative rounded-xl overflow-hidden cursor-pointer transition transform hover:scale-105 ${(activeImage === img || (!activeImage && idx === 0))
                                            ? 'ring-2 ring-pink-500 scale-105'
                                            : 'opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        className="h-20 w-full object-cover"
                                        alt={`${companion.name} thumbnail ${idx + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* About Section */}
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-pink-500">About Me</h2>
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                            {companion.bio}
                        </p>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-wider">Age</span>
                                <span className="text-lg font-bold">{companion.age}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-wider">Location</span>
                                <span className="text-lg font-bold">{companion.location}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-wider">Status</span>
                                <span className={`text-lg font-bold ${companion.isAvailable ? 'text-green-400' : 'text-red-400'}`}>
                                    {companion.isAvailable ? 'Available' : 'Booked'}
                                </span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase tracking-wider">Rate</span>
                                <span className="text-lg font-bold text-pink-400">₹{companion.price}/hr</span>
                            </div>
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center text-pink-500">
                            <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {companion.interests.map((interest, i) => (
                                <span key={i} className="px-4 py-2 bg-purple-900/30 text-purple-300 border border-purple-500/50 rounded-full text-sm font-medium">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking Widget */}
                <div className="lg:col-span-1">
                    <div className="glass rounded-2xl p-6 sticky top-24 border border-purple-500/30 shadow-lg shadow-purple-900/20">
                        <div className="flex justify-between items-end mb-6 border-b border-gray-700 pb-6">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-serif font-bold text-white">{companion.name}</h1>
                                <div className="flex items-center mt-1">
                                    <span className={`w-2 h-2 rounded-full mr-2 ${companion.isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                                    <span className={`text-sm font-medium ${companion.isAvailable ? 'text-green-400' : 'text-red-400'}`}>
                                        {companion.isAvailable ? 'Available' : 'Booked'}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    ₹{companion.price}
                                </span>
                                <span className="text-gray-400 text-xs md:text-sm block">per hour</span>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                                <input
                                    type="date"
                                    value={bookingDate}
                                    onChange={(e) => setBookingDate(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Start Time</label>
                                    <input
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Duration</label>
                                    <select
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                                    >
                                        <option value="2 Hours">2 Hours</option>
                                        <option value="3 Hours">3 Hours</option>
                                        <option value="4 Hours">4 Hours</option>
                                        <option value="5+ Hours">5+ Hours</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Meeting Place</label>
                                <input
                                    type="text"
                                    value={meetingPlace}
                                    onChange={(e) => setMeetingPlace(e.target.value)}
                                    placeholder="e.g. Cafe Coffee Day, MG Road"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-gray-400">Rate ({(parseInt(duration) || 2)} hrs)</span>
                                    <span>₹{companion.price * (parseInt(duration) || 2)}</span>
                                </div>
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-gray-400">Service Fee</span>
                                    <span>₹{Math.round(companion.price * 0.15)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-2 border-t border-purple-500/20 mt-2">
                                    <span>Total</span>
                                    <span className="text-pink-400">₹{companion.price * (parseInt(duration) || 2) + Math.round(companion.price * 0.15)}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleBookingRequest}
                                disabled={!companion.isAvailable}
                                className="w-full py-3.5 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-purple-500/40 transition transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                            >
                                {companion.isAvailable ? 'Request Booking' : 'Currently Unavailable'}
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                You won't be charged until the booking is confirmed.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
