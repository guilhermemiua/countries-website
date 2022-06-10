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

export default InfoBox
