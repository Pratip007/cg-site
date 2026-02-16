import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-16 border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wider">
                            VELVET<span className="text-pink-600">DATE</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Kolkata's most elite and professional Sex Satisfaction, Call girl, VIP Escort platform. Curating elegance and sophistication for your social and cultural engagements. We provide the best SEX pleasure in Whole kolkata no one can do like us…we provide the best experience and beauty satisfaction, role play, and all type of positions you can try
                        </p>
                        <div className="flex space-x-4">
                            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition cursor-pointer">f</span>
                            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition cursor-pointer">ig</span>
                            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition cursor-pointer">tw</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-pink-500 transition">Home</Link></li>
                            <li><Link href="/browse" className="hover:text-pink-500 transition">Browse Companions</Link></li>
                            <li><Link href="/admin" className="hover:text-pink-500 transition">Admin Dashboard</Link></li>
                            <li><Link href="/#how-it-works" className="hover:text-pink-500 transition">How It Works</Link></li>
                        </ul>
                    </div>

                    {/* Popular Areas */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Kolkata Areas</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/browse?area=Park Street" className="hover:text-pink-500 transition">Park Street</Link></li>
                            <li><Link href="/browse?area=Salt Lake" className="hover:text-pink-500 transition">Salt Lake</Link></li>
                            <li><Link href="/browse?area=New Town" className="hover:text-pink-500 transition">New Town</Link></li>
                            <li><Link href="/browse?area=Ballygunge" className="hover:text-pink-500 transition">Ballygunge</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Safety */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Safety & Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-pink-500 font-bold">•</span>
                                <span>Strictly Platonic Policy</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-pink-500 font-bold">•</span>
                                <span>Privacy & Confidentiality</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-pink-500 font-bold">•</span>
                                <span>Terms of Service</span>
                            </li>
                            <li className="pt-4">
                                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20 rounded-full">
                                    VERIFIED PROFILES
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Searches for SEO */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8 border-t border-gray-800 pt-8">
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-center">Popular Searches in Kolkata</h4>
                        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500">
                            {['Call Girl in Kolkata', 'Kolkata Escort Service', 'Russian Escort Kolkata', 'Housewife Escort', 'College Girl Escort', 'VIP Models Kolkata', 'Ballygunge Escorts', 'Salt Lake Call Girls', 'New Town Escorts', 'Park Street VIP Service', 'Howrah Call Girls', 'Airport Escorts', 'Hotel Service', 'Home Delivery Escort', 'Cheap Call Girls', 'Premium Escorts', 'Independent Models', 'Auntie Escorts', 'Teen Escorts', 'Bengali Call Girls', 'Hindi Bhabhi', 'Kolkata Red Light Area', 'Massage Parlour Kolkata'].map((keyword, i) => (
                                <span key={i} className="hover:text-pink-500 transition cursor-pointer border border-gray-800 px-2 py-1 rounded-md bg-slate-900/50">{keyword}</span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2026 VelvetDate Inc. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Refund Policy</Link>
                        <Link href="#" className="hover:text-white transition">Safety Tips</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
