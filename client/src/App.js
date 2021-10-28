import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme'

import Routes from './Routes'

import { Provider } from 'react-redux'
import store from './state/store'

const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </Provider>
)

export default App
