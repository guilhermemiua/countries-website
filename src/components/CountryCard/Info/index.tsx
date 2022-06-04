import { Box, useColorModeValue, Heading } from '@chakra-ui/react'
import Info from './Info'

const InfoBox = () => {
  return (
    <Box paddingY={10} paddingX={5}>
      <Heading
        as={'h2'}
        color={useColorModeValue('lightText', 'darkText')}
        fontWeight={'extrabold'}
        pb={2.5}
        fontSize={{
          base: 'lg',
          md: '2xl'
        }}
      >
        Germany
      </Heading>

      <Box>
        <Info label="Population" value="100000" />
        <Info label="Region" value="Europe" />
        <Info label="Capital" value="Berlin" />
      </Box>
    </Box>
  )
}

export default InfoBox
