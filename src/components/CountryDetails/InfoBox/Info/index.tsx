import { Box, useColorModeValue, Text } from '@chakra-ui/react'

type InfoProps = {
  label: string
  value: string | string[]
}

const Info = ({ label, value }: InfoProps) => {
  return (
    <Box mb={2.5}>
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
        {Array.isArray(value)
          ? value.map((v, index) => (index + 1 === value.length ? v : `${v}, `))
          : value}
      </Text>
    </Box>
  )
}

export default Info
