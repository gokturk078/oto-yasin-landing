"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, BadgeCheck } from "lucide-react";

// Gerçek Google Yorumları - En yüksek dönüşüm potansiyeli olan 5 yorum
const reviews = [
    {
        name: "Altug Tuncay",
        isLocalGuide: true,
        reviewCount: 83,
        rating: 5,
        text: "1996 jeep grand cherokee benzin pompası arıza yaptı Yasin ustadan bahsettiler ustanın bir eli var 3 saat içinde arabayı çalışır hale getirdi süper süper ötesi hele bir babası var muhteşem biri bir çayı var tamir işiniz olmasa bile çay için muhakkak uğrayın",
        date: "3 yıl önce",
    },
    {
        name: "Yilmaz Koramaz",
        isLocalGuide: true,
        reviewCount: 178,
        rating: 5,
        text: "Arızayı hemen tespit etti, parçanın siparişini vermeden önce ücret konusunda bilgi verdi ve onay alıp parça siparişi verdi. Dürüst esnaf.",
        date: "1 yıl önce",
    },
    {
        name: "Unsal Erdem",
        isLocalGuide: true,
        reviewCount: 43,
        rating: 5,
        text: "Karavanın frenlerinde yaşadığımız sorunu çok iyi bir şekilde tamir etti. İşin ehli bir usta ve aynı zamanda dürüst. Uygun fiyatları ile tavsiye ederim.",
        date: "8 ay önce",
    },
    {
        name: "Memnun Müşteri",
        isLocalGuide: false,
        rating: 5,
        text: "İzmir yoluna çıkarken arabamız arıza verince Yasin Abi imdadımıza yetişti. Aracın aktüatör motoru ve fren balatalarında sorun vardı. Sağ olsun gecenin bir yarısı, kendi işini gücünü bırakıp bizimle ilgilendi. Ustalığı zaten tartışılmaz.",
        date: "7 ay önce",
    },
    {
        name: "Engin Katirci",
        isLocalGuide: true,
        reviewCount: 31,
        rating: 5,
        text: "Bu adam deneyimli bir mekanikçi ve elektronikçi. Yağ değişimi uygun fiyatlı! Ücretsiz Türk çayı harikaydı! Teşekkür ederim.",
        date: "5 yıl önce",
    },
];

// Review Schema for SEO
const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oto Yasin - Kaş Oto Tamir ve Bakım Merkezi",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "43",
        "bestRating": "5"
    },
    "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
            "@type": "Person",
            "name": review.name
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString(),
            "bestRating": "5"
        },
        "reviewBody": review.text,
        "datePublished": review.date
    }))
};

export default function TestimonialsSection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#1C1C1C] to-[#0A0A0A]">
            {/* Review Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4"
                    >
                        Gerçek Google Yorumları
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Müşterilerimiz Ne Diyor?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                />
                            ))}
                        </div>
                        <span className="text-white font-semibold">4.9/5</span>
                        <span className="text-[#A1A1AA]">• Google&apos;da 43+ değerlendirme</span>
                    </motion.div>
                </div>

                {/* Reviews Grid - 5 cards with responsive layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 bg-[#27272A] border border-white/5 rounded-2xl hover:border-[#FF3D00]/20 transition-colors ${index >= 3 ? 'md:col-span-1' : ''
                                }`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#FF3D00]/10 rounded-full flex items-center justify-center font-semibold text-[#FF3D00]">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">{review.name}</span>
                                            {review.isLocalGuide && (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full">
                                                    <BadgeCheck className="w-3 h-3" />
                                                    Yerel Rehber
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-[#71717A] text-sm">
                                            {review.date}
                                            {review.reviewCount && (
                                                <span> • {review.reviewCount} yorum</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-[#A1A1AA] leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Oto+Yasin+Ka%C5%9F+Antalya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all duration-200"
                    >
                        <span>Tüm Google Yorumlarını Gör</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
