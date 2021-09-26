import React, { useCallback } from 'react'
import { 
  Flex,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
import Table from '../../components/Table'
import { useHistory, useParams } from 'react-router-dom'
import { RESOURCE_TYPES_NAMES, useColumnNames } from './config'

const Resource = () => {
  const history = useHistory()
  const { resourceType } = useParams()
  const name = RESOURCE_TYPES_NAMES[resourceType]
  const columnNames = useColumnNames(resourceType)

  const mockData = {}
  columnNames.map(col => mockData[col.accessor] = 'test')

  const data = React.useMemo(() => [mockData], [mockData])

  const columns = React.useMemo(() => columnNames, [columnNames])

  return (
    <>
      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h2">{name}</Heading>
        <IconButton 
          onClick={() => history.push(`${resourceType}/add`)}
          aria-label={`Add ${name} member`}
          icon={<BiPlus />} 
        />
      </Flex>
      <Table data={data} columns={columns} onRowClick={id => history.push(`/${resourceType}/${id}`)} />
    </>
  )
}

export default Resource
