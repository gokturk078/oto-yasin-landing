"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CreditCard } from "lucide-react";

const trustItems = [
    {
        icon: ShieldCheck,
        title: "1 Yıl Garanti",
        description: "Tüm işçilik ve parçalarda",
    },
    {
        icon: Award,
        title: "Sertifikalı Ustalar",
        description: "20+ yıl tecrübeli ekip",
    },
    {
        icon: CreditCard,
        title: "Esnek Ödeme",
        description: "Nakit & Kredi Kartı",
    },
];

// Payment method logos (simplified SVG icons)
const PaymentMethods = () => (
    <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/5">
        <span className="text-[#71717A] text-sm">Ödeme Yöntemleri:</span>
        <div className="flex items-center gap-3">
            {/* Visa */}
            <div className="px-3 py-1.5 bg-white rounded text-[#1A1F71] font-bold text-sm italic">
                VISA
            </div>
            {/* Mastercard */}
            <div className="flex items-center">
                <div className="w-5 h-5 bg-[#EB001B] rounded-full -mr-2"></div>
                <div className="w-5 h-5 bg-[#F79E1B] rounded-full opacity-80"></div>
            </div>
            {/* Cash */}
            <div className="px-3 py-1.5 bg-[#22C55E]/20 text-[#22C55E] text-sm font-medium rounded">
                Nakit
            </div>
        </div>
    </div>
);

export default function TrustBadges() {
    return (
        <section className="py-16 bg-[#0A0A0A] border-y border-white/5">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Trust Badges Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {trustItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl"
                            >
                                <div className="w-12 h-12 bg-[#FF3D00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-[#FF3D00]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">{item.title}</h3>
                                    <p className="text-[#A1A1AA] text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Payment Methods */}
                    <PaymentMethods />
                </motion.div>
            </div>
        </section>
    );
}
