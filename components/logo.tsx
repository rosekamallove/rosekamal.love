import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

const Logo: React.FC = () => {
  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={50} height={50} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
