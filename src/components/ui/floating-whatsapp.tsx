"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingWhatsAppProps {
    phoneNumber?: string;
    message?: string;
}

export default function FloatingWhatsApp({
    phoneNumber = "905324934968",
    message = "Merhaba, araç bakımı için randevu almak istiyorum.",
}: FloatingWhatsAppProps) {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            aria-label="WhatsApp ile iletişime geç"
        >
            {/* Tooltip */}
            <motion.span
                className="hidden md:block px-4 py-2 bg-white text-[#0A0A0A] text-sm font-medium rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
            >
                WhatsApp ile yazın
            </motion.span>

            {/* Button */}
            <motion.div
                className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>

                {/* Icon */}
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.div>
        </motion.a>
    );
}
