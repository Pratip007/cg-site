"use client";

import Link from 'next/link';
import { useCompanions } from '../hooks/useCompanions';

export default function Home() {
    const { companions, loading } = useCompanions();

    return (
        <main className="bg-slate-900 text-white font-sans antialiased min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AdultEntertainment",
                        "name": "VelvetDate - Premium Kolkata Escorts",
                        "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                        "description": "Kolkata's most elite and professional Sex Satisfaction, Call girl, VIP Escort platform. Curating elegance and sophistication.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Park Street",
                            "addressLocality": "Kolkata",
                            "addressRegion": "WB",
                            "postalCode": "700016",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 22.555,
                            "longitude": 88.351
                        },
                        "url": "https://velvetdate.com",
                        "telephone": "+91-9876543210",
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "priceRange": "₹2000 - ₹10000",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "1250"
                        }
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-10"></div>
                <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay z-10"></div>
                {/* Background Image Placeholder or CSS */}
                <div className="absolute inset-0 bg-[url('https://www.shutterstock.com/image-photo/beautiful-naked-female-body-on-260nw-2363035389.jpg')] bg-cover bg-center opacity-60"></div>

                <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                        Premium Call Girls, <br />
                        <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Models</span>, Airport Kolkata <br />
                        Top Hotels Escorts Service
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
                        Place Of Service : At home Events and parties Hotel / Motel Clubs Outcall
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
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl">💰</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">No commissions or fees</h3>
                                        <p className="text-gray-400">The companion keeps 100% of what she charges. No booking fees or commissions are charged by VelvetDate. Real-time online searches available to contact immediately and request to meet (Hottest Escort).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center text-2xl">�</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Live chat system & Notifications</h3>
                                        <p className="text-gray-400">VelvetDate gives premium clients the ability to message the companion directly. Premium clients can search offline escorts and set alerts, notifying when an escort is next available to contact (VIP SEXY MODELS).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-2xl">✅</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Verified reviews & Verification</h3>
                                        <p className="text-gray-400">Trusted reviews, written by real clients who can be trusted. All reviews are 100% verified. Companions can have their age and photos verified by VelvetDate's 24/7 support staff. Verified profiles are highlighted.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                            <img
                                src="https://lic.me/image/jessietaylor.jpg"
                                alt="Kolkata VIP Escort Service - Elegant Setting for Meeting Call Girls"
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
                        <p className="text-gray-400 max-w-4xl mx-auto">Our Website is designed as for user friendly and anyone can book easily VIP ESCORT and Hot Models and Hottest call girls. We ensure about 100% safety, 100% confidentiality, 100% sex satisfaction and Pleasure</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FeatureStep
                            title="Real-time online searches"
                            desc="VIP ESCORTS and sexy Call girls are available to contact immediately and request to meet. Clients can safely and discreetly request a date with an escort. Privacy and trust is a top priority for VelvetDate."
                            icon="🔍"
                            color="purple"
                        />
                        <FeatureStep
                            title="100% Real"
                            desc="All ratings and reviews are posted unedited for other clients to read, giving valuable and insightful feedback to the community and fully satisfied things are totally true."
                            icon="�"
                            color="pink"
                        />
                        <FeatureStep
                            title="100% Private"
                            desc="Once a request is complete, clients can leave a rating and written review of their escort experience. All feedback remains totally anonymous. We provide one of the best sex services in Kolkata. Our one of the hottest Call girls and hot VIP ESCORTS are renowned Models and they belong from Elite Culture also."
                            icon="🔒"
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
                                Relaxation & <br />
                                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-sans tracking-tight">Pleasure</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl">
                                100% Private. Once a request is complete, clients can leave a rating and written review of their escort experience. All feedback remains totally anonymous.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 glass rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors">
                                    <div className="text-3xl mb-3">💯</div>
                                    <h3 className="text-lg font-bold mb-2 text-white">100% Real</h3>
                                    <p className="text-sm text-gray-400 italic">All ratings and reviews are posted unedited for other clients to read, giving valuable and insightful feedback to the community. Whatever you see You get the same Horney beauty.</p>
                                </div>
                                <div className="p-6 glass rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                                    <div className="text-3xl mb-3">✅</div>
                                    <h3 className="text-lg font-bold mb-2 text-white">100% Verified</h3>
                                    <p className="text-sm text-gray-400 italic">Unique algorithms based on requests pattern checks help us determine which ratings and reviews are genuine, and remove fake and suspicious feedback.</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/browse" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-center hover:shadow-[0_0_30px_-5px_rgba(219,39,119,0.5)] transition-all transform hover:scale-105">
                                    Experience Pure Pleasure
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2 relative">
                            <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-50"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://ic-vt-nss.xhcdn.com/a/ZGIxYjQ1MmE1ZGE5MTRhMWE5NmQxNTUyMGI0MDUxNTE/s(w:2560,h:1440),webp/026/403/885/v2/2560x1440.205.webp"
                                    alt="Premium Escorts and Real Models for Relaxation and Pleasure in Kolkata"
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
                            { name: 'Happy Client', text: 'It\'s a wonderful night at ITC Royal Bengal, she is too satisfying, she give me wonderful blowjob Anal sex…tottaly friendly and genuine, she is a college girl, her age is near about 21 she is model…', rating: 5 },
                            { name: 'Satisfied Client', text: 'he is polite, homely and very sweet, cute in nature yet horny..No hurry in service and absolutely a pure soul..Purely gfe.. She is too horney…She is the best bong girl I ever met… perfect girl in bed… knows how to please a man… moreover she is the BJ Queen 👸🏼 👸🏼 👸🏼 … as mentioned in chat CIM her specialty and that’s true… real BJ Queen… 10 out of 10…', rating: 5 },
                            { name: 'Trusting Client', text: 'She’s one of the few genuine girls out there who actually provides value for your money. Extremely cooperative and straightforward. If you\'re tired of all the scammers and fake profiles, this is the real deal—no bluffing. Take my word for it and give her a try', rating: 5 }
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
                            { q: 'How do I book an appointment?', a: 'You have to choose the models…whatever you see , you get the same beauty girl.' },
                            { q: 'Are the profiles verified?', a: '100% verified models and we provide also spa service, full body massages include private parts….you have to do choose and book the girls after that honrey beauty is your in your preferable location, Hotels , near about kolkata.' },
                            { q: 'What are the booking hours?', a: 'Many services claim to operate 24/7, with specific hours often listed (e.g., 11 AM to 3 AM daily).' },
                            { q: 'Are they over 18?', a: 'Websites usually explicitly state that they are for adults 18+ only and that they do not promote illegal activities or underage services.' }
                        ].map((item, id) => (
                            <div key={id} className="glass p-6 rounded-xl border border-white/5">
                                <h4 className="font-bold text-lg mb-2 text-pink-400">Q: {item.q}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Block - Hidden visually but present for crawlers or kept low profile */}
            <section className="py-12 bg-black text-gray-800 text-xs leading-relaxed">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-gray-700 font-bold mb-4 uppercase tracking-widest">Best Sex Service & Call Girls in Kolkata</h2>
                    <p className="mb-4">
                        VelvetDate offers the most satisfying **Sex Service in Kolkata**. Our agency provides top-class **Kolkata Call Girls** and **VIP Escort Services** for your ultimate pleasure. If you are looking for a **Hot Call Girl**, **Sexy Escort**, or **Independent Model** for **Full Night Sex** or **Real Love Making**, you are at the right place. We cover all locations like **Park Street**, **Salt Lake**, **New Town**, and **Airport Area**.
                    </p>
                    <p className="mb-4">
                        Our **Escort Service** includes verified **College Girls**, **Bhabhi Call Girls**, **Housewife Escorts**, and **Russian Models**. We are known for providing the **Best Call Girl Service** in the city with 100% privacy. Whether you want **Oral Sex**, **GFE (Girlfriend Experience)**, or a **Romantic Date**, our **Sexy Call Girls** are ready to serve you 24/7 at your Hotel or Home.
                    </p>
                    <p>
                        Book now for **Premium Sex Pleasure** with the hottest **Escorts in Kolkata**. We are the most trusted agency for **Safe and Discreet Sex Services** near you.
                    </p>
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
