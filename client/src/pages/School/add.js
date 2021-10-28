import { 
  Flex, 
  Heading,
  Tooltip, 
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { BiChevronLeft } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const SchoolAdd = () => {
  const history = useHistory()

  return (
    <Flex flexDirection="column" p={4} width="100%">
      {/* Only render if not first time */}
      <Flex alignItems="center" mb={6}>
        <Tooltip label="Back">
          <IconButton 
            onClick={() => history.push('/dashboard')}
            aria-label="Back"
            icon={<BiChevronLeft />} 
            mr={4} 
          />
        </Tooltip>
        <Heading as="h2">Add School</Heading>
      </Flex>
      <Flex width="100%" maxWidth="750px" mx="auto">
        <Tabs width="100%" isFitted variant="enclosed">
          <TabList>
            <Tab>Basic Information</Tab>
            <Tab>Setup</Tab>
            <Tab>Confirmation</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  )
}

export default SchoolAdd
