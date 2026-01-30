import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatBot from "@/components/ui/chatbot";
import ServicePageClient from "@/components/service-page-client";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

const service = getServiceBySlug("vize-kontrolu")!;

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
    name: "Oto Yasin'de Vize Kontrolü Nasıl Yapılır?",
    description: "Kaş'ta TÜVTÜRK muayenesine hazırlık için kapsamlı araç kontrolü adım adım işlem süreci",
    totalTime: "PT1H",
    estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "TRY",
        value: service.priceRange,
    },
    supply: [
        { "@type": "HowToSupply", name: "Fren Balatası" },
        { "@type": "HowToSupply", name: "Far Ampulü" },
        { "@type": "HowToSupply", name: "Silecek Lastiği" },
    ],
    tool: [
        { "@type": "HowToTool", name: "Fren Test Cihazı" },
        { "@type": "HowToTool", name: "Emisyon Ölçüm Cihazı" },
        { "@type": "HowToTool", name: "Far Ayar Cihazı" },
    ],
    step: [
        {
            "@type": "HowToStep",
            position: 1,
            name: "Randevu ve Kabul",
            text: "WhatsApp veya telefon ile randevu alın. Vize tarihinize en az 1 hafta kala gelin.",
            url: "https://otoyasin.com/hizmet/vize-kontrolu#randevu",
        },
        {
            "@type": "HowToStep",
            position: 2,
            name: "48 Nokta Kapsamlı Kontrol",
            text: "TÜVTÜRK standartlarında fren, aydınlatma, egzoz, süspansiyon ve tüm güvenlik sistemleri detaylı incelenir.",
            url: "https://otoyasin.com/hizmet/vize-kontrolu#kontrol",
        },
        {
            "@type": "HowToStep",
            position: 3,
            name: "Anında Onarım",
            text: "Tespit edilen sorunlar aynı gün onarılır. Far ayarı, balata değişimi, silecek değişimi gibi işlemler hızlıca tamamlanır.",
            url: "https://otoyasin.com/hizmet/vize-kontrolu#onarim",
        },
        {
            "@type": "HowToStep",
            position: 4,
            name: "Muayene Geçiş Garantisi",
            text: "Kontrolümüzden sonra TÜVTÜRK'ten geçemezseniz, tespit edilen arızaların onarım masrafları tarafımızca karşılanır.",
            url: "https://otoyasin.com/hizmet/vize-kontrolu#garanti",
        },
    ],
};

export default function VizeKontroluPage() {
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

