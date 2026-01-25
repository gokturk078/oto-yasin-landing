"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Zap, Droplet, Shield, Settings, Package, LucideIcon, ArrowRight } from "lucide-react";

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    slug: string;
}

const services: Service[] = [
    {
        icon: Wrench,
        title: "Mekanik Bakım",
        description: "Motor, şanzıman, diferansiyel bakım ve onarım işlemleri.",
        slug: "mekanik-bakim",
    },
    {
        icon: Zap,
        title: "Oto Elektrik",
        description: "Akü, alternatör, marş motoru ve tüm elektrik sistemleri.",
        slug: "oto-elektrik",
    },
    {
        icon: Droplet,
        title: "Yağ Değişimi",
        description: "Castrol, Shell, Total marka yağlar ve filtre değişimi.",
        slug: "yag-degisimi",
    },
    {
        icon: Shield,
        title: "Vize Kontrolü",
        description: "Vize öncesi fren testi, lamba ve egzoz kontrolü.",
        slug: "vize-kontrolu",
    },
    {
        icon: Settings,
        title: "Alt Takım",
        description: "Amortisör, rot, balata, disk ve süspansiyon işlemleri.",
        slug: "alt-takim",
    },
    {
        icon: Package,
        title: "Yedek Parça",
        description: "Orijinal ve OEM yedek parça satışı ve montajı.",
        slug: "yedek-parca",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
    return (
        <section id="hizmetler" className="py-20 md:py-32 bg-[#0A0A0A]">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4"
                    >
                        Hizmetlerimiz
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Profesyonel Oto Bakım Hizmetleri
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        20 yılı aşkın tecrübemizle her marka ve model araç için kapsamlı
                        bakım ve onarım hizmetleri sunuyoruz.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <Link key={service.title} href={`/hizmet/${service.slug}`}>
                            <motion.div
                                variants={itemVariants}
                                className="group p-6 bg-[#1C1C1C] hover:bg-[#27272A] border border-white/5 hover:border-[#FF3D00]/20 rounded-2xl transition-all duration-300 cursor-pointer h-full"
                            >
                                <div className="w-14 h-14 bg-[#FF3D00]/10 group-hover:bg-[#FF3D00]/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-[#FF3D00]" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FF3D00] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-[#FF3D00] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Detaylı Bilgi</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#A1A1AA] mb-4">
                        İhtiyacınız olan hizmet listede yok mu?
                    </p>
                    <a
                        href="tel:+905324934968"
                        className="inline-flex items-center gap-2 text-[#FF3D00] hover:text-[#FF6B00] font-medium transition-colors"
                    >
                        Bizi arayın, yardımcı olalım
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
