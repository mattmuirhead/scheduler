import { 
  Flex,
  Heading,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'
import { BiChevronLeft } from 'react-icons/bi'
import { useHistory, useParams } from 'react-router-dom'
import { RESOURCE_TYPES_NAME } from './config'

const ResourceView = () => {
  const history = useHistory()
  const { resourceType } = useParams()
  const name = RESOURCE_TYPES_NAME[resourceType]

  return(
    <Flex p={4} alignItems="center">
      <Tooltip label={`Back to ${name}`}>
        <IconButton 
          onClick={() => history.push(`/${resourceType}`)}
          aria-label={`Back to ${name}`} 
          icon={<BiChevronLeft />} 
          mr={4} 
        />
      </Tooltip>
      <Heading as="h2">Matt Muirhead</Heading>
      Add view and schedule buttons - schedule should show the schedule for that resource
    </Flex>
  )
}

export default ResourceView