"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation, ExternalLink } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="iletisim" className="py-20 md:py-32 bg-[#1C1C1C]">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4"
                    >
                        İletişim
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Bize Ulaşın
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            7/24 Açık
                        </span>
                    </motion.div>
                </div>

                {/* Premium 3-CTA Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    {/* CTA 1: HEMEN ARA */}
                    <a
                        href="tel:+905324934968"
                        className="group relative overflow-hidden p-6 md:p-8 bg-gradient-to-br from-[#FF3D00] to-[#FF6B00] rounded-2xl text-center hover:scale-[1.02] transition-all duration-300 glow"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Hemen Ara</h3>
                            <p className="text-white/80 text-lg font-medium">0532 493 49 68</p>
                            <p className="text-white/60 text-sm mt-2">1 dokunuşla arayın</p>
                        </div>
                    </a>

                    {/* CTA 2: WHATSAPP */}
                    <a
                        href="https://wa.me/905324934968?text=Merhaba,%20araç%20bakımı%20için%20bilgi%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden p-6 md:p-8 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl text-center hover:scale-[1.02] transition-all duration-300"
                        style={{ boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)' }}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-white/80 text-sm">Mesaj gönderin</p>
                            <p className="text-white/60 text-sm mt-2">Hızlı yanıt garantisi</p>
                        </div>
                    </a>

                    {/* CTA 3: YOL TARİFİ */}
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Oto+Yasin+Atatürk+Bulvarı+Güneş+Sokak+Kaş&travelmode=driving"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden p-6 md:p-8 bg-gradient-to-br from-[#4285F4] to-[#1967D2] rounded-2xl text-center hover:scale-[1.02] transition-all duration-300"
                        style={{ boxShadow: '0 0 30px rgba(66, 133, 244, 0.3)' }}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Navigation className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Yol Tarifi Al</h3>
                            <p className="text-white/80 text-sm">Google Maps</p>
                            <p className="text-white/60 text-sm mt-2">Navigasyonu başlat</p>
                        </div>
                    </a>
                </motion.div>

                {/* Address & Map Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Address Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Address Card */}
                        <div className="p-6 bg-[#27272A] border border-white/5 rounded-2xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#FF3D00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-[#FF3D00]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-2">Adresimiz</h3>
                                    <p className="text-[#A1A1AA] leading-relaxed">
                                        Ova, Atatürk Bulvarı Güneş Sokak No 134/4,<br />
                                        07974 Kaş/Antalya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="p-6 bg-[#27272A] border border-white/5 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF3D00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-[#FF3D00]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-2">Çalışma Saatleri</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#A1A1AA]">Pazartesi - Pazar</span>
                                            <span className="text-green-400 font-medium">7/24 Açık</span>
                                        </div>
                                        <p className="text-[#71717A] text-sm">
                                            Acil durumlar için her zaman ulaşılabilir
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Badges */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="tel:+905324934968"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#27272A] hover:bg-[#3F3F46] border border-white/5 rounded-xl text-white text-sm transition-colors"
                            >
                                <Phone className="w-4 h-4 text-[#FF3D00]" />
                                0532 493 49 68
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Oto+Yasin+Ka%C5%9F+Antalya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#27272A] hover:bg-[#3F3F46] border border-white/5 rounded-xl text-white text-sm transition-colors"
                            >
                                <ExternalLink className="w-4 h-4 text-[#FF3D00]" />
                                Google&apos;da Görüntüle
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - Google Maps Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-white/5"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.5!2d29.6407!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1e4a65c98c36d%3A0x3c5e7a6b9f8d2e1a!2sOTO%20Yasin!5e0!3m2!1str!2str!4v1706169600000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Oto Yasin Konum"
                            className="grayscale-[30%] contrast-110 hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Map Overlay CTA */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Oto+Yasin+Atatürk+Bulvarı+Güneş+Sokak+Kaş&travelmode=driving"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-medium rounded-xl transition-colors shadow-lg"
                            >
                                <Navigation className="w-5 h-5" />
                                Yol Tarifi Al
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
