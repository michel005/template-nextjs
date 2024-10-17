const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    output: 'export',
    assetPrefix: isProd ? '/template-nextjs/' : '',
    basePath: isProd ? '/template-nextjs/' : '',
    images: isProd
        ? {
              unoptimized: true,
          }
        : undefined
}
