import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setSession, clearSession } from './state/session'

import { Flex } from "@chakra-ui/react"

import Header from './components/Header'
import Sidebar from './components/Sidebar'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Resource from './pages/Resource'
import ResourceView from './pages/Resource/view'
import ResourceAdd from './pages/Resource/add'
import Settings from './pages/Settings'
import SchoolAdd from './pages/School/add'

// Firebase
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


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

const Routes = () => {
  const [user, isLoading] = useAuthState(auth)
  const dispatch = useDispatch()

  useEffect(() => {
    !!user && dispatch(setSession({
      name: user?.displayName,
      email: user?.email,
      token: user?.refreshToken,
      avatar: user?.photoURL,
      lastSignIn: user?.metadata?.lastSignInTime,
    }))
    !user && dispatch(clearSession())
  }, [dispatch, user])

  console.log(user)

  if (isLoading) return 'loading'

  return (
    <Router>
      <Switch>
        {!!user ?
          <>
            <Layout path="/:resourceType(staff|pupils|rooms|groups|classes)/add" component={ResourceAdd} />
            <Layout path="/:resourceType(staff|pupils|rooms|groups|classes)/:id" component={ResourceView} />
            <Layout path="/:resourceType(staff|pupils|rooms|groups|classes)" component={Resource} />
            <Route path="/school/add" component={SchoolAdd} />
            <Layout path="/:settingsType(school|user)" component={Settings} />
            <Layout path="/" component={Dashboard} />
          </>
          :
          <Route path="/" component={Login} />
        }
      </Switch>
    </Router>
  )
}

export default Routes