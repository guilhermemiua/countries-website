import { Box, useColorModeValue, Heading } from '@chakra-ui/react'
import { Country } from '../../../types/Country'
import Info from './Info'

type InfoProps = {
  country: Country
}

const InfoBox = ({ country }: InfoProps) => {
  return (
    <Box paddingY={10} paddingX={5}>
      <Heading
        as={'h2'}
        color={useColorModeValue('lightText', 'darkText')}
        fontWeight={'extrabold'}
        pb={2.5}
        fontSize={{
          base: 'lg',
          md: 'lg'
        }}
      >
        {country.name}
      </Heading>

      <Box>
        <Info label="Population" value={`${country.population}`} />
        <Info label="Region" value={country.region} />
        <Info label="Capital" value={country.capital} />
      </Box>
    </Box>
  )
}

export default InfoBox
