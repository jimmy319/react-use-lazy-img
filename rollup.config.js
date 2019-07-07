const external = [
  'react'
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
        'react': 'React'
      }
    },
    external
  },
  {
    input: 'src/useLazyImg.js',
    output: {
      file: 'lib/react-use-lazy-img.esm.js',
      format: 'esm',
      sourcemap: true
    },
    external
  }
]
