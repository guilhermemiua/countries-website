import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const colors = {}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const styles = {
  global: {
    body: {
      bg: mode('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')
    }
  }
}

const theme = extendTheme({ colors, config, styles })

export default theme
