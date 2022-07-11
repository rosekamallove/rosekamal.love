import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f1f2f4', '#21252c')(props),
      color: mode('#282c34', '#abb2bf')(props)
    },
    blockquote: {
      // border: `1px solid ${mode('#00000010', '#abb2bf20')(props)}`,
      fontWeight: '600',
      borderLeft: `5px solid ${mode('#282c34', '#abb2bf')(props)}`,
      padding: '5px 5px 5px 20px',
      margin: '15px 5px'
    },
    details: {
      border: `1px solid ${mode('#E1EAF2', '#2D3748')(props)}`,
      borderRadius: '8px',
      margin: '10px 0px 10px 0px',
      padding: '10px 0px 10px 0px'
    },
    summary: {
      fontWeight: '700',
      cursor: 'pointer',
      margin: '5px'
    },
    pre: {
      marginTop: '10px !important',
      fontSize: '90% !important',
      marginBottom: '10px !important',
      borderRadius: '3px !important',
      linHeight: '80%'
    },
    code: {
      fontWeight: '600',
      linHeight: '70%',
      fontSize: '90%'
    },
    em: { fontWeight: '600' },
    strong: { fontWeight: 700 },
    p: { marginTop: '0.5rem' }
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
      color: mode('#3280CE', '#ce8de2')(props),
      textUnderlineOffset: 2
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
  body: 'Source Sans Pro',
  code: 'Jetbrains Mono',
  heading: 'Source Sans Pro'
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
    700: '#282c34',
    800: '#282c34'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
export default theme
