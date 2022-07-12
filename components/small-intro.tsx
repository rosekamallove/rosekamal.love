import { Button, Flex, Spacer } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { IconLinks } from './icon-links'

export const SmallIntro: React.FC = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="text-xl md:text-2xl">
          Hey, my name is <span className="font-semibold">Rose Kamal Love</span>{' '}
          and,
        </div>
        <div
          className="text-4xl md:text-7xl my-2"
          style={{ fontFamily: 'Merriweather' }}
        >
          I write{' '}
          <span style={{ fontFamily: 'Jetbrains Mono', fontWeight: '800' }}>
            {'<'}
            <span>Code</span>
            {'/>'}
          </span>
        </div>
        <div className="text-[17px] md:text-[22px]">
          <p className="mt-0 p-0">Happy Reading ✨</p>
        </div>
      </div>
      <Flex my={8}>
        <IconLinks size="md" />
        <Spacer />
        <NextLink href="/about">
          <Button
            mx={5}
            variant="ghost"
            rightIcon={<IoArrowForwardOutline />}
            colorScheme="teal"
          >
            About me
          </Button>
        </NextLink>
      </Flex>
    </div>
  )
}
