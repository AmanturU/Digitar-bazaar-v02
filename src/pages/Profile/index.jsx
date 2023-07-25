import React from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import PageProfile from '../../components/PageCards/PageCardprofile'
import Pagecards from '../../components/PageCards'

const mainStyles = {
  display: 'flex',
  justifyContent: 'space-around',
}


const Profile = () => {
  return (
    <MainLayout PageHeadline="My Profile" textPathFirst="Home" textPathSecond="Profile">
      <Box sx={mainStyles} w={'full'} h={'full'} mb={'88'}>
        <PageProfile />
        <Box w={'75%'}>
          <Pagecards />
        </Box>
      </Box>
    </MainLayout>
  )
}

export default Profile