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
    "Kaş oto tamir",
    "Kaş oto bakım",
    "Kaş oto elektrik",
    "Kaş vize öncesi araç kontrolü",
    "Kaş fren testi",
    "Antalya oto tamir",
    "7/24 açık oto tamir Kaş",
    "acil oto elektrikçi Kaş",
    "araç yağ değişimi Kaş",
    "oto yedek parça Kaş",
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

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Oto Yasin - Kaş Oto Tamir ve Bakım Merkezi",
  alternateName: "Oto Yasin",
  description:
    "Kaş'ın en güvenilir oto tamir ve bakım merkezi. Oto mekanik, oto elektrik, yağ değişimi, fren testi ve vize öncesi kontrol hizmetleri.",
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
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    { "@type": "City", name: "Kaş" },
    { "@type": "City", name: "Kalkan" },
    { "@type": "City", name: "Demre" },
    { "@type": "City", name: "Finike" },
    { "@type": "State", name: "Antalya" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oto Tamir Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oto Mekanik Bakım",
          description: "Motor, şanzıman, diferansiyel bakım ve onarım",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oto Elektrik",
          description: "Akü, alternatör, marş motoru ve tüm elektrik sistemleri",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Yağ Değişimi",
          description: "Castrol, Shell, Total marka yağlar ve filtre değişimi",
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
          description: "Kapsamlı vize öncesi kontrol ve raporlama",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Yedek Parça Satışı",
          description: "Orijinal ve OEM yedek parça temin ve satışı",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "43",
  },
  image: [
    "https://otoyasin.com/images/realistic_exterior.png",
    "https://otoyasin.com/og-image.jpg",
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
