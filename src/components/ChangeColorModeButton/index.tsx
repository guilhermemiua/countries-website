import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Button, Icon } from '@chakra-ui/react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const ChangeColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      onClick={toggleColorMode}
      variant="link"
      color={useColorModeValue('lightText', 'darkText')}
      leftIcon={useColorModeValue(
        <Icon as={IoMoonOutline} />,
        <Icon as={IoSunnyOutline} />
      )}
      fontSize={{
        base: 'lg',
        md: 'lg'
      }}
      fontWeight={'light'}
    >
      {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
}

export default ChangeColorModeButton
