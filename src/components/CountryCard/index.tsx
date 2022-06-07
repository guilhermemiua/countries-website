import { Box, useColorModeValue, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Country } from '../../types/Country'
import InfoBox from './Info'

type CountryCardProps = {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Box
      bg={useColorModeValue('lightElements', 'darkElements')}
      borderRadius={'lg'}
      borderWidth={'1px'}
      borderStyle="solid"
      borderColor={useColorModeValue('lightElements', 'darkElements')}
      width={{ base: 320, md: 358.4 }}
      overflow="hidden"
      mb={10}
    >
      <Flex direction={'column'}>
        <Image
          src={country.flag}
          alt={country.name}
          width={358.4}
          height={260.96}
          layout="responsive"
        />
        <InfoBox country={country} />
      </Flex>
    </Box>
  )
}

export default CountryCard
