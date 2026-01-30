"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    {
        src: "/images/realistic_exterior.png",
        alt: "Kaş Oto Tamir Servisi Oto Yasin Dış Görünüm - 7/24 Açık Antalya Oto Bakım Merkezi",
        title: "Servis Merkezi",
    },
    {
        src: "/images/workshop_wide.png",
        alt: "Oto Yasin Kaş Modern Atölye - Profesyonel Oto Bakım Merkezi Geniş Görünüm",
        title: "Atölye Genel Görünüm",
    },
    {
        src: "/images/workshop_interior.png",
        alt: "Kaş Oto Elektrik ve Motor Bakım Servisi İç Görünüm - Oto Yasin Profesyonel Atölye",
        title: "Atölye İçi",
    },
    {
        src: "/images/reception_office.png",
        alt: "Oto Yasin Kaş Oto Servis Modern Müşteri Kabul Ofisi - Profesyonel Hizmet",
        title: "Modern Ofis",
    },
    {
        src: "/images/tool_wall.png",
        alt: "Kaş Oto Tamir Profesyonel Ekipman ve Aletler - Oto Yasin Orijinal Yedek Parça Servisi",
        title: "Profesyonel Ekipman",
    },
    {
        src: "/images/parts_storage.png",
        alt: "Oto Yasin Kaş Orijinal ve OEM Yedek Parça Deposu - Araç Yedek Parça Satışı",
        title: "Yedek Parça Deposu",
    },
    {
        src: "/images/oil_products.png",
        alt: "Castrol Shell Total Premium Motor Yağları Kaş - Oto Yasin Yağ Değişimi Servisi",
        title: "Yağ ve Kimyasallar",
    },
    {
        src: "/images/equipment_lift.png",
        alt: "Oto Yasin Profesyonel Hidrolik Lift - Kaş Alt Takım ve Fren Bakım Servisi",
        title: "Lift Ekipmanı",
    },
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };
    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                (selectedImage - 1 + galleryImages.length) % galleryImages.length
            );
        }
    };

    return (
        <section id="galeri" className="py-20 md:py-32 bg-[#0A0A0A]">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4"
                    >
                        Galeri
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Atölyemizden Kareler
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        Modern ekipmanlarımız ve düzenli çalışma alanımızla profesyonel
                        hizmet veriyoruz.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium text-sm">
                                    {image.title}
                                </span>
                            </div>
                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF3D00]/50 rounded-xl transition-colors duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Kapat"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Önceki"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Sonraki"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full max-w-4xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                        {selectedImage + 1} / {galleryImages.length}
                    </div>
                </motion.div>
            )}
        </section>
    );
}
