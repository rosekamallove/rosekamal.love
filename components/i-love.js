import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { Paragraph } from '../components/paragraph'

export const ILove = () => {
  return (
    <div>
      <Heading as="h3" variant="section-title">
        I Love ♥
      </Heading>
      <Paragraph>
        <Link href="https://soundcloud.com/rosekmallove" target="_blank">
          Music
        </Link>
        ,{' '}
        <Link href="https://instagram.com/rosekamallove" target="_blank">
          Photography
        </Link>
        , Development, Vim
      </Paragraph>
    </div>
  )
}
