import { useState, useEffect } from 'react'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
} from '@chakra-ui/react'
import { useHistory }  from 'react-router-dom'
import { auth, db } from '../../firebase'

const SignUp = () => {
  const history = useHistory()
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (!!confirmPassword && password !== confirmPassword) {
      setError('The passwords entered do not match')
    } else {
      setError(null)
    }
  }, [password, confirmPassword])

  const signUpDisabled = !!error || (!email || !password || !confirmPassword)

  const signUp = async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      const user = res.user
      await db.collection("users").add({
        uid: user.uid,
        authProvider: 'local',
        email,
      })
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          return setError('The email address entered is not a valid email.')
        case 'auth/weak-password':
          return setError('Please choose a stronger password.')
        case 'auth/email-already-in-use':
          return setError('This email is already in use by another account.')
        default:
          return setError('Sorry, something went wrong. Please try again.')
      }
    }
  };
  
  return (
    <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
      <Flex maxWidth="400px" w="100%" flexDirection="column" p={4}>
        <Heading mb={4}>Sign up</Heading>
        {!!error &&
          <Alert status="error" mb={4} pr={6}>
            <AlertIcon />
            <AlertDescription mr={2}>{error}</AlertDescription>
            <CloseButton position="absolute" right={2} top={2} onClick={() => setError(null)} />
          </Alert>
        }

        <Flex flexDirection="column">
            <FormControl id="email" mb={2}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={event => setEmail(event.target.value)} />
            </FormControl>

            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={event => setPassword(event.target.value)} />
            </FormControl>

            <FormControl id="confirmPassword" mb={4}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" onChange={event => setConfirmPassword(event.target.value)} />
            </FormControl>

            <Button onClick={signUp} mb={2} disabled={signUpDisabled}>Sign up</Button>

            <Text>Already have an account? <Link onClick={() => history.push('/')}>Sign in!</Link></Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SignUp
