import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://example.com'; // TODO: Replace with actual domain

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
