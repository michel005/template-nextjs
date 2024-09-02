const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    output: 'export',
    assetPrefix: isProd ? '/template-nextjs/' : '/',
    basePath: '/template-nextjs',
    images: {
        unoptimized: true,
    },
}
