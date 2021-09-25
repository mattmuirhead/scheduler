import { 
  Flex,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { BiChevronLeft } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const StaffAdd = () => {
  const history = useHistory()

  return(
    <Flex p={4} alignItems="center">
      <IconButton 
        onClick={() => history.push('/staff')}
        aria-label="Back to Staff" 
        icon={<BiChevronLeft />} 
        mr={4} 
      />
      <Heading as="h2">Add Staff</Heading>
    </Flex>
  )
}

export default StaffAdd