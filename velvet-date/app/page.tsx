"use client";

import Link from 'next/link';
import { useCompanions } from '../hooks/useCompanions';

export default function Home() {
    const { companions, loading } = useCompanions();

    return (
        <main className="bg-slate-900 text-white font-sans antialiased min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-10"></div>
                {/* Background Image Placeholder or CSS */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-60"></div>

                <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                        Find Your Perfect <br />
                        <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Companion</span> For Any Moment
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
                        Experience meaningful connections without the complications. Rent a companion for social events, cultural gatherings, or specialized dates in the heart of Kolkata.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/browse" className="px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm md:text-base">
                            Browse Profiles
                        </Link>
                        <Link href="#how-it-works" className="px-6 py-3 md:px-8 md:py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition transform hover:scale-105 backdrop-blur-md border border-white/20 text-sm md:text-base">
                            How It Works
                        </Link>
                    </div>

                    <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase">
                        <span>Verified Profiles</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Strictly Platonic</span>
                        <span className="hidden sm:inline">•</span>
                        <span>100% Confidential</span>
                    </div>
                </div>
            </section>

            {/* Featured Profiles Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Featured <span className="text-pink-500">Companions</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-400">Handpicked for their elegance and charm in Kolkata.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            <div className="col-span-full text-center py-20 text-gray-500">Loading elegance...</div>
                        ) : companions.length === 0 ? (
                            <div className="col-span-full text-center py-20 text-gray-400">No profiles found. Visit admin to add some!</div>
                        ) : (
                            companions.slice(0, 6).map((companion) => (
                                <FeaturedCard
                                    key={companion.id}
                                    id={companion.id}
                                    name={companion.name}
                                    age={companion.age}
                                    location={companion.location}
                                    price={companion.price}
                                    image={companion.images[0]}
                                    desc={companion.bio}
                                />
                            ))
                        )}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/browse" className="inline-block px-8 py-3 md:px-10 md:py-4 glass text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition transform hover:translate-y-1 shadow-lg hover:shadow-purple-500/20 text-sm md:text-base">
                            View All Profiles
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose VelvetDate? */}
            <section className="py-24 bg-slate-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                                Why Choose <span className="text-pink-500">VelvetDate</span> In Kolkata?
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl">✨</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Curated Elegance</h3>
                                        <p className="text-gray-400">Our companions are chosen for their education, conversation skills, and social intelligence, moving beyond just aesthetics.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center text-2xl">🛡️</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Total Confidentiality</h3>
                                        <p className="text-gray-400">Your privacy is our highest priority. We use secure booking systems and maintain 100% discretion for all meetings.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-2xl">🏙️</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                                        <p className="text-gray-400">Our companions know the finest corners of Kolkata, from the hidden cafes of North Kolkata to the gala events in New Town.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Elegant Setting"
                                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-slate-800 relative clip-path-slant">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Simple & <span className="text-pink-500">Secure</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our 3-step process is designed to ensure safety and satisfaction for every engagement.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FeatureStep
                            title="1. Browse & Filter"
                            desc="Search through verified profiles based on location (Park Street, Salt Lake, New Town...), interests, and personality."
                            icon="🔍"
                            color="purple"
                        />
                        <FeatureStep
                            title="2. Book a Date"
                            desc="Send a request with your date details. We handle scheduling and secure the professional engagement."
                            icon="📅"
                            color="pink"
                        />
                        <FeatureStep
                            title="3. Enjoy Your Time"
                            desc="Meet your companion and enjoy a stress-free, engaging time. Strictly platonic and high-standard."
                            icon="✨"
                            color="blue"
                        />
                    </div>
                </div>
            </section>

            {/* Kolkata's Social Hotspots */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Elite <span className="text-pink-500">Kolkata</span> Destinations</h2>
                        <p className="text-gray-400">Where our companions can accompany you for the perfect experience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Park Street', desc: 'Fine dining, upscale lounges, and the legendary nightlife of Kolkata.', img: 'https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
                            { name: 'Salt Lake', desc: 'Stylish cafes, peaceful walks at Central Park, and modern shopping hubs.', img: 'https://images.unsplash.com/photo-1623153545025-a4ce8309a6ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
                            { name: 'Victoria Memorial', desc: 'The heritage charm of the city, perfect for a sophisticated afternoon walk.', img: 'https://images.unsplash.com/photo-1619864024354-944299b90c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
                            { name: 'New Town', desc: 'Gala events, business conventions, and high-tech corporate gatherings.', img: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' }
                        ].map((place, idx) => (
                            <div key={idx} className="group relative rounded-xl overflow-hidden h-64 border border-gray-800">
                                <img src={place.img} alt={place.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold mb-1">{place.name}</h3>
                                    <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{place.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-800 relative clip-path-slant-reverse">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Client Experiences</h2>
                        <p className="text-gray-400">What others are saying about their time with our companions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Amit R.', text: 'Absolutely professional and engaging. My companion for the corporate gala at ITC Sonar was the highlight of the evening.', rating: 5 },
                            { name: 'Sameer K.', text: 'Discretion was my biggest concern, but VelvetDate handled everything perfectly. Highly recommended for meaningful conversation.', rating: 5 },
                            { name: 'Vikram S.', text: 'Kolkata has many options, but the standard of companions here is truly elite. A refined experience from start to finish.', rating: 5 }
                        ].map((t, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border-t-2 border-pink-500/20">
                                <div className="text-yellow-400 mb-4">{'★'.repeat(t.rating)}</div>
                                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                                <div className="font-bold text-white">— {t.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center underline decoration-pink-500 underline-offset-8">Common Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'Is this service strictly platonic?', a: 'Yes. VelvetDate provides professional, platonic companionship for social, cultural, and business events.' },
                            { q: 'How do I ensure a booking?', a: 'Once you select a profile, fill in your date details. Our team verifies the availability and confirms within 2-4 hours.' },
                            { q: 'Are the profiles verified?', a: 'Every companion on our platform undergoes a rigorous screening process to ensure authenticity and professionalism.' }
                        ].map((item, id) => (
                            <div key={id} className="glass p-6 rounded-xl border border-white/5">
                                <h4 className="font-bold text-lg mb-2 text-pink-400">Q: {item.q}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeaturedCard({ id, name, age, location, price, image, desc }: any) {
    return (
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition transform hover:-translate-y-2 cursor-pointer bg-slate-800 border border-slate-700 hover:border-pink-500/50">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 transition opacity-90 group-hover:opacity-60"></div>
            <img src={image} alt={name} className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition transform duration-300">
                <div className="flex justify-between items-end mb-2">
                    <div>
                        <h3 className="text-2xl font-bold font-serif text-white">{name}, {age}</h3>
                        <p className="text-pink-400 text-sm font-medium">{location}</p>
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/30 text-white">₹{price}/hr</span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {desc}
                </p>
                <Link href={`/companions/${id}`} className="block w-full text-center py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/40 transition text-white text-sm md:text-base">
                    View Profile
                </Link>
            </div>
        </div>
    )
}

function FeatureStep({ title, desc, icon, color }: any) {
    return (
        <div className="text-center p-8 glass rounded-2xl hover:bg-white/5 transition duration-300 transform hover:scale-105">
            <div className={`w-20 h-20 bg-${color}-600/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-gray-400">{desc}</p>
        </div>
    )
}
