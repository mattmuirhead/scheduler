import React from 'react'
import { 
  Flex,
  Heading,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'
import { BiPlus, BiImport } from 'react-icons/bi'
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
        <Flex>
          <Tooltip label={`Import ${name}`}>
            <IconButton 
              aria-label={`Import ${name}`}
              icon={<BiImport />} 
              mr={2}
            />
          </Tooltip>
          <Tooltip label={`Add ${name} member`}>
            <IconButton 
              onClick={() => history.push(`${resourceType}/add`)}
              aria-label={`Add ${name} member`}
              icon={<BiPlus />} 
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Table data={data} columns={columns} onRowClick={id => history.push(`/${resourceType}/${id}`)} />
    </>
  )
}

export default Resource
