// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  output: {
    name: 'Nuggets',
    exports: 'named',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true,
      },
    }),
    buble(),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;
