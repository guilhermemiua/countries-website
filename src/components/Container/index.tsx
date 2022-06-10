import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

const Container = ({
  children,
  margin
}: {
  children: ReactNode
  margin?: string
}) => {
  return (
    <Box maxW={{ base: '90%', md: '80%', lg: '80%' }} margin={margin}>
      {children}
    </Box>
  )
}

export default Container
