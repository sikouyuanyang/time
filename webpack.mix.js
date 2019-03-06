const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 //使.sass文件与.css文件对应,最后加个.version()
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   //切记句尾没有;号最后加个".verson()就号了",前面是.scss文件所在位置,后面是与之对应的css文件夹所在位置
   .sass('resources/sass/testA.scss', 'public/css')//ppa.scss这个文件是自己加的
   .sass('resources/sass/test/testB.scss', 'public/css/test').version();//自己又加了个文件夹是自己加的


