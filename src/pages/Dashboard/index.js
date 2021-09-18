import { Flex } from '@chakra-ui/react'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <Flex width="100%" height="100%">
      <Flex borderRight="1px solid" >Sidebar</Flex>
      <Flex flexDirection="column" width="100%">
        <Header />
        <Flex>Page</Flex>
      </Flex>
    </Flex>
  )
}

export default Dashboard
