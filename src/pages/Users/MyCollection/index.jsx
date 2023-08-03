import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import PrimaryBtn from 'components/Buttons/PrimaryBtn'
import CardCollection from 'components/Cards/CardCollection'
import MainLayout from 'elements/layouts/Main'
import { useNavigate } from 'react-router-dom'
import { decodeJWT } from 'hooks/idDecodeJWT'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCollectionsList } from 'store/slices/user'

const boxStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
}

const Buttonstyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const TextStyle = {
  color: 'var(--neutral-black, #000)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '44px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '66px',
}

const MyCollectionPage = () => {
  const access_auth = localStorage.getItem('access_auth')
  const user_id = decodeJWT(access_auth)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getUserCollectionsList({ userId: user_id }))
  }, [])
  const { collectionsData } = useSelector(s => s.User)
  const filteredCollections = collectionsData && collectionsData.filter((collection) => collection.owner === user_id)

  const navigate = useNavigate()

  const navigateToCreate = () => {
    navigate(`/create/${user_id}/createCollection`)
  }

  return (
    <MainLayout PageHeadline="My Collection" textPathFirst="Home" textPathSecond="Profile">
      <Box mb={'60px'}>
        <Flex m={'65px'} mb={'20px'} justifyContent={'space-between'} alignItems={'center'}>
          <Text sx={TextStyle}>My Collection</Text>
          <Box sx={Buttonstyle}>
            <PrimaryBtn w={'189px'} h={'55px'} zIndex="0" onClick={navigateToCreate}>Create Collection</PrimaryBtn>
          </Box>
        </Flex>
        <Box sx={boxStyles}>
          {collectionsData && filteredCollections.map((collection) => (
            <CardCollection theme="white" key={collection.id} collectionData={collection} />
          ))}
        </Box>
        <Box mt={'8'} sx={Buttonstyle}>
          <PrimaryBtn w={'189px'} h={'55px'}>Load More</PrimaryBtn>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default MyCollectionPage