import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    entry: 'src/index.js',
    name: 'immootable',
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' },
      { dest: pkg.browser, format: 'umd' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
