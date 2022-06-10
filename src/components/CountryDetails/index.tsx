import { Country } from '../../types/Country'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import InfoBox from './InfoBox'

type CountryDetailsProps = {
  country: Country
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  return (
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
  )
}

export default CountryDetails
