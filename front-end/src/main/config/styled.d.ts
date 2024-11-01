import 'styled-components'
import type { dark as darkTheme } from 'src/presentation/styles/themes'

type ThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends darkTheme {}
}
