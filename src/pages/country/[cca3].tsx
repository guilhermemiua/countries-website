import { Box } from '@chakra-ui/react'
import { GetStaticPropsContext, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Container from '../../components/Container'
import CountryDetails from '../../components/CountryDetails'
import { getCountries, getCountryByCCA3 } from '../../services/countries'
import { Country } from '../../types/Country'
import countryMapper from '../../util/mappers/countryMapper'

type ViewCountryDetailsByCCA3Props = {
  country: Country
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

interface Params extends ParsedUrlQuery {
  cca3: string
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<Params>) {
  const { cca3 } = params as Params

  const getCountryByCCA3Response = await getCountryByCCA3(cca3 as string)
  const country = countryMapper(getCountryByCCA3Response[0])

  return {
    props: {
      country
    }
  }
}
