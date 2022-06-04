import { Box, useColorModeValue, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import InfoBox from './Info'

const CountryCard = () => {
  return (
    <Box
      bg={useColorModeValue('lightElements', 'darkElements')}
      borderRadius={'lg'}
      borderWidth={'1px'}
      borderStyle="solid"
      borderColor={useColorModeValue('lightElements', 'darkElements')}
      width={'max-content'}
      overflow="hidden"
    >
      <Flex direction={'column'}>
        <Image
          src="https://flagcdn.com/w320/bv.png"
          alt="Germany"
          width={320}
          height={233}
          layout="fixed"
        />
        <InfoBox />
      </Flex>
    </Box>
  )
}

export default CountryCard
