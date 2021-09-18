import { 
  Avatar,
  Flex, 
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { 
  BiSearch, 
  BiCog, 
  BiLogOutCircle, 
  BiUserCircle,
  BiCustomize,
  BiGridAlt,
} from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const logout = () => history.push('/')

  return (
    <Flex 
      p={4} 
      borderBottom="1px solid" 
      w="100%" 
      justifyContent="space-between" 
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiSearch} boxSize={5} />}
        />
        <Input type="search" placeholder="Search ..." />
      </InputGroup>

      <Flex alignItems="center">
        <Menu>
          <MenuButton
            aria-label="School Settings"
            variant="outline"
          >
            <Avatar size="sm" name="School Name" mx={3} />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<Icon as={BiCog} boxSize={5} />}>
              School Name Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<Icon as={BiGridAlt} boxSize={5} />}>
              Switch School
            </MenuItem>
            <MenuItem icon={<Icon as={BiCustomize} boxSize={5} />}>
              New School
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            aria-label="User Settings"
            variant="outline"
          >
            <Avatar size="sm" name="Matt Muirhead" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<Icon as={BiUserCircle} boxSize={5} />}>
              User Settings
            </MenuItem>
            <MenuItem 
              onClick={logout}
              icon={<Icon as={BiLogOutCircle} boxSize={5} />}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Header
