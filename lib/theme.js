import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#bfc5cf', '#282c34')(props),
      color: mode('#282c34', '#abb2bf')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3181CE', '#c678dd')(props),
      textUnderlineOffset: 3
    })
  },
  Code: {
    baseStyle: props => ({
      bg: mode('#D6DAE0', '#323843')(props),
      color: mode('#282c34', '#abb2bf')(props)
    })
  }
}

const fonts = {
  body: 'Poppins',
  code: 'Poppins',
  heading: "'Poppins'"
}

const colors = {
  grassTeal: '#88ccca',
  teal: {
    50: '#b4dee4',
    100: '#b4dee4',
    200: '#56b6c2',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#3d9ca9',
    600: '#3d9ca9',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
export default theme
