import { Flex } from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <Flex width="100%" height="100%">
      <Sidebar />
      <Flex flexDirection="column" width="100%">
        <Header />
        <Flex>Page</Flex>
      </Flex>
    </Flex>
  )
}

export default Dashboard
