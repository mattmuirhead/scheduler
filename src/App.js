import { ChakraProvider, Flex } from "@chakra-ui/react"
import theme from './theme'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { Provider } from 'react-redux'
import store from './state/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Resource from './pages/Resource'
import ResourceView from './pages/Resource/view'
import ResourceAdd from './pages/Resource/add'


const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Flex width="100%" height="100%">
          <Sidebar />
          <Flex flexDirection="column" width="100%">
            <Header />
            <Component {...routeProps} />
          </Flex>
        </Flex>
      )}
    />
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Layout path="/dashboard" component={Dashboard} />
            <Layout path="/:resourceType(staff|pupils|rooms|groups|classes)/add" component={ResourceAdd} />
            <Layout path="/:resourceType(staff|pupils|rooms|groups|classes)/:id" component={ResourceView} />
            <Layout path="/:resourceType(staff|pupils|rooms|groups|classes)" component={Resource} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  )
}

export default App
