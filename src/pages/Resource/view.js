import { 
  Flex,
  Heading,
  IconButton,
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
      <IconButton 
        onClick={() => history.push(`/${resourceType}`)}
        aria-label={`Back to ${name}`} 
        icon={<BiChevronLeft />} 
        mr={4} 
      />
      <Heading as="h2">Matt Muirhead</Heading>
    </Flex>
  )
}

export default ResourceView