/* eslint-disable */
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        nodePolyfills(),
        resolve(),
        // commonjs({  ignore: ["conditional-runtime-dependency"]  }),
        terser()
    ]
}