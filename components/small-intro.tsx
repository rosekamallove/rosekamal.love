import { Button, Flex, Link, Spacer } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { IconLinks } from './icon-links'

const A = ({ href, children }) => (
  <NextLink href={href}>
    <Link>
      <>{children}</>
    </Link>
  </NextLink>
)

export const SmallIntro: React.FC = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="text-[19px] md:text-2xl">
          Hey, my name is <span className="font-semibold">Rose Kamal Love</span>{' '}
          and,
        </div>
        <div
          className="text-4xl md:text-7xl my-5"
          style={{ fontFamily: 'Merriweather' }}
        >
          I write{' '}
          <span style={{ fontFamily: 'Jetbrains Mono', fontWeight: '800' }}>
            {'<'}
            <span
              style={
                {
                  /*color: useColorModeValue('#dc5661', '#E16B74')*/
                }
              }
            >
              Code
            </span>
            {'/>'}
          </span>
        </div>
        <div className="text-[17px] md:text-[22px] mt-2">
          <p>
            Welcome to my personal space on the internet, here you will find my{' '}
            <A href="/blogs">Blogs Posts</A> I write about{' '}
            <em className="font-normal">
              Internships, Tech, Open Source, Productivity and more
            </em>
          </p>
          <p className="mt-0 p-0 font-bold">Happy Reading ✨</p>
        </div>
      </div>
      <Flex my={8}>
        <IconLinks size="md" />
        <Spacer />
        <NextLink href="/projects">
          <Button
            mx={5}
            variant="ghost"
            rightIcon={<IoArrowForwardOutline />}
            colorScheme="teal"
          >
            Portfolio
          </Button>
        </NextLink>
      </Flex>
    </div>
  )
}
