import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>Test</div>
    </ChakraProvider>
  )
}

export default App
