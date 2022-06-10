import { Box, useColorModeValue, Text } from '@chakra-ui/react'

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

export default Info
