/* eslint-disable react-hooks/rules-of-hooks */
import {
  As,
  Box,
  ChakraProps,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  OmitCommonProps,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
  IoJournal,
  IoLink,
  IoLogoGithub,
  IoLogoTwitter,
  IoOpen,
  IoPerson
} from 'react-icons/io5'
import Logo from './logo'
import { MobileNav } from './mobile-nav'

interface Props {
  href?: string
  path?: string
  target?: any
  children?: React.ReactNode
}

const LinkItem: React.FC<Props> = ({
  href,
  path,
  target,
  children,
  ...props
}) => {
  let active = path === href
  const inactiveColor = useColorModeValue('#282c34', '#abb2bf')
  const activeBg = useColorModeValue('#3D9CA9', '#55B6C2')
  if (path === '/') active = false
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? activeBg : undefined}
        color={active ? '#282c34' : inactiveColor}
        _target={target}
        {...props}
        _hover={{
          background: `${
            !active ? useColorModeValue('whiteAlpha.400', '#282c34') : activeBg
          }`
        }}
        transition="ease-in-out 0.25s"
        display="inline-flex"
        alignItems="center"
        style={{ gap: 4, borderRadius: '8px' }}
        className={`${active ? 'shadow-lg' : ''} hover:shadow-lg`}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      keyof ChakraProps
    > &
    ChakraProps &
    OmitCommonProps<any, keyof ChakraProps> & { as?: As<any> }
) => {
  const router = useRouter()
  const { path } = props
  // @ts-ignore
  const isFirefox = typeof InstallTrigger !== 'undefined'

  return (
    <Box
      position={router.asPath.includes('/blogs/') ? 'absolute' : 'fixed'}
      as="nav"
      w="100%"
      borderBottom={`1px solid ${useColorModeValue('#d3d9de', '#282c34')}`}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={
        isFirefox
          ? useColorModeValue('#C8CDD5', '#2C313A')
          : useColorModeValue('#EFF2F520', '#21252B20')
      }
      backdropFilter="auto"
      backdropBlur="8px"
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        px={2}
        py={0}
        my={0}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={8}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/about" path={path}>
            <IoPerson />
            About
          </LinkItem>
          <LinkItem href="/blogs" path={path}>
            <IoJournal />
            Blogs
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            <IoOpen />
            Portfolio
          </LinkItem>
          <Divider
            orientation="vertical"
            style={{ marginLeft: '15px', marginRight: '0px', padding: 0 }}
          />
          <LinkItem
            href="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/view"
            path={path}
          >
            <IoLink />
            Resume
          </LinkItem>
          <LinkItem
            href="https://github.com/rosekamallove"
            target="_blank"
            path={path}
          >
            <IoLogoGithub />
          </LinkItem>
          <LinkItem
            href="https://twitter.com/RoseKamalLove1"
            target="_blank"
            path={path}
          >
            <IoLogoTwitter />
          </LinkItem>
        </Stack>

        {/* Mobile Nav */}
        <Box flex={1} align="right" style={{ marginTop: '10px' }}>
          <MobileNav />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
