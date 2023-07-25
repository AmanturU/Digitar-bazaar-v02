import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const CopyStyles = {
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '16px',
  color: '#65676B',
}

const leftStyles = {
  position: 'relative',
  bottom: '50px',
}

const stylesfolowers = {
  padding: '20px 15px 20px 0',
  borderTop: '1px solid #E6E8EC',
  borderBottom: '1px solid #E6E8EC',
  display: 'flex',
  justifyContent: 'space-around',
  alignItem: 'center',
}


const Profile = () => {
  return (
    <Box w={'25%'} sx={leftStyles}>
      <Box pl={'60px'}>
        <Avatar name="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zlyMSV4wcE-O6_YQjLyo2uyeIEbnpKJWTw&usqp=CAU" w={'108px'} h={'108px'}/>
        <Text fontWeight={'medium'} fontSize={'24px'} pt={'5'}>John Doe</Text>
        <Text sx={CopyStyles}>124124124 <CopyIcon ml={'10px'} /></Text>
        <Text sx={CopyStyles} fontSize={'14px'} pt={'5'}>A collection of beautiful NFTs where you could find a world of arts.</Text>
        <Flex sx={stylesfolowers} mt={'20px'}>
          <Box>
            <Text fontWeight={'medium'} fontSize={'24px'} >96</Text>
            <Text>Followers</Text>
          </Box>
          <Box>
            <Text fontWeight={'medium'} fontSize={'24px'} >247</Text>
            <Text>Following</Text>
          </Box>
          <Box>
            <Text fontWeight={'medium'} fontSize={'24px'} >1,542</Text>
            <Text>Items</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Profile