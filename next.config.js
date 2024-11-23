const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? '/template-nextjs/' : '',
    basePath: isProd ? '/template-nextjs/' : '',
    images: {
        unoptimized: true,
    },
}
