module.exports = {
  plugins: [
    // require('postcss-smart-import')({}),
    // require('precss')({}),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: {
            siteWidth: '975px'
          }
        }
      },
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
}
