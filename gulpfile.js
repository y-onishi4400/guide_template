'use strict';

// gulpプラグインの読み込み
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'] });
const packageImporter = require('node-sass-package-importer');
const autoprefixer = require("autoprefixer");
const bulkSass = require('gulp-sass-bulk-import');
const cssDeclarationSorter = require('css-declaration-sorter');

const fractal = require('./fractal.js');
const logger = fractal.cli.console;

// VARIABLES
// - - - - - - - - - - - - - - -
const ROOT_PATH = './';
const SRC_PATH = './src/';
const DIST_PATH = './app/assets/stylesheets/';
// config
const config = {
  sass: {
    files: [
      `${SRC_PATH}sass/**/*.scss`,
    ],
    watchFiles: [
      `${SRC_PATH}sass/*`,
      `${SRC_PATH}sass/**/*`,
    ],
    output: `${DIST_PATH}`,
  },
  font: {
    skethcFileName: `${SRC_PATH}sketch/symbol-font-14px.sketch`,
    output: `${DIST_PATH}`,
  },
};

const fontName = '_iconfont' // set name of your symbol font
const className = 'c-icon' // set class name in your CSS
const template = '_fontawesome-style' // or 'foundation-style'
const timestamp = Math.round(Date.now() / 1000)


/*gulp.task( 'copy', function() {
    return gulp.src(
        [ `${DIST_PATH}css/fonts/**`, `${DIST_PATH}images/**`],
        { base: `${DIST_PATH}` }
    )
    .pipe( gulp.dest( 'static' ) );
} );*/

gulp.task('symbols', () => {
  return gulp.src(config.font.skethcFileName)
    .pipe(gulpLoadPlugins.sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(gulpLoadPlugins.iconfont({
      fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      timestamp,
      log: () => {} // suppress unnecessary logging
    }))
    .on('glyphs', (glyphs) => {
      const options = {
        className,
        fontName,
        fontPath: './fonts/', // set path to font (from your CSS file if relative)
        glyphs: glyphs.map(mapGlyphs)
      }
      //css
      gulp.src(`${SRC_PATH}sass/foundation/template/${template}.scss`)
        .pipe(gulpLoadPlugins.consolidate('lodash', options))
        .pipe(gulpLoadPlugins.rename({ basename: fontName }))
        //.pipe(gulpLoadPlugins.sass())
        .pipe(gulp.dest(`${SRC_PATH}sass/foundation`))

      // if you don't need sample.html, remove next 4 lines
      gulp.src(`${SRC_PATH}sass/foundation/template/${template}.html`)
        .pipe(gulpLoadPlugins.consolidate('lodash', options))
        .pipe(gulpLoadPlugins.rename({ basename: 'icon' }))
        .pipe(gulp.dest(config.font.output)) // set path to export your sample HTML
    })
    .pipe(gulp.dest(`${DIST_PATH}/fonts`)) // set path to export your fonts
});

function mapGlyphs (glyph) {
  return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
}

function cacheControl (req, res, next) {
  res.setHeader('Cache-control', 'no-store')
  next()
}

gulp.task('sass', () => {
  const builder = gulp.src(config.sass.files)
    .pipe(bulkSass())
    .pipe(gulpLoadPlugins.sass({
      importer: packageImporter({
        extensions: ['.scss', '.css', '.sass'],
      }),
    }))
    .pipe(gulpLoadPlugins.postcss([
      autoprefixer({
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
        cascade: false
      }),
      cssDeclarationSorter({order: 'smacss'}),
    ]))
    //.pipe(gulp.dest(config.sass.output))
    .pipe(gulp.dest(config.sass.output))
  return builder;
});

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

gulp.task('watch', function(){
  gulp.watch(config.sass.files, gulp.task('sass'));
});

gulp.task('default', gulp.series('fractal:start','watch'));
