import { Country } from '../../../types/Country'
import { Box, Flex, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import Info from './Info'
import BorderCountryBadge from './BorderCountryBadge'

type InfoBoxProps = {
  country: Country
}

const InfoBox = ({ country }: InfoBoxProps) => {
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
          <Info label="Native Name" value={country.nativeName} />
          <Info label="Population" value={`${country.population}`} />
          <Info label="Region" value={country.region} />
          <Info label="Sub Region" value={country.subregion} />
          <Info label="Capital" value={country.capital} />
        </Flex>
        <Flex direction={'column'} mt={{ base: 5, lg: 0 }}>
          <Info label="Top Level Domain" value={country.topLevelDomains} />
          <Info label="Currencies" value={country.currencies} />
          <Info label="Languages" value={country.languages} />
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

        <Flex
          display={'inline-flex'}
          flexWrap="wrap"
          justifyContent={'space-between'}
        >
          {country.borders.map((border) => (
            <BorderCountryBadge key={border} name={border} />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default InfoBox
