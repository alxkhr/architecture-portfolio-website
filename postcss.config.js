module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: {
            siteWidth: '972px',
            navigationHeight: '4rem',
            fontColor: '#555'
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
