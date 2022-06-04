import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const colors = {
  lightText: 'hsl(200, 15%, 8%)',
  darkText: 'hsl(0, 0%, 100%)',
  lightInput: 'hsl(0, 0%, 52%)',
  darkElements: 'hsl(209, 23%, 22%)',
  lightElements: 'hsl(0, 0%, 100%)'
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')(props)
    }
  })
}

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem'
}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
}

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

const theme = extendTheme({
  colors,
  config,
  styles,
  fontSizes,
  fontWeights,
  breakpoints
})

export default theme
