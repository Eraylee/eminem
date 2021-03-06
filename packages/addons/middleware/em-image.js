module.exports = () => (context) => {
    context.module

        .rule('image')
        .test([/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/])
        .use('url-loader')
        .loader(require.resolve('url-loader'))
        .options({
            limit: 8192,
            name: context.isEnvProduction ? 'assets/[name].[hash:8].[ext]' : 'assets/[name].[ext]'
        })
        .end();

    return context;
};
