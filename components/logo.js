import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  margin-top: 5px;
  height: 50px;
  line-height: 20px;
  padding: 10px;
  transition: ease 0.2s;
`

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={40} height={40} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Rose Kamal Love
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
