import babel from 'rollup-plugin-babel'

const external = ['react']
const plugins = [
  babel({
    exclude: 'node_modules/**'
  })
]

export default [
  {
    input: 'src/useLazyImg.js',
    output: {
      file: 'lib/react-use-lazy-img.umd.js',
      format: 'umd',
      name: 'useLazyImg',
      sourcemap: true,
      globals: {
        react: 'React'
      }
    },
    external,
    plugins
  },
  {
    input: 'src/useLazyImg.js',
    output: {
      file: 'lib/react-use-lazy-img.esm.js',
      format: 'esm',
      sourcemap: true
    },
    external,
    plugins
  }
]
