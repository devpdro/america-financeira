import { type ReactNode } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import GlobalStyles from 'src/presentation/styles/global'
import * as themes from 'src/presentation/styles/themes'

type ThemeType = keyof typeof themes

interface ThemeProviderProps {
  currentTheme?: ThemeType
  children: ReactNode
}

export const ThemeProvider = ({ currentTheme = 'light', children }: ThemeProviderProps) => (
  <Provider theme={themes[currentTheme]}>
    <GlobalStyles />
    {children}
  </Provider>
)
