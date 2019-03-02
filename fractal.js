'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
const myTheme = mandelbrot({
  skin: 'white',
  nav: ['docs', 'components'],
  styles: [
  'default'
  ]
});

fractal.web.theme(myTheme);

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'Template Style&Component');
fractal.set('project.version', '1.0');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('default.preview', '@preview');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');

fractal.web.set('static.path', __dirname + '/app/assets');
fractal.web.set('builder.dest', __dirname + '/styleguide');
fractal.web.set('server.sync', true);
