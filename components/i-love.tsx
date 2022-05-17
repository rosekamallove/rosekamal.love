import { Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const ILove: React.FC = () => {
  return (
    <div>
      <Heading as="h3" variant="section-title">
        I Love ♥
      </Heading>
      <Text>
        <Link href="https://soundcloud.com/rosekmallove" target="_blank">
          Music
        </Link>
        ,{' '}
        <Link href="https://instagram.com/rosekamallove" target="_blank">
          Photography
        </Link>
        , Development, Vim
      </Text>
    </div>
  )
}
