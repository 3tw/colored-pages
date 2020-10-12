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
  .sass('app/scss/colored-pages.scss', 'app/css/')
  .copy('app/index.html', 'dist/')
  .copy('app/src/', 'dist/')
  .copy('app/css/', 'dist/')
  .copy('favicon.ico', 'dist/')
