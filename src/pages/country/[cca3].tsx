import { Box, Flex, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import { GetStaticPropsContext, NextPage } from 'next'
import Image from 'next/image'
import Container from '../../components/Container'
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
    name: country?.name?.common,
    flag: country?.flags?.svg,
    population: country?.population,
    capital: country?.capital?.[0] ?? '',
    region: country?.region,
    cca3: country?.cca3
  }

  return countryMapped
}

type InfoProps = {
  label: string
  value: string
}

const Info = ({ label, value }: InfoProps) => {
  return (
    <Box>
      <Text
        display={'inline'}
        fontWeight="semibold"
        color={useColorModeValue('lightText', 'darkText')}
      >
        {label}:{' '}
      </Text>
      <Text
        display={'inline'}
        color={useColorModeValue('lightText', 'darkText')}
      >
        {value}
      </Text>
    </Box>
  )
}

const BorderCountryBadge = ({ name }: { name: string }) => {
  return (
    <Box
      display="inline-block"
      borderWidth={'1px'}
      paddingX={10}
      paddingY={1}
      bg={useColorModeValue('lightElements', 'darkElements')}
    >
      <Text color={useColorModeValue('lightText', 'darkText')}>{name}</Text>
    </Box>
  )
}

const InfoBox = ({ country }: { country: Country }) => {
  return (
    <Flex
      flex={'1'}
      direction="column"
      justifyContent="space-between"
      ml={{ base: 0, lg: 20 }}
      mt={{ base: 10, lg: 0 }}
    >
      <Heading
        as={'h1'}
        color={useColorModeValue('lightText', 'darkText')}
        fontWeight={'extrabold'}
        pb={2.5}
        fontSize={{
          base: 'xl',
          md: '3xl'
        }}
      >
        {country.name}
      </Heading>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        my={{ base: 5, lg: 10 }}
      >
        <Flex direction={'column'}>
          <Info label="Native Name" value="Ecuador" />
          <Info label="Population" value="Ecuador" />
          <Info label="Region" value="Ecuador" />
          <Info label="Sub Region" value="Ecuador" />
          <Info label="Capital" value="Ecuador" />
        </Flex>
        <Flex direction={'column'} mt={{ base: 5, lg: 0 }}>
          <Info label="Top Level Domain" value="Ecuador" />
          <Info label="Currencies" value="Ecuador" />
          <Info label="Languages" value="Ecuador" />
        </Flex>
      </Flex>

      <Box>
        <Text
          display={{ base: 'block', lg: 'inline-block' }}
          fontWeight="semibold"
          mb={{ base: 2.5, lg: 0 }}
          mr={{ base: 0, lg: 2.5 }}
          color={useColorModeValue('lightText', 'darkText')}
        >
          Border Countries:
        </Text>

        <BorderCountryBadge name="France" />
      </Box>
    </Flex>
  )
}

const ViewCountryDetailsByCCA3: NextPage<ViewCountryDetailsByCCA3Props> = ({
  country
}) => {
  return (
    <Box my={10}>
      <Container margin="0 auto">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'stretch', lg: 'center' }}
        >
          <Box flex={'1'} mr={{ base: 0, lg: 20 }}>
            <Image
              src={country.flag}
              alt={country.name}
              width={358.4}
              height={260.96}
              layout="responsive"
            />
          </Box>
          <InfoBox country={country} />
        </Flex>
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
