const isProd = process.env.NODE_ENV === 'production'

try {
    if (isProd) {
        module.exports = {
            output: 'export',
            assetPrefix: '/template-nextjs/',
            basePath: '/template-nextjs',
            images: {
                unoptimized: true,
            },
        }
    } else {
        module.exports = {
            images: {
                unoptimized: true,
            },
        }
    }
} catch (error) {
    console.error('Configuration Error:', error)
    throw new Error('Failed to configure Next.js export settings.')
}
