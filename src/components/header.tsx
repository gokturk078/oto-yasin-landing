"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/#hizmetler", label: "Hizmetler" },
    { href: "/#neden-biz", label: "Neden Biz?" },
    { href: "/#galeri", label: "Galeri" },
    { href: "/#sss", label: "S.S.S." },
    { href: "/#iletisim", label: "İletişim" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                            <Image
                                src="/images/logo.png"
                                alt="OTO YASIN Logo"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-white">OTO YASİN</span>
                            <span className="block text-xs text-[#A1A1AA]">
                                Kaş Oto Tamir
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                            <Clock className="w-4 h-4 text-[#FF3D00]" />
                            <span>7/24 Açık</span>
                        </div>
                        <a
                            href="tel:+905324934968"
                            className="flex items-center gap-2 px-4 py-2 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-medium rounded-xl transition-all duration-200 interactive"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Hemen Ara</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Menüyü aç/kapat"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <nav className="section-container py-4 flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-3 px-4 text-white hover:bg-white/5 rounded-lg transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="pt-4 border-t border-white/10 mt-2"
                            >
                                <a
                                    href="tel:+905324934968"
                                    className="flex items-center justify-center gap-2 py-3 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-medium rounded-xl transition-all duration-200"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>0532 493 49 68</span>
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
