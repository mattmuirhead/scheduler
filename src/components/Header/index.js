import { 
  Avatar,
  Flex, 
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
  SearchIcon, 
  SettingsIcon,
  ExternalLinkIcon,
  AddIcon,
} from '@chakra-ui/icons'

const Header = () => {
  return (
    <Flex 
      p={4} 
      borderBottom="1px solid" 
      w="100%" 
      justifyContent="space-between" 
    >
      <InputGroup maxWidth="300px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon />}
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
            <MenuItem icon={<SettingsIcon />}>
              School Name Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<ExternalLinkIcon />}>
              Switch School
            </MenuItem>
            <MenuItem icon={<AddIcon />}>
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
            <MenuItem icon={<SettingsIcon />}>
              User Settings
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Header
