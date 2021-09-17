import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react"
import { useHistory }  from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const onLogin = () => {
    history.push('/dashboard')
  }

  return (
    <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
      <Flex maxWidth="350px" w="100%" p={4} flexDirection="column">
        <Heading mb={4}>Welcome</Heading>

        <FormControl id="email" mb={2}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>

        <Button onClick={onLogin}>Login</Button>
      </Flex>
    </Flex>
  )
}

export default Login
