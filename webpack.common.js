const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                exclude: [path.resolve(__dirname, 'node_modules')],
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'pageinfotype',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        bufferutil: 'bufferutil', 'utf-8-validate': 'utf-8-validate',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    target: 'node'
}