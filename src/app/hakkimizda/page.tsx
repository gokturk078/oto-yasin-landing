"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Award,
    MapPin,
    BadgeCheck,
    Wrench,
    Users,
    Target,
    Heart,
    CheckCircle2,
    Phone,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

// Şirket değerleri
const values = [
    {
        icon: Target,
        title: "Müşteri Odaklılık",
        description:
            "Her müşterimizin ihtiyacını kendi aracımızmış gibi önemsiyor, en iyi çözümü sunuyoruz.",
    },
    {
        icon: BadgeCheck,
        title: "Kalite ve Güven",
        description:
            "Orijinal yedek parça ve en son teknoloji ekipmanlarla kaliteden ödün vermiyoruz.",
    },
    {
        icon: Clock,
        title: "Zamanında Teslimat",
        description:
            "Söz verdiğimiz sürede işi tamamlıyor, sizin zamanınıza değer veriyoruz.",
    },
    {
        icon: Heart,
        title: "Dürüstlük",
        description:
            "Şeffaf fiyatlandırma ve açık iletişim ile her zaman güvenilir bir partner oluyoruz.",
    },
];

// Zaman çizelgesi
const timeline = [
    {
        year: "2004",
        title: "Başlangıç",
        description: "Küçük bir atölye olarak Kaş'ta hizmet vermeye başladık.",
    },
    {
        year: "2010",
        title: "Gelişim",
        description:
            "Modern ekipmanlarla donatılmış yeni atölyemize taşındık.",
    },
    {
        year: "2018",
        title: "Genişleme",
        description:
            "7/24 acil servis hizmetini başlattık ve ekibimizi genişlettik.",
    },
    {
        year: "2026",
        title: "Bugün",
        description:
            "5000+ mutlu müşteri ile Kaş'ın en güvenilir oto tamir merkezi olduk.",
    },
];

// İstatistikler
const stats = [
    { value: "20+", label: "Yıllık Tecrübe" },
    { value: "5000+", label: "Mutlu Müşteri" },
    { value: "7/24", label: "Kesintisiz Hizmet" },
    { value: "4.9", label: "Google Puanı", suffix: "/5" },
];

// Sertifikalar ve özellikler
const certifications = [
    "Orijinal Yedek Parça Garantisi",
    "1 Yıl İşçilik Garantisi",
    "Gelişmiş Teşhis Sistemleri",
    "Sigorta Anlaşmalı Servis",
    "Ücretsiz Araç Check-up",
    "Acil Yol Yardımı",
];

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

export default function HakkimizdaPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1C1C1C] to-[#0A0A0A]" />
                    <div className="absolute inset-0 bg-[url('/images/workshop_wide.png')] bg-cover bg-center opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />

                    <div className="section-container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-semibold rounded-full border border-[#FF3D00]/20 mb-6"
                            >
                                20+ Yıldır Kaş&apos;ta Hizmetinizdeyiz
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                            >
                                Oto Yasin Hakkında
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-8"
                            >
                                2004 yılından bu yana Kaş ve çevresinde otomotiv sektöründe
                                güvenilir, kaliteli ve profesyonel hizmet sunuyoruz. Aracınız
                                bizim için değerli.
                            </motion.p>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                            >
                                {stats.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-gradient">
                                            {stat.value}
                                            {stat.suffix && (
                                                <span className="text-lg text-[#A1A1AA]">
                                                    {stat.suffix}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#FF3D00]/10 rounded-full blur-[120px] -z-10" />
                    <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#FF3D00]/5 rounded-full blur-[120px] -z-10" />
                </section>

                {/* Story Section */}
                <section className="py-20 md:py-32 bg-[#0A0A0A]">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/realistic_exterior.png"
                                        alt="Oto Yasin Dış Görünüm"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-[#FF3D00] text-white p-4 md:p-6 rounded-2xl shadow-2xl">
                                    <div className="text-3xl md:text-4xl font-bold">20+</div>
                                    <div className="text-sm">Yıl Tecrübe</div>
                                </div>

                                {/* Decorative glow */}
                                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#FF3D00]/20 rounded-full blur-[80px] -z-10" />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-semibold rounded-full border border-[#FF3D00]/20 mb-4">
                                    Hikayemiz
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Güvenin ve Kalitenin Adresi
                                </h2>

                                <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                                    <p>
                                        <strong className="text-white">Oto Yasin</strong>, 2004
                                        yılında Kaş&apos;ta küçük bir atölye olarak kuruldu. İlk
                                        günden itibaren müşteri memnuniyetini ön planda tutarak,
                                        dürüst ve kaliteli hizmet anlayışımızla bölgenin en
                                        güvenilir oto tamir merkezi haline geldik.
                                    </p>
                                    <p>
                                        Yıllar içinde teknolojik gelişmeleri yakından takip ederek
                                        atölyemizi en son ekipmanlarla donattık. Deneyimli ekibimiz,
                                        her marka ve model araçta uzman hizmet sunarak sizlere en
                                        iyi deneyimi yaşatmayı hedefliyor.
                                    </p>
                                    <p>
                                        <strong className="text-white">7/24</strong> açık
                                        olmanın avantajıyla, acil durumlarda bile yanınızda oluyoruz.
                                        Kaş, Kalkan, Demre ve çevre bölgelerden binlerce müşteriye
                                        hizmet vermenin gururunu yaşıyoruz.
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <a
                                        href="tel:+905324934968"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-200 interactive"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Hemen Ara
                                    </a>
                                    <Link
                                        href="/#iletisim"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200"
                                    >
                                        İletişime Geç
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1C1C1C]">
                    <div className="section-container">
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-semibold rounded-full border border-[#FF3D00]/20 mb-4"
                            >
                                Değerlerimiz
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-4xl font-bold text-white mb-4"
                            >
                                Bizi Farklı Kılan Ne?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-[#A1A1AA] max-w-2xl mx-auto"
                            >
                                20 yılı aşkın tecrübemizle oluşturduğumuz değerlerimiz, her gün
                                sunduğumuz hizmetin temelini oluşturuyor.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    variants={itemVariants}
                                    className="group p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF3D00]/20 rounded-2xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-[#FF3D00]/10 group-hover:bg-[#FF3D00]/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                                        <value.icon className="w-7 h-7 text-[#FF3D00]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-20 md:py-32 bg-[#1C1C1C]">
                    <div className="section-container">
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-semibold rounded-full border border-[#FF3D00]/20 mb-4"
                            >
                                Yolculuğumuz
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-4xl font-bold text-white"
                            >
                                20 Yıllık Serüven
                            </motion.h2>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF3D00] via-[#FF3D00]/50 to-[#FF3D00]/10 hidden md:block" />

                            <div className="space-y-8 md:space-y-0">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative md:flex md:items-center md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Content */}
                                        <div
                                            className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                                                }`}
                                        >
                                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF3D00]/20 transition-all duration-300">
                                                <div className="text-2xl font-bold text-gradient mb-2">
                                                    {item.year}
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#A1A1AA]">{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Dot */}
                                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#FF3D00] rounded-full transform -translate-x-1/2 hidden md:block" />

                                        {/* Spacer for alternate layout */}
                                        <div className="md:w-1/2 hidden md:block" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="py-20 md:py-32 bg-gradient-to-b from-[#1C1C1C] to-[#0A0A0A]">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-semibold rounded-full border border-[#FF3D00]/20 mb-4">
                                    Güvencelerimiz
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Profesyonel Hizmet Standartları
                                </h2>

                                <p className="text-[#A1A1AA] mb-8 leading-relaxed">
                                    Oto Yasin olarak sunduğumuz her hizmetin arkasında duruyoruz.
                                    Kalite standartlarımız ve müşteri memnuniyeti garantimiz ile
                                    güvenle hizmet alabilirsiniz.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={cert}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                                            <span className="text-white text-sm">{cert}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image Grid */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="space-y-4">
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/tool_wall.png"
                                            alt="Profesyonel Ekipmanlar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/oil_products.png"
                                            alt="Kaliteli Yağlar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/equipment_lift.png"
                                            alt="Modern Lift"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/workshop_interior.png"
                                            alt="Atölye İç Mekan"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 md:p-16 bg-gradient-to-br from-[#FF3D00]/20 via-[#FF3D00]/10 to-transparent rounded-3xl border border-[#FF3D00]/20 text-center overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3D00]/20 rounded-full blur-[100px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF3D00]/10 rounded-full blur-[80px] -z-10" />

                            <Wrench className="w-16 h-16 text-[#FF3D00] mx-auto mb-6" />

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Aracınız İçin Randevu Alın
                            </h2>

                            <p className="text-[#A1A1AA] max-w-2xl mx-auto mb-8">
                                Profesyonel ekibimiz aracınızın bakım ve onarım ihtiyaçları için
                                hazır. Hemen bizi arayın veya WhatsApp üzerinden ulaşın.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+905324934968"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-200 interactive glow-sm"
                                >
                                    <Phone className="w-5 h-5" />
                                    0532 493 49 68
                                </a>
                                <a
                                    href="https://wa.me/905324934968?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20randevu%20almak%20istiyorum."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-200"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp ile Ulaş
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
