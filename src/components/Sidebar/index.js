import { Button, Flex, Icon, Heading } from '@chakra-ui/react'
import { 
  BiAtom,
  BiDoorOpen,
  BiGroup,
  BiHome, 
  BiUser,
} from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const isLocation = page => location.pathname.includes(page) ? 'solid' : 'ghost'

  return (
    <Flex 
      flexDirection="column" 
      borderRight="1px solid" 
      p={4}
      minWidth="250px"
    >
      <Heading mb={6}>Logo Here</Heading>
      <Button 
        leftIcon={<Icon as={BiHome} boxSize={5} />} 
        variant={isLocation('dashboard')}
        justifyContent="flex-start"
        mb={1}
      >
        Dashboard
      </Button>
      <Button 
        leftIcon={<Icon as={BiUser} boxSize={5} />} 
        variant={isLocation('staff')}
        justifyContent="flex-start"
        mb={1}
      >
        Staff
      </Button>
      <Button 
        leftIcon={<Icon as={BiGroup} boxSize={5} />} 
        variant={isLocation('pupils')}
        justifyContent="flex-start"
        mb={1}
      >
        Pupils
      </Button>
      <Button 
        leftIcon={<Icon as={BiDoorOpen} boxSize={5} />} 
        variant={isLocation('rooms')}
        justifyContent="flex-start"
        mb={1}
      >
        Rooms
      </Button>
      <Button 
        leftIcon={<Icon as={BiGroup} boxSize={5} />} 
        variant={isLocation('groups')}
        justifyContent="flex-start"
        mb={1}
      >
        Groups
      </Button>
      <Button 
        leftIcon={<Icon as={BiAtom} boxSize={5} />} 
        variant={isLocation('classes')}
        justifyContent="flex-start"
        mb={1}
      >
        Classes
      </Button>
    </Flex>
  )
}

export default Sidebar
