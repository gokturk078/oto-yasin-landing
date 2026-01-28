import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Oto Yasin - Kaş Antalya Oto Tamir Hikayesi",
    description:
        "2004'ten bu yana Kaş ve Antalya batı bölgesinde güvenilir oto tamir hizmeti. 20+ yıl tecrübe, 5000+ mutlu müşteri, 7/24 açık. Oto Yasin hikayesini keşfedin.",
    keywords: [
        "Oto Yasin hakkında",
        "Kaş oto tamir",
        "Kaş güvenilir oto servis",
        "oto tamir merkezi Kaş",
        "Antalya oto bakım",
        "Kaş oto tamir hikayesi",
        "Antalya batı oto servis",
        "güvenilir tamirci Kaş",
        "20 yıllık oto tamir tecrübesi",
        "Kaş Kalkan Demre oto servis",
    ],
    openGraph: {
        title: "Hakkımızda | Oto Yasin - Kaş Oto Tamir Hikayesi",
        description:
            "2004'ten bu yana Kaş'ta güvenilir oto tamir hizmeti. 20+ yıl tecrübe, 5000+ mutlu müşteri.",
        url: "https://otoyasin.com/hakkimizda",
        siteName: "Oto Yasin",
        locale: "tr_TR",
        type: "website",
        images: [
            {
                url: "https://otoyasin.com/images/realistic_exterior.png",
                width: 1200,
                height: 630,
                alt: "Oto Yasin - Kaş Oto Tamir Merkezi",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hakkımızda | Oto Yasin - Kaş Oto Tamir",
        description:
            "2004'ten bu yana Kaş'ta güvenilir oto tamir hizmeti. 20+ yıl tecrübe.",
        images: ["https://otoyasin.com/images/realistic_exterior.png"],
    },
    alternates: {
        canonical: "https://otoyasin.com/hakkimizda",
    },
};

// BreadcrumbList Schema
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
            name: "Hakkımızda",
            item: "https://otoyasin.com/hakkimizda",
        },
    ],
};

// AboutPage Schema
const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Oto Yasin Hakkında",
    description:
        "2004'ten bu yana Kaş ve Antalya batı bölgesinde güvenilir oto tamir hizmeti sunan Oto Yasin'in hikayesi.",
    url: "https://otoyasin.com/hakkimizda",
    mainEntity: {
        "@type": "Organization",
        "@id": "https://otoyasin.com/#organization",
        name: "Oto Yasin",
        foundingDate: "2004",
        description:
            "Kaş'ın en güvenilir 7/24 açık oto tamir ve bakım merkezi. 20+ yıl tecrübe, 5000+ mutlu müşteri.",
        awardCount: "20+ yıl tecrübe",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: 5,
        },
    },
};

export default function HakkimizdaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />
            {children}
        </>
    );
}

