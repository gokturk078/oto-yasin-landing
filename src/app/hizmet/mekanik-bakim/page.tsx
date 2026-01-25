import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatBot from "@/components/ui/chatbot";
import ServicePageClient from "@/components/service-page-client";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

const service = getServiceBySlug("mekanik-bakim")!;

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

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroDescription,
    provider: {
        "@type": "AutoRepair",
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
    areaServed: {
        "@type": "City",
        name: "Kaş",
    },
    serviceType: service.title,
    offers: {
        "@type": "Offer",
        priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
        },
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

export default function MekanikBakimPage() {
    if (!service) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Header />
            <ServicePageClient service={service} />
            <Footer />
            <ChatBot />
        </>
    );
}
