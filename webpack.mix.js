const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

mix.webpackConfig({
  plugins: [new LiveReloadPlugin()]
})

mix.options({
  processCssUrls: false
})

mix
  .scripts(
    [
      'app/js/variables.js',
      'app/js/functions.js',
      'app/js/main.js'
    ],
    'app/src/app.js'
  )
  .copy('app/src/', 'dist/')
  .sass('app/scss/colored-pages.scss', 'app/css')
  .copy(['app/css/', 'app/scss/scss-demo.scss'], 'dist/')
