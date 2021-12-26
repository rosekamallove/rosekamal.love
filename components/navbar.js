import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoJournal,
  IoLink,
  IoLogoGithub,
  IoOpen,
  IoPersonOutline
} from 'react-icons/io5'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        style={{ borderRadius: '8px' }}
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

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        aligh="center"
        justify="space-between"
      >
        <Flex alig="center" mr={8}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alightitems="center"
          flexGrow={1}
          mt={{ base: 3, nmd: 0 }}
        >
          <LinkItem
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            href="/"
            path={path}
          >
            <IoPersonOutline />
            About
          </LinkItem>
          <LinkItem
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            href="/blogs"
            path={path}
          >
            <IoJournal />
            Blogs
          </LinkItem>
          <LinkItem
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            href="/projects"
            path={path}
          >
            <IoOpen />
            Projects
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/rosekamallove/rosekamallove.github.io"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <LinkItem
            href="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/view"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLink />
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                varient="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link} styles={{ gap: 4 }}>
                    <IoPersonOutline /> About
                  </MenuItem>
                </NextLink>
                <NextLink href="/blogs" passHref>
                  <MenuItem as={Link}>
                    <IoJournal /> Blogs
                  </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>
                    <IoOpen /> Projects
                  </MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/rosekamallove/rosekamallove.github.io"
                >
                  <IoLogoGithub /> View Source
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/view"
                >
                  <IoLink /> Resume
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
