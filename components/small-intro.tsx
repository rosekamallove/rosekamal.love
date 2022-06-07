import { Button, Flex, Spacer, Link } from '@chakra-ui/react'
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
      {/*<Box
        borderRadius="8px"
        bg={useColorModeValue('whiteAlpha.500', '#282c34')}
        mb={6}
        p={3}
        align="center"
        className="shadow-sm"
      >
        I&apos;m A software developer who brings latency down to his humour
        level 🚀
      </Box>*/}
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
        <div className="mt-1 text-[18px] md:text-xl mt-2">
          <p>
            Welcome to my personal internet space, here you will find my{' '}
            <A href="/blogs">Blogs Posts</A> I write about{' '}
            <em>Internships, Tech, Open Source, Productivity and more</em>
          </p>
          <p className="mt-0 p-0">
            You can learn more about me <A href="/about">here</A>, Happy Reading
            ✨
          </p>
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
