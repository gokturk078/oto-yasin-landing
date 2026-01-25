"use client";

import { motion } from "framer-motion";
import { Clock, Award, MapPin, BadgeCheck, LucideIcon } from "lucide-react";

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    highlight?: string;
}

const features: Feature[] = [
    {
        icon: Clock,
        title: "7/24 Hizmet",
        description:
            "Gece gündüz demeden acil durumlar için her zaman açık ve hazırız.",
        highlight: "Acil durumlarda yanınızdayız",
    },
    {
        icon: Award,
        title: "Uzman Kadro",
        description:
            "20 yılı aşkın tecrübeye sahip sertifikalı usta ekibimizle hizmetinizdeyiz.",
        highlight: "20+ yıl tecrübe",
    },
    {
        icon: MapPin,
        title: "Stratejik Konum",
        description:
            "Kaş merkeze yakın konumumuzla kolay ulaşılabilir ve hızlı hizmet sağlıyoruz.",
        highlight: "Kaş merkezde",
    },
    {
        icon: BadgeCheck,
        title: "Garanti",
        description:
            "Tüm işçilik ve parçalarda 1 yıl garanti ile güvenle hizmet alın.",
        highlight: "1 yıl tam garanti",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

export default function WhyUsSection() {
    return (
        <section
            id="neden-biz"
            className="py-20 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1C1C1C]"
        >
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4"
                        >
                            Neden Oto Yasin?
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            Kaş&apos;ta Güvenin Adresi
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#A1A1AA] mb-8 leading-relaxed"
                        >
                            Aracınızı emanet ettiğiniz yerde güven, kalite ve profesyonellik
                            bir arada olmalı. Oto Yasin olarak, yıllarca biriktirdiğimiz
                            tecrübeyi en son teknoloji ekipmanlarla birleştirerek size en iyi
                            hizmeti sunuyoruz.
                        </motion.p>

                        {/* Features List */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    variants={itemVariants}
                                    className="flex gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF3D00]/20 rounded-xl transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-[#FF3D00]/10 group-hover:bg-[#FF3D00]/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                        <feature.icon className="w-6 h-6 text-[#FF3D00]" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-white font-semibold">
                                                {feature.title}
                                            </h3>
                                            {feature.highlight && (
                                                <span className="px-2 py-0.5 bg-[#FF3D00]/10 text-[#FF3D00] text-xs font-medium rounded-full">
                                                    {feature.highlight}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[#A1A1AA] text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "20+", label: "Yıllık Tecrübe" },
                                { value: "5000+", label: "Mutlu Müşteri" },
                                { value: "7/24", label: "Kesintisiz Hizmet" },
                                { value: "4.6", label: "Google Puanı", suffix: "/5" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="p-6 bg-[#27272A] border border-white/5 rounded-2xl text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                        <span className="text-gradient">{stat.value}</span>
                                        {stat.suffix && (
                                            <span className="text-lg text-[#A1A1AA]">{stat.suffix}</span>
                                        )}
                                    </div>
                                    <div className="text-[#A1A1AA] text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative Glow */}
                        <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 bg-[#FF3D00]/10 rounded-full blur-[80px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
