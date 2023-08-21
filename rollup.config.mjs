// Import rollup plugins
import {rollupPluginHTML as html} from '@web/rollup-plugin-html';
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    html({
      input: '*.html',
      minify: true,
    }),

    // Resolve bare module specifiers to relative paths
    resolve(),

    dynamicImportVars(),

    // Minify HTML template literals
    // see https://github.com/asyncLiz/rollup-plugin-minify-html-literals/issues/24
    minifyHTML.default(),

    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),

    // Print bundle summary
    summary(),

    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*', '_redirects', 'cv-*.pdf', 'manifest.json', 'browserconfig.xml'],
    })
  ],

  output: {
    dir: 'build',
  },

  onwarn: function (message, warn) {
    if (/Circular dependency.*@lit\/localize/.test(message)) {
      return;
    }
    warn(message);
  },

  preserveEntrySignatures: 'strict',
};
