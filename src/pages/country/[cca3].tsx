import { Box } from '@chakra-ui/react'
import { GetStaticPropsContext, NextPage } from 'next'
import Container from '../../components/Container'
import CountryDetails from '../../components/CountryDetails'
import {
  CountryResponse,
  getCountries,
  getCountryByCCA3
} from '../../services/countries'
import { Country } from '../../types/Country'

type ViewCountryDetailsByCCA3Props = {
  country: Country
}

const countryMapper = (country: CountryResponse): Country => {
  const countryMapped: Country = {
    nativeName: Object.values(country.name.nativeName)[0].official,
    name: country?.name?.common,
    flag: country?.flags?.svg,
    population: country?.population,
    capital: country?.capital?.[0] ?? '',
    region: country?.region,
    cca3: country?.cca3,
    topLevelDomains: country.tld,
    subregion: country.subregion,
    languages: Object.values(country.languages),
    currencies: Object.values(country.currencies).map(
      (currency) => currency.name
    ),
    borders: country.borders
  }

  return countryMapped
}

const ViewCountryDetailsByCCA3: NextPage<ViewCountryDetailsByCCA3Props> = ({
  country
}) => {
  return (
    <Box my={10}>
      <Container margin="0 auto">
        <CountryDetails country={country} />
      </Container>
    </Box>
  )
}

export default ViewCountryDetailsByCCA3

export async function getStaticPaths() {
  const getCountriesResponse = await getCountries({})

  const paths = getCountriesResponse.map((country) => {
    return {
      params: {
        cca3: country.cca3 ?? ''
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { cca3 } = params

  const getCountryByCCA3Response = await getCountryByCCA3(cca3)
  const country = countryMapper(getCountryByCCA3Response[0])

  return {
    props: {
      country
    }
  }
}
