import { Box, useColorModeValue, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Country } from '../../types/Country'
import InfoBox from './InfoBox'

type CountryCardProps = {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  const router = useRouter()

  const handleCardOnClick = (cca3: string): void => {
    router.push(`/country/${cca3}`)
  }

  return (
    <Box
      bg={useColorModeValue('lightElements', 'darkElements')}
      borderRadius={'lg'}
      borderWidth={'1px'}
      borderStyle="solid"
      borderColor={useColorModeValue('lightElements', 'darkElements')}
      width={{ base: 320, lg: 358.4 }}
      overflow="hidden"
      mb={10}
      onClick={() => handleCardOnClick(country.cca3)}
      cursor="pointer"
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
