import { Box, Text } from '@chakra-ui/react'

type InfoProps = {
  label: string
  value: string
}

const Info = ({ label, value }: InfoProps) => {
  return (
    <Box>
      <Text display={'inline'} fontWeight="semibold">
        {label}:{' '}
      </Text>
      <Text display={'inline'}>{value}</Text>
    </Box>
  )
}

export default Info
