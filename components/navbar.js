/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoJournal, IoLink, IoOpen, IoPersonOutline } from 'react-icons/io5'
import Logo from './logo'
import { MobileNav } from './mobile-nav'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#282c34', '#abb2bf')
  const activeBg = useColorModeValue('#3D9CA9', '#55B6C2')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? activeBg : undefined}
        color={active ? '#282c34' : inactiveColor}
        _target={_target}
        {...props}
        _hover={{
          background: `${
            !active ? useColorModeValue('whiteAlpha.400', '#323843') : activeBg
          }`
        }}
        transition="ease-in-out 0.25s"
        display="inline-flex"
        alignItems="center"
        style={{ gap: 4, borderRadius: '8px' }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const isFirefox = typeof InstallTrigger !== 'undefined'

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={isFirefox ? useColorModeValue('#C8CDD5', '#2C313A') : null}
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
        maxW="container.lg"
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
          <LinkItem href="/" path={path}>
            <IoPersonOutline />
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
          <Divider orientation="vertical" style={{ margin: '10px' }} />
          <LinkItem
            href="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/view"
            target="_blank"
            path={path}
          >
            <IoLink />
            Resume
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
