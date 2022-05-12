import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#c8cdd5', '#2c313a')(props),
      color: mode('#282c34', '#abb2bf')(props),
      fontWeight: '500'
    },
    blockquote: {
      borderLeft: '5px solid',
      fontFamily: 'Sriracha',
      padding: '0px 0px 0px 10px',
      marginTop: '10px',
      marginBottom: '10px'
    },
    strong: {
      fontWeight: 700
    },
    details: {
      border: `1px solid ${mode('#E1EAF2', '#2D3748')(props)}`,
      borderRadius: '2px',
      margin: '10px 0px 10px 0px',
      padding: '10px 0px 10px 0px'
    },
    summary: {
      fontWeight: '700',
      cursor: 'pointer',
      margin: '5px'
    },
    ul: {
      fontSize: '92.5%'
    },
    ol: {
      fontSize: '92.5%'
    },
    pre: {
      marginTop: '0px !important',
      borderRadius: '2px'
    },
    em: {
      fontStyle: 'normal',
      fontFamily: 'Sriracha'
    },
    p: {
      marginTop: '0.5rem'
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
    baseStyle: {
      children: props => ({
        background: mode('#D6DAE0', '#323843')(props),
        color: mode('#282c34', '#abb2bf')(props)
      })
    }
  }
}

const fonts = {
  body: 'Raleway',
  code: 'Jetbrains Mono',
  heading: 'Raleway'
}

const colors = {
  grassTeal: '#88ccca',
  teal: {
    50: '#b4dee4',
    100: '#b4dee4',
    200: '#44adbb',
    300: '#56b5c2',
    400: '#56b5c2',
    500: '#3d9ca9',
    600: '#2f7983',
    700: '#22575e',
    800: '#1b454b',
    900: '#1D4044'
  },
  gray: {
    100: '#E2EAF2',
    200: '#abb2bf',
    800: '#282c34'
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
