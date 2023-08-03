import React from 'react'
import MainLayout from '../../../elements/layouts/Main'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import PageProfile from '../../../components/PageCards/PageCardprofile'
import Pagecards from '../../../components/PageCards'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCollectionsList, getUserNftListById } from 'store/slices/user'
import { decodeJWT } from 'hooks/idDecodeJWT'
import { useWatchingUser } from '../hooks/useWatchingUser'
import { useParams } from 'react-router-dom'

const mainStyles = {
  display: 'flex',
  justifyContent: 'space-around',
}

const UserProfilePage = () => {

  const access_auth = localStorage.getItem('access_auth')
  const dispatch = useDispatch()

  const {
    isMyProfile,
    watchingUser,
    currentUser,
    isLoadingWatchingUser,
  } = useWatchingUser()

  const { id } = useParams()

  const pageHeadlineText = decodeJWT(access_auth) === id ? 'My Profile' : 'User Profile'

  React.useEffect(() => {
    if (currentUser) {
      dispatch(getUserNftListById(currentUser.id))
      dispatch(getUserCollectionsList(currentUser.id))
    }
  }, [currentUser, getUserNftListById, getUserCollectionsList])

  const { collectionsData, nftDataWithFilter } = useSelector(s => s.User)


  return (
    <MainLayout PageHeadline={pageHeadlineText} textPathFirst="Home" textPathSecond="Profile">
      <Box sx={mainStyles} w={'full'} h={'full'} mb={'88'}>
        <PageProfile nftData={nftDataWithFilter} />
        <Box w={'75%'}>
          <Pagecards nftData={nftDataWithFilter} collectionData={collectionsData} />
        </Box>
      </Box>
    </MainLayout>
  )
}

export default UserProfilePage