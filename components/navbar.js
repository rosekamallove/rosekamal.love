import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoJournal, IoLink, IoOpen, IoPersonOutline } from 'react-icons/io5'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

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
          mt={{ base: 3, nmd: 0 }}
        >
          <LinkItem
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, borderRadius: '2px' }}
            href="/"
            path={path}
          >
            <IoPersonOutline />
            About
          </LinkItem>
          <LinkItem
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, borderRadius: '2px' }}
            href="/blogs"
            path={path}
          >
            <IoJournal />
            Blogs
          </LinkItem>
          <LinkItem
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, borderRadius: '2px' }}
            href="/projects"
            path={path}
          >
            <IoOpen />
            Projects
          </LinkItem>
          <Divider orientation="vertical" style={{ margin: '10px' }} />
          <LinkItem
            href="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/view"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, borderRadius: '2px' }}
          >
            <IoLink />
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} align="right" style={{ marginTop: '10px' }}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu colorScheme="teal">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                varient="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem
                    icon={<IoPersonOutline />}
                    as={Link}
                    styles={{ gap: 4 }}
                  >
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href="/blogs" passHref>
                  <MenuItem icon={<IoJournal />} as={Link}>
                    Blogs
                  </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem icon={<IoOpen />} as={Link}>
                    Projects
                  </MenuItem>
                </NextLink>
                <MenuDivider />
                {/* <MenuItem
                  as={Link}
                  href="https://github.com/rosekamallove/rosekamallove.github.io"
                >
                  <IoLogoGithub /> View Source
                </MenuItem> */}
                <MenuItem
                  as={Link}
                  href="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/view"
                  icon={<IoLink />}
                >
                  Resume
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
