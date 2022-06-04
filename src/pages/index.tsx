import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import CountryCard from '../components/CountryCard'
import Header from '../components/Header'
import { Country } from '../types/Country'

type HomeProps = {
  countries: Country[]
}

const Home: NextPage<HomeProps> = ({ countries }) => {
  return (
    <>
      <Head>
        <title>Next.js Countries</title>
        <meta name="description" content="Next.js Countries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container margin="0 auto">
        <Stack
          wrap={'wrap'}
          direction={['column', 'row']}
          align={['center', 'center']}
          justify={['center', 'flex-start']}
          spacing={5}
          mt={5}
        >
          {countries.map((country: Country) => (
            <CountryCard key={country.id} />
          ))}
        </Stack>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      countries: [
        {
          id: '1'
        },
        {
          id: '2'
        }
      ]
    }
  }
}

export default Home
