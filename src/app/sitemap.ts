import { MetadataRoute } from "next";

// Required for static export
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://otoyasin.com";

    const services = [
        "mekanik-bakim",
        "oto-elektrik",
        "yag-degisimi",
        "vize-kontrolu",
        "alt-takim",
        "yedek-parca",
    ];

    const servicePages = services.map((slug) => ({
        url: `${baseUrl}/hizmet/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        ...servicePages,
        // Location Pages - Primary
        {
            url: `${baseUrl}/konum/kas`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/konum/antalya`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // Location Pages - Secondary
        {
            url: `${baseUrl}/konum/kalkan`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/konum/demre`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/konum/finike`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}

