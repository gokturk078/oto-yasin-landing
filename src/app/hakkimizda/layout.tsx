import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Oto Yasin - Kaş Oto Tamir",
    description:
        "2004'ten bu yana Kaş'ta güvenilir oto tamir hizmeti. 20+ yıl tecrübe, 5000+ mutlu müşteri, 7/24 açık. Oto Yasin hikayesini keşfedin.",
    keywords: [
        "Oto Yasin hakkında",
        "Kaş oto tamir",
        "Kaş güvenilir oto servis",
        "oto tamir merkezi Kaş",
        "Antalya oto bakım",
    ],
    openGraph: {
        title: "Hakkımızda | Oto Yasin - Kaş Oto Tamir",
        description:
            "2004'ten bu yana Kaş'ta güvenilir oto tamir hizmeti. 20+ yıl tecrübe, 5000+ mutlu müşteri.",
        url: "https://otoyasin.com/hakkimizda",
        images: [
            {
                url: "/images/realistic_exterior.png",
                width: 1200,
                height: 630,
                alt: "Oto Yasin - Kaş Oto Tamir Merkezi",
            },
        ],
    },
    alternates: {
        canonical: "https://otoyasin.com/hakkimizda",
    },
};

export default function HakkimizdaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
