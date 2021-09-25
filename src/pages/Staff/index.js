import React from 'react'
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
import { useTable } from 'react-table'

const Staff = () => {
  const history = useHistory()

  const data = React.useMemo(
    () => [
      {
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <>
      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h2">Staff</Heading>
        <IconButton aria-label="Search database" icon={<BiPlus />} />
      </Flex>
      <Table variant="striped" {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
          <Tr 
            onClick={() => history.push('/staff/staffId')} 
            cursor="pointer"
            {...row.getRowProps()}
          >
            {row.cells.map(cell => (
              <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
            ))}
          </Tr>
          )
        })}
        </Tbody>
      </Table>
    </>
  )
}

export default Staff
