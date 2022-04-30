import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#bfc5cf', '#282c34')(props),
      color: mode('#282c34', '#abb2bf')(props)
    }
    // pre: {
    //   bg: mode('#D6DAE0', '#323843')(props),
    //   color: mode('#282c34', '#abb2bf')(props)
    // }
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
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Code: {
    baseStyle: {
      bg: mode('#D6DAE0', '#323843'),
      color: mode('#282c34', '#abb2bf')
    }
  }
}

const fonts = {
  body: 'Poppins',
  code: 'Poppins',
  heading: "'Poppins'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
