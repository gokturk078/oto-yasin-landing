import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kaş Oto Tamir | 7/24 Açık Oto Bakım Servisi - Oto Yasin",
    description:
        "Kaş'ta oto tamir ve bakım hizmeti arıyorsanız doğru yerdesiniz! 7/24 açık, 20+ yıl tecrübe, orijinal yedek parça. Acil oto elektrik, yağ değişimi, vize kontrolü.",
    keywords: [
        "Kaş oto tamir",
        "Kaş oto elektrik",
        "Kaş 7/24 açık tamirci",
        "Kaş yağ değişimi",
        "Kaş vize kontrolü",
        "Kaş acil oto yardım",
    ],
    alternates: {
        canonical: "https://otoyasin.com/konum/kas",
    },
};

const services = [
    "Motor ve Şanzıman Bakımı",
    "Oto Elektrik Servisi",
    "Yağ ve Filtre Değişimi",
    "Vize Öncesi Kontrol",
    "Fren Sistemi Bakımı",
    "Alt Takım Onarımı",
    "Akü Değişimi",
    "Çekici Hizmeti",
];

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Oto Yasin - Kaş Oto Tamir",
    description: "Kaş'ın en güvenilir 7/24 açık oto tamir ve bakım servisi",
    url: "https://otoyasin.com/konum/kas",
    telephone: "+90 532 493 49 68",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Ova, Atatürk Bulvarı Güneş Sokak No 134/4",
        addressLocality: "Kaş",
        addressRegion: "Antalya",
        postalCode: "07974",
        addressCountry: "TR",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 36.296935,
        longitude: 29.328593,
    },
    areaServed: {
        "@type": "City",
        name: "Kaş",
    },
};

export default function KasPage() {
    return (
        <>
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
                                <span className="text-[#FF3D00] font-medium">Kaş, Antalya</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Kaş Oto Tamir ve Bakım Servisi
                            </h1>
                            <p className="text-lg text-[#A1A1AA] mb-8">
                                Kaş&apos;ta 7/24 açık, güvenilir oto tamir adresi. 20 yılı aşkın
                                tecrübemizle her marka araç için profesyonel bakım ve onarım
                                hizmeti sunuyoruz.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Clock className="w-4 h-4 text-[#FF3D00]" />
                                    <span className="text-white">7/24 Açık</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-white">4.6/5 Google</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+905324934968"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF3D00] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all duration-200 glow"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>0532 493 49 68</span>
                                </a>
                                <Link
                                    href="/#iletisim"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-200"
                                >
                                    <span>Yol Tarifi Al</span>
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
                            Kaş&apos;ta Sunduğumuz Hizmetler
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    </div>
                </section>

                {/* Location Info */}
                <section className="py-20 bg-[#0A0A0A]">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Kaş Servis Noktamız
                                </h2>
                                <p className="text-[#A1A1AA] mb-6">
                                    Kaş merkeze yakın konumumuzla hızlı ve kolay ulaşım imkanı
                                    sunuyoruz. Geniş servis alanımız ve modern ekipmanlarımızla
                                    aracınıza en iyi hizmeti veriyoruz.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-[#FF3D00] mt-1" />
                                        <div>
                                            <h3 className="text-white font-medium">Adres</h3>
                                            <p className="text-[#A1A1AA]">
                                                Ova, Atatürk Bulvarı Güneş Sokak No 134/4, 07974
                                                Kaş/Antalya
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-[#FF3D00] mt-1" />
                                        <div>
                                            <h3 className="text-white font-medium">Telefon</h3>
                                            <a
                                                href="tel:+905324934968"
                                                className="text-[#A1A1AA] hover:text-[#FF3D00] transition-colors"
                                            >
                                                0532 493 49 68
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-5 h-5 text-[#FF3D00] mt-1" />
                                        <div>
                                            <h3 className="text-white font-medium">Çalışma Saatleri</h3>
                                            <p className="text-[#A1A1AA]">7 gün 24 saat açık</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-80 rounded-xl overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.5!2d29.6407!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1e4a65c98c36d%3A0x3c5e7a6b9f8d2e1a!2sOTO%20Yasin!5e0!3m2!1str!2str!4v1706169600000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Oto Yasin Kaş Konum"
                                    className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-[#FF3D00] to-[#FF6B00]">
                    <div className="section-container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Kaş&apos;ta Aracınız İçin En İyi Hizmet
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Hemen arayın, uzman ekibimizle tanışın. İlk bakımınızda %10
                            indirim fırsatını kaçırmayın!
                        </p>
                        <a
                            href="https://wa.me/905324934968?text=Merhaba,%20Kaş%20bölgesinden%20arıyorum.%20Araç%20bakımı%20için%20randevu%20almak%20istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF3D00] font-bold rounded-xl hover:bg-white/90 transition-all duration-200"
                        >
                            <Phone className="w-5 h-5" />
                            <span>WhatsApp ile Randevu Al</span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
