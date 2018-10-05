var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function(mix) {
    mix.sass('main.scss');
    mix.browserify('app.js');
    mix.browserSync({
        server: {
            baseDir: "./public",
            // directory: true,
            // index: "index.html"
        },
        proxy: "localhost:3000"
    });
});