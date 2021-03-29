import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const name = require('./package.json').main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/index.tsx',
  external: (id) => !/^[./|react]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
  {
    input: './src/demo.tsx',
    output: {
      file: './demo/bundle.js',
      format: 'cjs',
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      commonjs(),
      resolve({
        browser: true,
      }),
      typescript(),
    ],
  },
];
