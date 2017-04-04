module.exports = {
  plugins: [
    // require('postcss-smart-import')(}),
    // require('precss')({}),
    require('postcss-cssnext')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
}
