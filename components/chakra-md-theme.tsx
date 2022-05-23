/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Code,
  Table,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { IoCopy } from 'react-icons/io5'
import { Prism } from 'react-syntax-highlighter'
import { copyTextToClipboard } from '../lib/copy-to-clipboard'

import light from '../node_modules/react-syntax-highlighter/dist/esm/styles/prism/coldark-cold'
import dark from '../node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-dark'

export const newTheme = {
  blockquote: props => {
    const { children } = props
    return <blockquote>{children}</blockquote>
  },
  h1: props => {
    const { children, className, id } = props
    return (
      <h1 className={className} id={id}>
        {children}
      </h1>
    )
  },
  h2: props => {
    const { children, className, id } = props
    return (
      <h2 className={className} id={id}>
        {children}
      </h2>
    )
  },
  h3: props => {
    const { children, className, id } = props
    return (
      <h3 className={className} id={id}>
        {children}
      </h3>
    )
  },
  h4: props => {
    const { children, className, id } = props
    return (
      <h4 className={className} id={id}>
        {children}
      </h4>
    )
  },
  table: props => {
    const { children } = props
    return (
      <Table variant="striped" colorScheme="gray" borderRadius="8px">
        {children}
      </Table>
    )
  },
  code: props => {
    const toast = useToast()
    const { children, className } = props
    const classArray = className == undefined ? '' : className.split('-')
    const theme = useColorModeValue('light', 'dark')

    if (classArray == '') {
      return (
        <Code
          margin="2px"
          borderRadius="5px"
          background={useColorModeValue('#E2EAF2', '#414650')}
          bg={null}
        >
          {children}
        </Code>
      )
    }

    return (
      <Box>
        {classArray[1] === 'txt' ? (
          ''
        ) : (
          <Box align="right" marginBottom="-40px">
            <Button
              size="xs"
              borderRadius="8px"
              color={useColorModeValue('#282c34', '#abb2bf')}
              bg={useColorModeValue('#E2EAF2', '#282c34')}
              onClick={() => {
                copyTextToClipboard(children)
                toast({
                  description: 'Copied to clipboard successfully!',
                  position: 'top-right',
                  status: 'success',
                  variant: 'solid'
                })
              }}
            >
              <IoCopy />
            </Button>
          </Box>
        )}
        <div className="shadow-xl">
          <Prism
            language={classArray[1]}
            style={theme == 'dark' ? dark : light}
            showLineNumbers={true}
          >
            {children}
          </Prism>
        </div>
      </Box>
    )
  }
}
