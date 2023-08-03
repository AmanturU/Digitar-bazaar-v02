import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom'
import { useWatchingUser } from 'pages/Users/hooks/useWatchingUser'

const leftStyles = {
  position: 'relative',
  bottom: '70px',
}

const stylesfolowers = {
  padding: '20px 15px 20px 0',
  borderTop: '1px solid #E6E8EC',
  borderBottom: '1px solid #E6E8EC',
  display: 'flex',
  justifyContent: 'space-around',
  alignItem: 'center',
}

const headerText = {
  color: '#000',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '27px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '36px',
}

const grayIdText = {
  color: '#65676B',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '19px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
}

const grayDescText = {
  color: '#65676B',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '17px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '21px',
}

const numberText = {
  textAlign: 'center',
  color: '#000',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '19px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '24px',
}


const Profile = (props) => {
  const { nftData, ...restProps } = props

  const {
    isMyProfile,
    watchingUser,
    currentUser,
    isLoadingWatchingUser,
  } = useWatchingUser()

  // currentUser ? currentUser. : 'Undefined',
  const profileData = {
    avatar: currentUser ? currentUser.avatar : 'http://127.0.0.1:8000/media/default_images/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg',
    display_name: currentUser ? currentUser.display_name : 'Display name undefined',
    username: currentUser ? currentUser.username : 'Username undefined',
    description: currentUser ? currentUser.description : 'Description undefined',
    userItems: nftData ? nftData.length : '999',
    followers: '999',
    following: '999',
    items: nftData ? nftData.length : '999',
  }

  return (
    <Box w={'25%'} sx={leftStyles}>
      <Box px={'80px'}>
        <Avatar name={profileData.display_name} src={profileData.avatar} w={'128px'} h={'128px'} />
        <Text sx={headerText} pt={'5'}>{profileData.display_name}</Text>
        <Text sx={grayIdText}>@{profileData.username}<CopyIcon ml={'7px'} /></Text>
        <Text sx={grayDescText} pt={'5'}>{profileData.description}</Text>
        <Flex sx={stylesfolowers} mt={'20px'}>
          <Box sx={numberText} >
            <Text pb={'2.5'}>{profileData.followers}</Text>
            <Text sx={grayDescText}>Followers</Text>
          </Box>
          <Box sx={numberText}>
            <Text pb={'2.5'}>{profileData.following}</Text>
            <Text sx={grayDescText}>Following</Text>
          </Box>
          <Box sx={numberText}>
            <Text pb={'2.5'}>{profileData.userItems}</Text>
            <Text sx={grayDescText}>Items</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Profile