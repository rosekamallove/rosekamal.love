import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import {
  IoJournal,
  IoLink,
  IoOpen,
  IoPersonOutline,
  IoLogoTwitter,
  IoLogoGithub
} from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'

export const MobileNav: React.FC = () => {
  return (
    <>
      <ThemeToggleButton />
      <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
        <Menu colorScheme="teal">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label="Options"
            size="sm"
            variant="ghost"
            className="shadow-md hover:shadow-lg"
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
                Portfolio
              </MenuItem>
            </NextLink>
            <MenuDivider />
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
    </>
  )
}
