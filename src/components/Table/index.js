import React from 'react'
import {
  Table, 
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { useTable } from 'react-table'

const TableComponent = ({ data, columns, onRowClick }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
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
          onClick={() => onRowClick(row?.original?.id)}
          cursor={!!onRowClick && 'pointer'} 
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
  )
}

export default TableComponent
