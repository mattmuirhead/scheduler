import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
