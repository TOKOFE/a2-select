import {argv} from 'yargs';

const ENV = argv.env || 'dev';

const APPS_SRC = 'src';
const APPS_DEST = `build/${ENV}`;
const TEST_DEST = `test`;
const PACKAGE_DEST = 'Publish/package';

export const PATH = {
  src: {
    base: APPS_SRC,
    index: `${APPS_SRC}/index.html`,
    html: `${APPS_SRC}/**/*.html`,
    less: [
      `${APPS_SRC}/**/*.less`,
      `!${APPS_SRC}/assets/styles/partials/**/*`,
      `!${APPS_SRC}/assets/vendors/**/*`
    ],
    css: `${APPS_SRC}/**/*.css`,
    ts: [
      'typings/browser.d.ts',
      `${APPS_SRC}/**/*.ts`,
      `!${APPS_SRC}/**/*.spec.ts`
    ],
    e2e: `!${APPS_SRC}/**/*.e2e.ts`,
    vendors: {
      css: [
        `node_modules/bootstrap/dist/css/bootstrap.min.css`
      ]
    },    
    deps: [
      'node_modules/systemjs/dist/system-polyfills.src.js',
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.min.js',
      'node_modules/angular2/bundles/angular2.js',
      'node_modules/angular2/bundles/router.js',
      'node_modules/angular2/bundles/http.min.js',
      'node_modules/lodash/lodash.js',
    ]
  },

  dest: {
    base: APPS_DEST,
    test: TEST_DEST,
    html: `${APPS_DEST}/`,
    assets: `${APPS_DEST}/assets`,
    lib: `${APPS_DEST}/lib`
  },

  package: {
    base: PACKAGE_DEST
  }
};
