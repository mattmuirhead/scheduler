import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  CloseButton,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaGoogle } from "react-icons/fa"
import { useHistory }  from 'react-router-dom'
import { auth, db, googleProvider } from '../../firebase'

const SignIn = () => {
  const history = useHistory()
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const [isDesktop] = useMediaQuery("(min-width: 768px)")

  const signInDisabled = !email || !password

  const onSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      history.push('/dashboard')
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          return setError('The email address entered is not a valid email.')
        case 'auth/argument-error':
          return setError('Please fill in all the required fields.')
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          return setError('The email address or password is incorrect.')
        default:
          return setError('Sorry, something went wrong. Please try again.')
      }
    }
  }

  const onGoogleSignIn = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider)
      const user = res.user
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
        })
      }
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.')
    }
  }
  
  return (
    <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
      <Flex maxWidth="600px" w="100%" flexDirection="column" p={4}>
        <Heading mb={4}>Welcome</Heading>
        {!!error &&
          <Alert status="error" mb={4} pr={6}>
            <AlertIcon />
            <AlertDescription mr={2}>{error}</AlertDescription>
            <CloseButton position="absolute" right={2} top={2} onClick={() => setError(null)} />
          </Alert>
        }

        <Flex flexDirection={!isDesktop && 'column'}>
          <Flex flexDirection="column" width={isDesktop && '50%'}>
            <FormControl id="email" mb={2}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={event => setEmail(event.target.value)} />
            </FormControl>

            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={event => setPassword(event.target.value)} />
            </FormControl>

            <Button onClick={onSignIn} mb={2} disabled={signInDisabled}>Sign in</Button>

            <Text mb={4}>Don't have an account? <Link onClick={() => history.push('/sign-up')}>Sign up!</Link></Text>
          </Flex>

          {isDesktop && <Divider height="auto" orientation={"vertical"} mx={4} />}

          <Flex flexDirection="column" width={isDesktop && '50%'}>
            <FormLabel>Or sign in with:</FormLabel>
            <Button leftIcon={<FaGoogle />} onClick={onGoogleSignIn} mb={4}>Google</Button>
            More social sign ins coming soon ...
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SignIn
