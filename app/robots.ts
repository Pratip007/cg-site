import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/private/'], // Protect admin panel
        },
        sitemap: 'https://velvetdate.com/sitemap.xml', // Update with your actual domain
    }
}
