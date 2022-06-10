import { Box, useColorModeValue, Text } from '@chakra-ui/react'

type BorderCountryBadgeProps = {
  name: string
}

const BorderCountryBadge = ({ name }: BorderCountryBadgeProps) => {
  return (
    <Box
      display="inline-block"
      borderWidth={'1px'}
      paddingX={10}
      paddingY={1}
      mr={2.5}
      mb={2.5}
      w={'120px'}
      bg={useColorModeValue('lightElements', 'darkElements')}
    >
      <Text
        color={useColorModeValue('lightText', 'darkText')}
        textAlign="center"
      >
        {name}
      </Text>
    </Box>
  )
}

export default BorderCountryBadge
