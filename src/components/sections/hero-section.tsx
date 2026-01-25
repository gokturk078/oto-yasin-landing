"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#0A0A0A]">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-[#FF3D00]/20 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-[#FF6B00]/10 rounded-full blur-[60px] md:blur-[100px]" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="section-container relative z-10 py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
                    >
                        <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-medium">4.9</span>
                        </span>
                        <span className="w-px h-4 bg-white/20" />
                        <span className="text-[#A1A1AA] text-sm">Google&apos;da 43+ olumlu değerlendirme</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Kaş&apos;ın En Güvenilir{" "}
                        <span className="text-gradient">Oto Tamir</span> ve{" "}
                        <span className="text-gradient">Bakım Merkezi</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#A1A1AA] mb-8 max-w-2xl mx-auto"
                    >
                        7/24 açık, 20+ yıllık tecrübe, orijinal yedek parça garantisi ile
                        aracınız güvenilir ellerde. Acil servis için hemen arayın!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <a
                            href="https://wa.me/905324934968?text=Merhaba,%20araç%20bakımı%20için%20randevu%20almak%20istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-8 py-4 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-300 interactive glow"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Randevu Al</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link
                            href="#hizmetler"
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-200"
                        >
                            Hizmetlerimizi İncele
                        </Link>
                    </motion.div>

                    {/* Trust Badges Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
                    >
                        {[
                            { icon: Clock, label: "7/24", sublabel: "Hizmet" },
                            { icon: Shield, label: "1 Yıl", sublabel: "Garanti" },
                            { icon: Star, label: "20+", sublabel: "Yıl Tecrübe" },
                            { icon: Phone, label: "Acil", sublabel: "Çekici" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl"
                            >
                                <item.icon className="w-6 h-6 text-[#FF3D00] mb-2" />
                                <span className="text-white font-bold">{item.label}</span>
                                <span className="text-[#A1A1AA] text-sm">{item.sublabel}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-3 bg-[#FF3D00] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
