import { Grid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import CountryCard from '../components/CountryCard'
import Header from '../components/Header'
import { getCountries } from '../services/countries'
import { Country } from '../types/Country'
import { sort } from 'fast-sort'

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <Container margin="0 auto">
        <Grid
          templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(4, 0fr)' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          mt={5}
        >
          {countries.map((country: Country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getCountries()

  const countries: Country[] = data.map((country) => ({
    name: country?.name?.common,
    flag: country?.flags?.png,
    population: country?.population,
    capital: country?.capital?.[0] ?? '',
    region: country?.region
  }))

  const countriesSorted: Country[] = sort(countries).asc(
    (country) => country.name
  )

  return {
    props: {
      countries: countriesSorted
    }
  }
}

export default Home
