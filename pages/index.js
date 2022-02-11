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

import Paragraph from '../components/paragraph'
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
            We&apos;re the one, authentic Phở!
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Phở Sắc
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
              [HỘI CHỢ TẾT 2022]
            </Heading>
            <p>
              Năm mới đến, cùng với hội chợ Tết được tổ chức tại St Albans, nhà
              hàng Phở Sắc, ngoài món phở truyền thống, có bán thêm một số món
              ẩm thực đường phố đặc sắc phục vụ mọi người đến với hội chợ:
            </p>
            <br />
            <ul style={{ listStyle: 'none' }}>
              <li>- Hột vịt lộn muối tiêu</li>
              <li>- Hột vịt lộ rang me</li>
              <li>- Chân gà sả tắc cóc</li>
              <li>- Chè dưỡng nhan</li>
            </ul>
            <br />
            <p>
              Địa chỉ: 11 Alfrieda St, St Albans VIC 3021 (kế bên Chatime St
              Albans)
            </p>
            <br />
            <p>Thời gian: Từ 9h ngày Chủ Nhật 13/02/22</p>
            <br />
            <p> Mong mọi người ghé ủng hộ.</p>
            <Center>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#hotvitlonmuoitieu">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Vịt Lộn Muối Tiêu
                  </Button>
                </NextLink>
              </Box>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#hotvitlonxaome">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Vịt Lộn Xào Me
                  </Button>
                </NextLink>
              </Box>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#changasatac">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Chân Gà Sả Tắc
                  </Button>
                </NextLink>
              </Box>
              <Box align="justify" my={4} mx={2}>
                <NextLink href="#cheduongnhan">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Chè Dưỡng Nhan
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
              <li>- Duong nhan (养脸) dessert</li>
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
