import light from './light'

const darkTheme: typeof light = {
  ...light,
  name: 'dark',
  colors: {
    ...light.colors,
    background: '#343233',
  },
}

export default darkTheme
