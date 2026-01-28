import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Demre Oto Tamir | 7/24 Açık Oto Bakım Servisi - Oto Yasin",
    description:
        "Demre'de oto tamir ve bakım hizmeti arıyorsanız doğru yerdesiniz! 7/24 açık, 20+ yıl tecrübe, orijinal yedek parça. Demre bölgesine çekici hizmeti.",
    keywords: [
        "Demre oto tamir",
        "Demre oto elektrik",
        "Demre 7/24 açık tamirci",
        "Demre yağ değişimi",
        "Demre acil oto yardım",
        "Myra oto tamir",
        "Demre vize kontrolü",
        "Demre oto bakım",
        "Demre araç tamiri",
        "Antalya batı oto servis",
    ],
    alternates: {
        canonical: "https://otoyasin.com/konum/demre",
    },
    openGraph: {
        title: "Demre Oto Tamir | 7/24 Açık Oto Bakım Servisi - Oto Yasin",
        description:
            "Demre'de oto tamir ve bakım hizmeti. 7/24 açık, 20+ yıl tecrübe.",
        url: "https://otoyasin.com/konum/demre",
        siteName: "Oto Yasin",
        locale: "tr_TR",
        type: "website",
    },
};

const services = [
    "Motor ve Şanzıman Bakımı",
    "Oto Elektrik Servisi",
    "Yağ ve Filtre Değişimi",
    "Vize Öncesi Kontrol",
    "Fren Sistemi Bakımı",
    "Çekici Hizmeti",
];

// BreadcrumbList Schema for navigation rich snippets
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://otoyasin.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Hizmet Bölgeleri",
            item: "https://otoyasin.com/#bolgeler",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Demre",
            item: "https://otoyasin.com/konum/demre",
        },
    ],
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://otoyasin.com/konum/demre#localbusiness",
    name: "Oto Yasin - Demre Oto Tamir Servisi",
    description: "Demre bölgesine hizmet veren 7/24 açık oto tamir servisi. 20+ yıl tecrübe, orijinal yedek parça.",
    url: "https://otoyasin.com/konum/demre",
    telephone: "+90 532 493 49 68",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Ova, Atatürk Bulvarı Güneş Sokak No 134/4",
        addressLocality: "Kaş",
        addressRegion: "Antalya",
        postalCode: "07974",
        addressCountry: "TR",
    },
    areaServed: {
        "@type": "City",
        name: "Demre",
        containedInPlace: { "@type": "State", name: "Antalya" },
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
    },
    priceRange: "₺₺",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "43",
    },
};

export default function DemrePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF3D00]/10 via-transparent to-transparent" />
                    <div className="section-container relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <MapPin className="w-5 h-5 text-[#FF3D00]" />
                                <span className="text-[#FF3D00] font-medium">Demre, Antalya</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Demre Oto Tamir Servisi
                            </h1>
                            <p className="text-lg text-[#A1A1AA] mb-8">
                                Demre ve çevresine profesyonel oto tamir hizmeti. Myra antik
                                kentine yakın konumumuzla turistik araçlara da hizmet veriyoruz.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Clock className="w-4 h-4 text-[#FF3D00]" />
                                    <span className="text-white">~45 dk mesafe</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-white">Çekici Mevcut</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+905324934968"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-200 glow"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Hemen Ara</span>
                                </a>
                                <Link
                                    href="/#iletisim"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-200"
                                >
                                    <span>İletişim</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-20 bg-[#1C1C1C]">
                    <div className="section-container">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Demre&apos;ye Sunduğumuz Hizmetler
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {services.map((service) => (
                                <div
                                    key={service}
                                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#FF3D00] flex-shrink-0" />
                                    <span className="text-white">{service}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#A1A1AA] mt-6">
                            Demre bölgesinden aracınızı çekici ile servisimize
                            getirebilirsiniz. Turistik araçlar için İngilizce hizmet
                            verebiliyoruz.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-[#FF3D00] to-[#FF6B00]">
                    <div className="section-container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Demre&apos;den Bizi Arayın
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Aracınızla ilgili sorun mu var? Demre bölgesine çekici
                            gönderebilir veya yerinde müdahale yapabiliriz!
                        </p>
                        <a
                            href="https://wa.me/905324934968?text=Merhaba,%20Demre%20bölgesinden%20arıyorum.%20Araç%20arızası%20için%20yardım%20istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF3D00] font-bold rounded-xl hover:bg-white/90 transition-all duration-200"
                        >
                            <Phone className="w-5 h-5" />
                            <span>WhatsApp ile Ulaşın</span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
