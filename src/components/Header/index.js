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
  Tooltip,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react'
import { 
  BiSearch, 
  BiCog, 
  BiLogOutCircle, 
  BiUserCircle,
  BiCustomize,
  BiGridAlt,
  BiMenu,
} from 'react-icons/bi'
import { useHistory, useParams } from 'react-router-dom'
import { RESOURCE_TYPES_NAMES } from '../../pages/Resource/config'

const Header = () => {
  const history = useHistory()
  const { resourceType } = useParams()
  const searchName = !!resourceType ? RESOURCE_TYPES_NAMES[resourceType] : 'Everything'
  const [isDesktop] = useMediaQuery("(min-width: 768px)")

  const logout = () => history.push('/')

  return (
    <Flex 
      p={4} 
      borderBottom="1px solid" 
      w="100%" 
      justifyContent="space-between" 
    >
      {!isDesktop &&
        <IconButton 
          aria-label="Toggle Menu"
          icon={<BiMenu />} 
          mr={4} 
        />
      }
      <InputGroup mr={2}>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiSearch} boxSize={5} />}
        />
        <Input type="search" placeholder={`Search ${searchName}...`} />
      </InputGroup>

      <Flex alignItems="center">
        <Menu>
          <Tooltip label="School Name">
            <MenuButton
              aria-label="School Settings"
              variant="outline"
            >
                <Avatar size="sm" name="School Name" mx={3} />
            </MenuButton>
          </Tooltip>
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
          <Tooltip label="Matt Muirhead">
            <MenuButton
              aria-label="User Settings"
              variant="outline"
            >
                <Avatar size="sm" name="Matt Muirhead" />
            </MenuButton>
          </Tooltip>
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
