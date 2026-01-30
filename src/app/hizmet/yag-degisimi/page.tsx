import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatBot from "@/components/ui/chatbot";
import ServicePageClient from "@/components/service-page-client";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

const service = getServiceBySlug("yag-degisimi")!;

export const metadata: Metadata = {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
        canonical: `https://otoyasin.com/hizmet/${service.slug}`,
    },
    openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `https://otoyasin.com/hizmet/${service.slug}`,
        siteName: "Oto Yasin",
        locale: "tr_TR",
        type: "website",
        images: [
            {
                url: "https://otoyasin.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: `Oto Yasin - ${service.title}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: service.metaTitle,
        description: service.metaDescription,
        images: ["https://otoyasin.com/og-image.jpg"],
    },
};

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
            name: "Hizmetler",
            item: "https://otoyasin.com/#hizmetler",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://otoyasin.com/hizmet/${service.slug}`,
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://otoyasin.com/hizmet/${service.slug}#service`,
    name: service.title,
    description: service.heroDescription,
    url: `https://otoyasin.com/hizmet/${service.slug}`,
    provider: {
        "@type": "AutoRepair",
        "@id": "https://otoyasin.com/#localbusiness",
        name: "Oto Yasin",
        telephone: "+90 532 493 49 68",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ova, Atatürk Bulvarı Güneş Sokak No 134/4",
            addressLocality: "Kaş",
            addressRegion: "Antalya",
            postalCode: "07974",
            addressCountry: "TR",
        },
    },
    areaServed: [
        { "@type": "City", name: "Kaş" },
        { "@type": "City", name: "Kalkan" },
        { "@type": "City", name: "Demre" },
        { "@type": "City", name: "Finike" },
        { "@type": "State", name: "Antalya" },
    ],
    serviceType: service.title,
    offers: {
        "@type": "Offer",
        priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            price: service.priceRange,
        },
        availability: "https://schema.org/InStock",
    },
    termsOfService: service.warranty,
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: service.title,
        itemListElement: service.features.map((feature) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: feature,
            },
        })),
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

// HowTo Schema - Featured Snippets & Voice Search
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Oto Yasin'de Yağ Değişimi Nasıl Yapılır?",
    description: "Kaş'ta profesyonel motor yağı ve filtre değişimi adım adım işlem süreci",
    totalTime: "PT30M",
    estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "TRY",
        value: service.priceRange,
    },
    supply: [
        { "@type": "HowToSupply", name: "Motor Yağı (Castrol/Shell/Total)" },
        { "@type": "HowToSupply", name: "Yağ Filtresi" },
        { "@type": "HowToSupply", name: "Hava Filtresi" },
        { "@type": "HowToSupply", name: "Polen Filtresi" },
    ],
    tool: [
        { "@type": "HowToTool", name: "Hidrolik Lift" },
        { "@type": "HowToTool", name: "Yağ Boşaltma Cihazı" },
        { "@type": "HowToTool", name: "Filtre Anahtarı" },
    ],
    step: [
        {
            "@type": "HowToStep",
            position: 1,
            name: "Randevu ve Kabul",
            text: "WhatsApp veya telefon ile 7/24 randevu alın. Yağ değişimi için randevusuz da gelebilirsiniz.",
            url: "https://otoyasin.com/hizmet/yag-degisimi#randevu",
        },
        {
            "@type": "HowToStep",
            position: 2,
            name: "Yağ Seçimi",
            text: "Aracınızın marka ve modeline uygun motor yağı seçilir. Castrol, Shell, Total gibi premium markalar kullanılır.",
            url: "https://otoyasin.com/hizmet/yag-degisimi#secim",
        },
        {
            "@type": "HowToStep",
            position: 3,
            name: "Yağ ve Filtre Değişimi",
            text: "Eski yağ boşaltılır, yeni yağ filtresi takılır ve premium motor yağı doldurulur. İsteğe bağlı hava ve polen filtresi de değiştirilir.",
            url: "https://otoyasin.com/hizmet/yag-degisimi#degisim",
        },
        {
            "@type": "HowToStep",
            position: 4,
            name: "Ücretsiz Kontrol ve Teslimat",
            text: "Her yağ değişiminde 15 nokta ücretsiz araç kontrolü yapılır. Fren, lastik ve sıvı seviyeleri kontrol edilir.",
            url: "https://otoyasin.com/hizmet/yag-degisimi#kontrol",
        },
    ],
};

export default function YagDegisimiPage() {
    if (!service) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <Header />
            <ServicePageClient service={service} />
            <Footer />
            <ChatBot />
        </>
    );
}

