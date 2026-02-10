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

            {/* Client Oriented - Relaxation & Pleasure */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-600/10 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1 animate-fade-in-up">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                Client-Oriented <br />
                                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-sans tracking-tight">Relaxation & Pleasure</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl">
                                Our service is strictly engineered around your well-being. Whether you seek a quiet escape from organizational stress or a day dedicated to pure aesthetic pleasure, we provide the ultimate companionship for your relaxation.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 glass rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors">
                                    <div className="text-3xl mb-3">🧘‍♂️</div>
                                    <h3 className="text-lg font-bold mb-2 text-white">Curated Peace</h3>
                                    <p className="text-sm text-gray-400 italic">Experience silence and presence with a companion who understands the value of peace.</p>
                                </div>
                                <div className="p-6 glass rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                                    <div className="text-3xl mb-3">🎨</div>
                                    <h3 className="text-lg font-bold mb-2 text-white">Leisure Oriented</h3>
                                    <p className="text-sm text-gray-400 italic">From art galleries to premium lounges, enjoy time focused entirely on your satisfaction.</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/browse" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-center hover:shadow-[0_0_30px_-5px_rgba(219,39,119,0.5)] transition-all transform hover:scale-105">
                                    Experience Pure Luxury
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2 relative">
                            <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-50"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1544161515-4ae6ce6ca676?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="Relaxation and Pleasure"
                                    className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 p-8 glass backdrop-blur-lg rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-1 border-t-2 border-pink-500"></div>
                                        <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-pink-500">The Ultimate Standard</span>
                                    </div>
                                    <p className="text-white text-lg font-light italic leading-relaxed">
                                        "True luxury is being able to disconnect and simply be yourself in the company of someone who truly appreciate the moment."
                                    </p>
                                </div>
                            </div>
                        </div>
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
