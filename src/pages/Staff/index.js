import { 
  Flex,
  Heading,
  IconButton,
  Table, 
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { 
  BiPlus, 
} from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const Staff = () => {
  const history = useHistory()

  return (
    <>
      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h2">Staff</Heading>
        <IconButton aria-label="Search database" icon={<BiPlus />} />
      </Flex>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Subjects</Th>
            <Th>Years</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr onClick={() => history.push('/staff/staffId')} cursor="pointer">
            <Td>Matt Muirhead</Td>
            <Td>IT, History</Td>
            <Td>7, 8, 9</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}

export default Staff
