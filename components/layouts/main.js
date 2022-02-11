import Head from 'next/head'

import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={'8'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Phosac Tet Festival" />
        <meta name="author" content="Tony Nguyen" />
        <meta name="author" content="personal" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <meta property="og:site_name" content="Phosac Tet Landing Page" />
        <meta property="og:type" content="website" />
        <title>Phosac - Tet Festival</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
