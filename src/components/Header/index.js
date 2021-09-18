import { 
  Avatar,
  Flex, 
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import { SearchIcon, SettingsIcon } from '@chakra-ui/icons'

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
        <SettingsIcon w={7} h={7} mr={4} />
        <Avatar size="sm" name="Matt Muirhead" />
      </Flex>
    </Flex>
  )
}

export default Header
