module.exports = {
    plugins: {
        'postcss-easy-import': {
            prefix: '_'
        },
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
            features: {
                customProperties: {
                    preserve: true
                }
            }
        }
    },
};
