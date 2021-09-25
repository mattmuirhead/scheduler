import { 
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { BiChevronLeft } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

const StaffAdd = () => {
  const history = useHistory()

  const subjects = [
    { value: 'it', label: 'IT' },
    { value: 'history', label: 'History' },
    { value: 'business', label: 'Business' }
  ]

  const years = [
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
  ]

  return(
    <Flex p={4} flexDirection="column">
      <Flex alignItems="center" mb={6}>
        <IconButton 
          onClick={() => history.push('/staff')}
          aria-label="Back to Staff" 
          icon={<BiChevronLeft />} 
          mr={4} 
        />
        <Heading as="h2">Add Staff</Heading>
      </Flex>

      <Flex flexDirection="column">
        <FormControl mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Subjects</FormLabel>
          <Select
            isMulti
            name="subjects"
            options={subjects}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Years</FormLabel>
          <Select
            isMulti
            name="years"
            options={years}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Availability</FormLabel>
          <Input type="text" />
        </FormControl>
      </Flex>

    </Flex>
  )
}

export default StaffAdd