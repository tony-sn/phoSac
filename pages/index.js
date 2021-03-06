import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  Icon,
  useColorModeValue,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Fireworks from '../components/Fireworks'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoFacebook } from 'react-icons/io5'

const Home = () => {
  return (
    <>
      <Layout>
        <Container maxW="container.xl">
          <Center>
            <SimpleGrid columns={[1, 1, 2]} gap={3}>
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="none"
                maxWidth="full"
                display="inline-block"
                borderRadius="lg"
                src="/images/HotVitLonMuoiTieu.jpg"
                alt="hot vit lon muoi tieu"
                id="hotvitlonmuoitieu"
              />
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="none"
                maxWidth="full"
                display="inline-block"
                borderRadius="lg"
                src="/images/HotVitLonXaoMe.jpg"
                alt="hot vit lon xao me"
                id="hotvitlonxaome"
              />
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="none"
                maxWidth="full"
                display="inline-block"
                borderRadius="lg"
                src="/images/ChanGaSaTac.jpg"
                alt="chan ga sa tac"
                id="changasatac"
              />
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="none"
                maxWidth="full"
                display="inline-block"
                borderRadius="lg"
                src="/images/CheDuongNhan.jpg"
                alt="che duong nhan"
                id="cheduongnhan"
              />
            </SimpleGrid>
          </Center>

          <Box
            borderRadius="lg"
            mt={6}
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            We&apos;re the one, authentic Ph???!
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Ph??? S???c
              </Heading>
              <br />
              <p>
                65-67 Ashley Street Melbourne 3019 Melbourne, VIC, Australia
                3019
              </p>
              <br />
              <p>11 Alfrieda St, St Albans VIC 3021</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="sm"
                display="inline-block"
                borderRadius="full"
                src="/images/PhoSacAvatar.jpg"
                alt="Phosac Logo"
              />
            </Box>
          </Box>

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              [H???I CH??? T???T 2022]
            </Heading>
            <p>
              N??m m???i ?????n, c??ng v???i h???i ch??? T???t ???????c t??? ch???c t???i St Albans, nh??
              h??ng Ph??? S???c, ngo??i m??n ph??? truy???n th???ng, c?? b??n th??m m???t s??? m??n
              ???m th???c ???????ng ph??? ?????c s???c ph???c v??? m???i ng?????i ?????n v???i h???i ch???:
            </p>
            <br />
            <ul style={{ listStyle: 'none' }}>
              <li>- H???t v???t l???n mu???i ti??u</li>
              <li>- H???t v???t l??? rang me</li>
              <li>- Ch??n g?? s??? t???c c??c</li>
              <li>- Ch?? d?????ng nhan</li>
            </ul>
            <br />
            <p>
              ?????a ch???: 11 Alfrieda St, St Albans VIC 3021 (k??? b??n Chatime St
              Albans)
            </p>
            <br />
            <p>Th???i gian: T??? 9h ng??y Ch??? Nh???t 13/02/22</p>
            <br />
            <p> Mong m???i ng?????i gh?? ???ng h???.</p>
            <Center>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#hotvitlonmuoitieu">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    V???t L???n Mu???i Ti??u
                  </Button>
                </NextLink>
              </Box>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#hotvitlonxaome">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    V???t L???n X??o Me
                  </Button>
                </NextLink>
              </Box>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#changasatac">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Ch??n G?? S??? T???c
                  </Button>
                </NextLink>
              </Box>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#cheduongnhan">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Ch?? D?????ng Nhan
                  </Button>
                </NextLink>
              </Box>
            </Center>
          </Section>

          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              [LUNAR NEW YEAR FESTIVAL 2022]
            </Heading>
            <p>
              Together with New Year Festival at St Albans, Phosac is going to
              offer some delicious Vietnamese street food, namely:
            </p>
            <br />
            <ul style={{ listStyle: 'none' }}>
              <li>- Salt and pepper balut</li>
              <li>- Tamarind sauce balut</li>
              <li>
                - Mixed chicken feet ( with kumquat, lemongrass and ambarella )
              </li>
              <li>- Duong nhan (??????) dessert</li>
            </ul>
            <br />
            <p>
              Address: 11 Alfrieda St, St Albans VIC 3021 (next to Chatime St
              Albans)
            </p>
            <br />
            <p>Time: From 9AM Sunday 13/02/22</p>
            <br />
            <p> Hope to see you there.</p>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              [MAP]
            </Heading>
            <Center>
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="none"
                maxWidth="full"
                display="inline-block"
                borderRadius={3}
                src="/images/PhosacStAlbans.jpg"
                alt="address"
              />
            </Center>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title" align="center">
              CONTACT US
            </Heading>

            <Center>
              <List>
                <Link
                  href="https://www.facebook.com/phosac14072019/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    align="center"
                    leftIcon={<Icon w={12} h={12} as={IoLogoFacebook} />}
                  ></Button>
                </Link>
              </List>
            </Center>
          </Section>

          <Section delay={0.4}>
            <Fireworks />
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export default Home
