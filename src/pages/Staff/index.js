import React from 'react'
import { 
  Flex,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { 
  BiPlus, 
} from 'react-icons/bi'
import Table from '../../components/Table'
import { useHistory } from 'react-router-dom'

const Staff = () => {
  const history = useHistory()

  const data = React.useMemo(
    () => [
      {
        id: 'test',
        name: 'Matt Muirhead',
        subjects: 'IT, History',
        years: '7, 8, 9',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Subjects',
        accessor: 'subjects',
      },
      {
        Header: 'Years',
        accessor: 'years',
      },
    ],
    []
  )

  return (
    <>
      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h2">Staff</Heading>
        <IconButton aria-label="Search database" icon={<BiPlus />} />
      </Flex>
      <Table data={data} columns={columns} onRowClick={id => history.push(`/staff/${id}`)} />
    </>
  )
}

export default Staff
