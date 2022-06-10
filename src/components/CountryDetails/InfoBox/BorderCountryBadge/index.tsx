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
      bg={useColorModeValue('lightElements', 'darkElements')}
    >
      <Text color={useColorModeValue('lightText', 'darkText')}>{name}</Text>
    </Box>
  )
}

export default BorderCountryBadge
