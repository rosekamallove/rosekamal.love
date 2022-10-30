import { Container, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Links from './links'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Rose Kamal Love</title>
        <meta property="og:title" content={'Links - Rose Kamal Love'} />
        <meta
          property="og:image"
          content="https://rosekamal.love/images/rosek.jpg"
        />
        <meta
          property="og:description"
          content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
        />
      </Head>
      <div className="overflow-hidden relative">
        <SVGBackground />
        <Container maxW="container.md">
          <Links />
        </Container>
      </div>
    </div>
  )
}

export const SVGBackground = () => (
  <div className="relative h-full translate-y-80 max-w-sm md:max-w-lg -z-10 mx-auto">
    <svg
      className="absolute right-full transform translate-x-1/4 lg:translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={`${useColorModeValue(
              'text-gray-200',
              'text-[#282c34]'
            )}`}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
      />
    </svg>
    <svg
      className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={`${useColorModeValue(
              'text-gray-200',
              'text-[#282c34]'
            )}`}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      />
    </svg>
  </div>
)
