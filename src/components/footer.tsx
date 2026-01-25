import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Wrench } from "lucide-react";

const quickLinks = [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/#hizmetler", label: "Hizmetlerimiz" },
    { href: "/#neden-biz", label: "Neden Biz?" },
    { href: "/#galeri", label: "Galeri" },
    { href: "/#sss", label: "Sıkça Sorulan Sorular" },
    { href: "/#iletisim", label: "İletişim" },
];

const services = [
    "Oto Mekanik Bakım",
    "Oto Elektrik",
    "Yağ Değişimi",
    "Vize Kontrolü",
    "Alt Takım Bakımı",
    "Yedek Parça Satışı",
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/10">
            {/* Main Footer */}
            <div className="section-container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/logo.png"
                                    alt="OTO YASIN Logo"
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white block">
                                    OTO YASİN
                                </span>
                                <span className="text-sm text-[#A1A1AA]">
                                    Kaş Oto Tamir
                                </span>
                            </div>
                        </Link>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                            Kaş&apos;ın en güvenilir oto tamir ve bakım merkezi. 20+ yıllık
                            tecrübe ile aracınız güvende.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] rounded-full border border-[#FF3D00]/20">
                                <Clock className="w-3.5 h-3.5" />
                                7/24 Açık
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#A1A1AA] hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-[#FF3D00]" />
                            Hizmetlerimiz
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-[#A1A1AA] text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">İletişim</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+905324934968"
                                    className="flex items-start gap-3 text-[#A1A1AA] hover:text-white transition-colors group"
                                >
                                    <Phone className="w-4 h-4 mt-0.5 text-[#FF3D00] group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">0532 493 49 68</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@otoyasin.com"
                                    className="flex items-start gap-3 text-[#A1A1AA] hover:text-white transition-colors group"
                                >
                                    <Mail className="w-4 h-4 mt-0.5 text-[#FF3D00] group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">info@otoyasin.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Oto+Yasin+Atatürk+Bulvarı+Güneş+Sokak+Kaş"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-[#A1A1AA] hover:text-white transition-colors group"
                                >
                                    <MapPin className="w-4 h-4 mt-0.5 text-[#FF3D00] group-hover:scale-110 transition-transform flex-shrink-0" />
                                    <span className="text-sm">
                                        Ova, Atatürk Bulvarı Güneş Sokak No 134/4, 07974 Kaş/Antalya
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="section-container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#71717A]">
                        <p>© 2026 Oto Yasin. Tüm hakları saklıdır.</p>
                        <div className="flex items-center gap-4">
                            <span>🇹🇷 Kaş, Antalya</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
                                Şu an açık
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
