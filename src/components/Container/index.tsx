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
    <Box maxW={'90%'} margin={margin}>
      {children}
    </Box>
  )
}

export default Container
