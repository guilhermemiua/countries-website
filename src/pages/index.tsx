import {
  Flex,
  Box,
  Grid,
  Input,
  Select,
  useColorModeValue
} from '@chakra-ui/react'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import CountryCard from '../components/CountryCard'
import { getCountries, CountryResponse } from '../services/countries'
import { Country } from '../types/Country'
import { sort } from 'fast-sort'
import { useState } from 'react'
import { useRouter } from 'next/router'
import countryMapper from '../util/mappers/countryMapper'

type HomeProps = {
  countries: Country[]
}

const countriesMapper = (countries: CountryResponse[]): Country[] => {
  const countriesMapped: Country[] = countries.map((country) =>
    countryMapper(country)
  )

  const countriesSorted: Country[] = sort(countriesMapped).asc(
    (country) => country.name
  )

  return countriesSorted
}

const Home: NextPage<HomeProps> = ({ countries }) => {
  const router = useRouter()

  const [countryList, setCountryList] = useState<Country[]>(countries)
  const [region, setRegion] = useState<string>(router.query.region as string)

  const handleRegionFilter = async (region: string): Promise<void> => {
    setRegion(region)

    const getCountriesResponse = await getCountries({ region })
    const countriesMapped = countriesMapper(getCountriesResponse)

    setCountryList(countriesMapped)
    router.push(`/?region=${region}`, undefined, { shallow: true })
  }

  const handleNameFilter = (name: string): void => {
    if (name) {
      setCountryList((oldCountryList) =>
        oldCountryList.filter((oldCountry) =>
          oldCountry.name.toLowerCase().includes(name.toLowerCase())
        )
      )

      return
    }

    return setCountryList(countries)
  }

  return (
    <>
      <Head>
        <title>Next.js Countries</title>
        <meta name="description" content="Next.js Countries" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Container margin="0 auto">
        <Flex
          direction={['column', 'row']}
          justifyContent={{ base: 'center', md: 'space-between' }}
          my={10}
        >
          <Box width={{ base: '100%', lg: '40%' }} mb={{ base: 5, sm: 0 }}>
            <Input
              id="name"
              placeholder="Country name"
              bg={useColorModeValue('lightElements', 'darkElements')}
              size={'lg'}
              onChange={(event) => handleNameFilter(event.target.value)}
            />
          </Box>

          <Box width={{ base: '100%', lg: '20%' }}>
            <Select
              id="region"
              placeholder="All Regions"
              bg={useColorModeValue('lightElements', 'darkElements')}
              size={'lg'}
              onChange={(event) => handleRegionFilter(event.target.value)}
              value={region}
            >
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </Select>
          </Box>
        </Flex>

        <Grid
          templateColumns={{
            base: 'repeat(1, 0fr)',
            md: 'repeat(2, 0fr)',
            lg: 'repeat(4, 0fr)'
          }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          mt={10}
        >
          {countryList.map((country: Country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context
  const { region } = query

  const getCountriesResponse = await getCountries({ region: region as string })

  const countriesMapped = countriesMapper(getCountriesResponse)

  return {
    props: {
      countries: countriesMapped
    }
  }
}

export default Home
