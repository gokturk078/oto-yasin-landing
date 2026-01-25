import { MetadataRoute } from "next";

// Required for static export
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/"],
        },
        sitemap: "https://otoyasin.com/sitemap.xml",
    };
}
