const isProd = process.env.NODE_ENV === 'production'

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
