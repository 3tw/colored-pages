const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

mix.webpackConfig({
  plugins: [new LiveReloadPlugin()]
})

mix.options({
  processCssUrls: false
})

mix
  .scripts(['app/js/variables.js', 'app/js/functions.js', 'app/js/main.js'], 'app/src/colored-pages.min.js')
  .scripts(['app/js/variables.js', 'app/js/functions.js', 'app/js/main.js'], 'dist/colored-pages.min.js')
  .sass('app/scss/colored-pages.scss', 'app/css/')
  .copy('app/css/', 'dist/')
  .copy('app/index.html', 'demo/')
  .copy('app/src/', 'demo/')
  .copy('app/css/', 'demo/')
