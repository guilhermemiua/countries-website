import { useColorMode } from '@chakra-ui/react'

const ChangeColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}

export default ChangeColorModeButton
