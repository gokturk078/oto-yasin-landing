"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Phone,
    MapPin,
    Clock,
    Star,
    ArrowRight,
    CheckCircle,
    ChevronDown,
    Shield,
    Award,
    MessageCircle,
    ArrowLeft,
    Wrench,
    Zap,
    Droplet,
    Settings,
    Package,
    LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { ServiceData, ServiceIconType } from "@/lib/services-data";

// Map icon string identifiers to actual Lucide components
const iconMap: Record<ServiceIconType, LucideIcon> = {
    Wrench,
    Zap,
    Droplet,
    Shield,
    Settings,
    Package,
};

interface ServicePageClientProps {
    service: ServiceData;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-[#FF3D00]/20 rounded-full blur-[80px] md:blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-[#FF6B00]/10 rounded-full blur-[60px] md:blur-[100px]" />
                </div>
                <div className="section-container relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-6"
                    >
                        <Link href="/" className="hover:text-white transition-colors">
                            Ana Sayfa
                        </Link>
                        <span>/</span>
                        <Link href="/#hizmetler" className="hover:text-white transition-colors">
                            Hizmetler
                        </Link>
                        <span>/</span>
                        <span className="text-[#FF3D00]">{service.shortTitle}</span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-20 h-20 bg-[#FF3D00]/10 rounded-2xl flex items-center justify-center mb-6"
                            >
                                {(() => {
                                    const IconComponent = iconMap[service.icon];
                                    return <IconComponent className="w-10 h-10 text-[#FF3D00]" />;
                                })()}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-[#A1A1AA] mb-8"
                            >
                                {service.heroDescription}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4 mb-8"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Clock className="w-4 h-4 text-[#FF3D00]" />
                                    <span className="text-white">{service.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Shield className="w-4 h-4 text-[#FF3D00]" />
                                    <span className="text-white">{service.warranty}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-white">4.9/5 Google</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <a
                                    href="tel:+905324934968"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-200 glow"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Hemen Ara</span>
                                </a>
                                <a
                                    href={`https://wa.me/905324934968?text=Merhaba,%20${encodeURIComponent(service.shortTitle)}%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all duration-200"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>WhatsApp</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Price & Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20">
                                    7/24 Açık
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">
                                    Şu An Açık
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#FF3D00]" />
                                    <span className="text-[#A1A1AA]">Ücretsiz Arıza Tespiti</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#FF3D00]" />
                                    <span className="text-[#A1A1AA]">Orijinal Yedek Parça</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#FF3D00]" />
                                    <span className="text-[#A1A1AA]">{service.warranty}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#FF3D00]" />
                                    <span className="text-[#A1A1AA]">Nakit & Kredi Kartı</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <MapPin className="w-5 h-5 text-[#FF3D00] flex-shrink-0" />
                                <div>
                                    <p className="text-white font-medium">Kaş, Antalya</p>
                                    <p className="text-[#A1A1AA] text-sm">Ova, Atatürk Bulvarı Güneş Sokak No 134/4, 07974</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-[#1C1C1C]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4">
                            Kapsamlı Hizmet
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {service.shortTitle} Hizmetlerimiz
                        </h2>
                        <p className="text-[#A1A1AA] max-w-2xl mx-auto">
                            20+ yıllık tecrübemizle profesyonel {service.shortTitle.toLowerCase()} hizmeti sunuyoruz.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                variants={itemVariants}
                                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF3D00]/20 rounded-xl transition-all duration-300"
                            >
                                <div className="w-8 h-8 bg-[#FF3D00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-4 h-4 text-[#FF3D00]" />
                                </div>
                                <span className="text-white">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20 bg-[#0A0A0A]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4">
                            Neden Biz?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {service.shortTitle} Uzmanlığımız
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {service.details.map((detail, index) => (
                            <motion.div
                                key={detail.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 bg-[#1C1C1C] hover:bg-[#27272A] border border-white/5 hover:border-[#FF3D00]/20 rounded-2xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-[#FF3D00]/10 group-hover:bg-[#FF3D00]/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                                    <Award className="w-7 h-7 text-[#FF3D00]" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FF3D00] transition-colors">
                                    {detail.title}
                                </h3>
                                <p className="text-[#A1A1AA] leading-relaxed">{detail.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#1C1C1C]">
                <div className="section-container">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4">
                                Sıkça Sorulan Sorular
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {service.shortTitle} Hakkında
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {service.faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-white/10 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 text-left bg-[#27272A] hover:bg-[#3F3F46] transition-colors"
                                    >
                                        <span className="text-white font-medium pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-[#FF3D00] transition-transform duration-200 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96" : "max-h-0"
                                            }`}
                                    >
                                        <div className="p-5 pt-0 bg-[#27272A]">
                                            <p className="text-[#A1A1AA] leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FF3D00] to-[#FF6B00]">
                <div className="section-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {service.shortTitle} İçin Hemen Arayın
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Profesyonel ekibimiz aracınız için en iyi çözümü sunmak üzere hazır.
                            İlk bakımınızda %10 indirim fırsatını kaçırmayın!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+905324934968"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#FF3D00] font-bold rounded-xl hover:bg-white/90 transition-all duration-200"
                            >
                                <Phone className="w-5 h-5" />
                                <span>0532 493 49 68</span>
                            </a>
                            <a
                                href={`https://wa.me/905324934968?text=Merhaba,%20${encodeURIComponent(service.shortTitle)}%20hizmeti%20için%20randevu%20almak%20istiyorum.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/30"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp ile Randevu</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back to Services */}
            <section className="py-12 bg-[#0A0A0A] border-t border-white/5">
                <div className="section-container">
                    <Link
                        href="/#hizmetler"
                        className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FF3D00] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Tüm Hizmetlere Dön</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
