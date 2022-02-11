import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const phoBowl = `/images/phosac${useColorModeValue('-light', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={phoBowl} width={50} height={50} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            <span style={{ textTransform: 'uppercase' }}>Phosac</span> - Hoi Cho
            Tet St Albans (13/02/2022)
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
