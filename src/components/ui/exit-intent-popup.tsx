"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Phone } from "lucide-react";

export default function ExitIntentPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const shown = sessionStorage.getItem("exitPopupShown");
        if (shown) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves toward top of viewport
            if (e.clientY <= 0 && !hasShown) {
                setIsOpen(true);
                setHasShown(true);
                sessionStorage.setItem("exitPopupShown", "true");
            }
        };

        // Add listener after a delay to avoid immediate triggers
        const timer = setTimeout(() => {
            document.addEventListener("mouseleave", handleMouseLeave);
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleCTA = () => {
        // Open WhatsApp with consultation message
        window.open(
            "https://wa.me/905324934968?text=Merhaba,%20web%20sitesinden%20ücretsiz%20araç%20kontrolü%20için%20randevu%20almak%20istiyorum!",
            "_blank"
        );
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-[#1C1C1C] border border-white/10 rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-1 text-white/60 hover:text-white transition-colors z-10"
                            aria-label="Kapat"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Header with Gradient */}
                        <div className="bg-gradient-to-r from-[#FF3D00] to-[#FF6B00] p-6 text-center">
                            <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                                <Gift className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Bir Dakika!
                            </h3>
                            <p className="text-white/90">
                                Size özel bir fırsat sunmak istiyoruz
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-6 text-center">
                            <div className="mb-6">
                                <div className="text-3xl font-bold text-gradient mb-2">ÜCRETSİZ</div>
                                <div className="text-xl font-semibold text-white mb-2">Araç Kontrol</div>
                                <p className="text-[#A1A1AA]">
                                    İlk ziyaretinizde ücretsiz araç durumu kontrolü
                                </p>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleCTA}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-200 glow"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Hemen Randevu Al</span>
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="w-full px-6 py-3 text-[#71717A] hover:text-white text-sm transition-colors"
                                >
                                    Hayır, teşekkürler
                                </button>
                            </div>

                            <p className="text-[#71717A] text-xs mt-4">
                                * 7/24 hizmet veriyoruz, hemen arayabilirsiniz
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
