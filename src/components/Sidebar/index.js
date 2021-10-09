import { Button, Flex, Icon, IconButton, Heading, useMediaQuery } from '@chakra-ui/react'
import { 
  BiAtom,
  BiDoorOpen,
  BiGroup,
  BiHome, 
  BiUser,
  BiX
} from 'react-icons/bi'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsMenuOpen, toggleMenuOpen } from '../../state/ui'

const Sidebar = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const [isDesktop] = useMediaQuery("(min-width: 768px)")
  const isLocation = page => location.pathname.includes(page) ? 'solid' : 'ghost'

  const isMenuOpen = useSelector(selectIsMenuOpen)
  const toggleMenu = () => dispatch(toggleMenuOpen())

  return (
    <Flex 
      flexDirection="column" 
      borderRight={isDesktop && '1px solid'}
      position={!isDesktop && 'fixed'}
      width={!isDesktop && '100%'}
      height={!isDesktop && '100%'}
      transform={!isMenuOpen && !isDesktop && "translateY(-100%)"}
      minWidth="250px"
      background="white"
      zIndex={3}
      p={4}
    >
      <Flex width="100%" justifyContent="space-between">
        <Heading mb={6}>Logo Here</Heading>
        {!isDesktop &&
          <IconButton 
            aria-label="Toggle Menu"
            icon={<BiX />} 
            onClick={toggleMenu}
          />
        }
      </Flex>
      <Button 
        onClick={() => history.push('/dashboard')}
        leftIcon={<Icon as={BiHome} boxSize={5} />} 
        variant={isLocation('dashboard')}
        justifyContent="flex-start"
        mb={1}
      >
        Dashboard
      </Button>
      <Button 
        onClick={() => history.push('/staff')}
        leftIcon={<Icon as={BiUser} boxSize={5} />} 
        variant={isLocation('staff')}
        justifyContent="flex-start"
        mb={1}
      >
        Staff
      </Button>
      <Button 
        onClick={() => history.push('/pupils')}
        leftIcon={<Icon as={BiGroup} boxSize={5} />} 
        variant={isLocation('pupils')}
        justifyContent="flex-start"
        mb={1}
      >
        Pupils
      </Button>
      <Button 
        onClick={() => history.push('/rooms')}
        leftIcon={<Icon as={BiDoorOpen} boxSize={5} />} 
        variant={isLocation('rooms')}
        justifyContent="flex-start"
        mb={1}
      >
        Rooms
      </Button>
      <Button 
        onClick={() => history.push('/groups')}
        leftIcon={<Icon as={BiGroup} boxSize={5} />} 
        variant={isLocation('groups')}
        justifyContent="flex-start"
        mb={1}
      >
        Groups
      </Button>
      <Button 
        onClick={() => history.push('/classes')}
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
