import { ChakraProvider, Flex } from "@chakra-ui/react"
import theme from './theme'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Staff from './pages/Staff'
import StaffView from './pages/Staff/view'
import StaffAdd from './pages/Staff/add'
import Pupils from './pages/Pupils'
import Rooms from './pages/Rooms'
import Groups from './pages/Groups'
import Classes from './pages/Classes'


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
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Layout path="/dashboard" component={Dashboard} />
          <Layout path="/staff/add" component={StaffAdd} />
          <Layout path="/staff/:id" component={StaffView} />
          <Layout path="/staff" component={Staff} />
          <Layout path="/pupils" component={Pupils} />
          <Layout path="/rooms" component={Rooms} />
          <Layout path="/groups" component={Groups} />
          <Layout path="/classes" component={Classes} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
