import { Button, Flex, Spacer } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { IconLinks } from './icon-links'

export const SmallIntro: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="relative overflow-hidden -mb-5 mt-2 -mx-3 rounded-full py-1.5 px-4 text-xs md:text-base font-bold leading-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
          <span className="flex gap-2">
            Struggling to learn to code? Here&apos;s you solution!
            <a
              href="https://www.kroto.in"
              className="font-semibold flex gap-1 hover:gap-2 transition-all justify-center items-center text-[#44ADBB]"
            >
              Read more <BsArrowRight />
            </a>
          </span>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-xl md:text-2xl">
          Hey, my name is <span className="font-semibold">Rose Kamal Love</span>{' '}
          and
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
        <IconLinks size="lg" />
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
