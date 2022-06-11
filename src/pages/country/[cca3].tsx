import { Box, Button, Icon, useColorModeValue } from '@chakra-ui/react'
import { GetStaticPropsContext, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Container from '../../components/Container'
import CountryDetails from '../../components/CountryDetails'
import { getCountries, getCountryByCCA3 } from '../../services/countries'
import { Country } from '../../types/Country'
import countryMapper from '../../util/mappers/countryMapper'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'

type ViewCountryDetailsByCCA3Props = {
  country: Country
}

const ViewCountryDetailsByCCA3: NextPage<ViewCountryDetailsByCCA3Props> = ({
  country
}) => {
  const router = useRouter()

  const handleBackButton = (): void => {
    router.push('/')
  }

  return (
    <Box my={10}>
      <Container margin="0 auto">
        <Button
          colorScheme={useColorModeValue('whiteAlpha', 'blackAlpha')}
          leftIcon={<Icon as={IoArrowBackOutline} />}
          mb={10}
          color={useColorModeValue('lightText', 'darkText')}
          fontWeight={'light'}
          borderRadius={0}
          bg={useColorModeValue('lightElements', 'darkElements')}
          px={10}
          onClick={handleBackButton}
        >
          Back
        </Button>

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
