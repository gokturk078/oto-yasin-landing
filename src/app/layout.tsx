import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://otoyasin.com"),
  title: {
    default: "Oto Yasin | Kaş Oto Tamir ve Bakım Merkezi - 7/24 Hizmet",
    template: "%s | Oto Yasin - Kaş Oto Tamir",
  },
  description:
    "Kaş'ın en güvenilir oto tamir ve bakım merkezi. 7/24 açık, 20+ yıllık tecrübe, orijinal yedek parça garantisi. Oto elektrik, mekanik bakım, fren testi, vize kontrolü.",
  keywords: [
    // Primary - Kaş
    "Kaş oto tamir",
    "Kaş oto bakım",
    "Kaş oto elektrik",
    "Kaş oto servis",
    "Kaş araç bakım",
    "Kaş araç tamiri",
    "Kaş tamirci",
    // Regional - Antalya
    "Antalya oto tamir",
    "Antalya batı bölgesi oto servis",
    "Antalya oto elektrik",
    // Location variations
    "Kalkan oto tamir",
    "Kalkan oto bakım",
    "Demre oto tamir",
    "Demre oto bakım",
    "Finike oto servis",
    "Ova mahallesi oto tamir Kaş",
    // Service-specific
    "7/24 açık oto tamir Kaş",
    "acil oto elektrikçi Kaş",
    "gece açık oto tamir Antalya",
    "Kaş vize öncesi araç kontrolü",
    "Kaş fren testi",
    "araç yağ değişimi Kaş",
    "fren balata değişimi Kaş",
    "akü değişimi Kaş",
    "çekici hizmeti Kaş",
    "oto yedek parça Kaş",
    // Long-tail
    "Kaş'ta güvenilir oto tamirci",
    "Kaş en iyi oto elektrikçi",
    "Kaş orijinal yedek parça",
    "Kaş oto motor tamiri",
    "Kaş şanzıman tamiri",
    "Kaş alt takım bakım",
  ],
  authors: [{ name: "Oto Yasin" }],
  creator: "Oto Yasin",
  publisher: "Oto Yasin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://otoyasin.com",
    siteName: "Oto Yasin",
    title: "Oto Yasin | Kaş Oto Tamir ve Bakım Merkezi - 7/24 Hizmet",
    description:
      "Kaş'ın en güvenilir oto tamir ve bakım merkezi. 7/24 açık, 20+ yıllık tecrübe, orijinal yedek parça garantisi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oto Yasin - Kaş Oto Tamir ve Bakım Merkezi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oto Yasin | Kaş Oto Tamir ve Bakım Merkezi",
    description:
      "Kaş'ın en güvenilir oto tamir ve bakım merkezi. 7/24 açık, 20+ yıllık tecrübe.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://otoyasin.com",
    languages: {
      "tr-TR": "https://otoyasin.com",
    },
  },
  verification: {
    // Google Search Console verification code - add when available
    // google: "your-google-verification-code",
  },
  category: "automotive",
};

// WebSite Schema - enables sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oto Yasin",
  alternateName: "Oto Yasin Kaş Oto Tamir",
  url: "https://otoyasin.com",
  description: "Kaş'ın en güvenilir 7/24 açık oto tamir ve bakım merkezi",
  inLanguage: "tr-TR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://otoyasin.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Organization Schema - brand trust & knowledge panel
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Oto Yasin",
  legalName: "Oto Yasin Oto Tamir ve Bakım Merkezi",
  url: "https://otoyasin.com",
  logo: "https://otoyasin.com/og-image.jpg",
  foundingDate: "2004",
  founders: [
    {
      "@type": "Person",
      name: "Yasin",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ova, Atatürk Bulvarı Güneş Sokak No 134/4",
    addressLocality: "Kaş",
    addressRegion: "Antalya",
    postalCode: "07974",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90 532 493 49 68",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
    areaServed: "TR",
  },
  sameAs: [],
  knowsAbout: [
    "Oto Tamir",
    "Oto Bakım",
    "Oto Elektrik",
    "Motor Bakım",
    "Şanzıman Tamiri",
    "Fren Sistemi",
    "Yağ Değişimi",
    "Vize Kontrolü",
  ],
};

// LocalBusiness Schema - enhanced
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://otoyasin.com/#localbusiness",
  name: "Oto Yasin - Kaş Oto Tamir ve Bakım Merkezi",
  alternateName: ["Oto Yasin", "Oto Yasin Kaş", "Kaş Oto Yasin"],
  description:
    "Kaş'ın en güvenilir oto tamir ve bakım merkezi. 7/24 açık, 20+ yıl tecrübe. Oto mekanik, oto elektrik, yağ değişimi, fren testi, vize öncesi kontrol ve acil yol yardımı hizmetleri. Antalya batı bölgesinin en kapsamlı oto servis noktası.",
  url: "https://otoyasin.com",
  telephone: "+90 532 493 49 68",
  email: "info@otoyasin.com",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
  areaServed: [
    {
      "@type": "City",
      name: "Kaş",
      containedInPlace: { "@type": "State", name: "Antalya" },
    },
    {
      "@type": "City",
      name: "Kalkan",
      containedInPlace: { "@type": "State", name: "Antalya" },
    },
    {
      "@type": "City",
      name: "Demre",
      containedInPlace: { "@type": "State", name: "Antalya" },
    },
    {
      "@type": "City",
      name: "Finike",
      containedInPlace: { "@type": "State", name: "Antalya" },
    },
    { "@type": "State", name: "Antalya" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oto Tamir ve Bakım Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oto Mekanik Bakım",
          description: "Motor, şanzıman, diferansiyel bakım ve onarım",
          url: "https://otoyasin.com/hizmet/mekanik-bakim",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oto Elektrik Servisi",
          description: "Akü, alternatör, marş motoru ve tüm elektrik sistemleri",
          url: "https://otoyasin.com/hizmet/oto-elektrik",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Yağ Değişimi",
          description: "Castrol, Shell, Total marka yağlar ve filtre değişimi",
          url: "https://otoyasin.com/hizmet/yag-degisimi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fren Bakım ve Testi",
          description: "Balata, disk değişimi ve fren sistemi kontrolü",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vize Öncesi Araç Kontrolü",
          description: "48 nokta kapsamlı TÜVTÜRK vize öncesi kontrol",
          url: "https://otoyasin.com/hizmet/vize-kontrolu",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alt Takım Bakım ve Onarım",
          description: "Amortisör, rot, balata, disk ve süspansiyon servisi",
          url: "https://otoyasin.com/hizmet/alt-takim",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Yedek Parça Satışı",
          description: "Orijinal ve OEM yedek parça temin ve satışı",
          url: "https://otoyasin.com/hizmet/yedek-parca",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "43",
    reviewCount: "43",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mehmet Y." },
      datePublished: "2025-12-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Gece yarısı yolda kaldım, 20 dakikada geldiler. Çok profesyonel ve güvenilir bir ekip.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ayşe K." },
      datePublished: "2025-11-20",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Vize kontrolü için gittim, her şeyi detaylı açıkladılar. Fiyatlar da çok uygun.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ali D." },
      datePublished: "2025-10-08",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Kaş'ta en güvenilir oto tamirci. Yıllardır buraya geliyorum, hiç sorun yaşamadım.",
    },
  ],
  image: [
    "https://otoyasin.com/images/realistic_exterior.png",
    "https://otoyasin.com/og-image.jpg",
  ],
  slogan: "Kaş'ın En Güvenilir 7/24 Oto Tamir Merkezi",
  knowsAbout: [
    "Oto Tamir",
    "Oto Bakım",
    "Oto Elektrik",
    "Motor Bakım",
    "Şanzıman Tamiri",
    "Fren Sistemi",
    "Yağ Değişimi",
    "Vize Kontrolü",
    "Akü Değişimi",
    "Alternatör Tamiri",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Profesyonel Sertifika",
      name: "20+ Yıl Oto Tamir Deneyimi",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Plausible Analytics - Privacy-focused */}
        <script
          defer
          data-domain="otoyasin.com"
          src="https://plausible.io/js/script.js"
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
