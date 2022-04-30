import { useColorModeValue } from '@chakra-ui/react'
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
          <Image src={logoImg} width={50} height={50} alt="logo" />
          {/* <Text
            color={useColorModeValue('#282c34', '#abb2bf')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Rose Kamal Love
          </Text> */}
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
