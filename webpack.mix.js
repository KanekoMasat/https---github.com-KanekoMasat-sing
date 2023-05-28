const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    });