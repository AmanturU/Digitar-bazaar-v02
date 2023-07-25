import React from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import Cardsone from '../../components/Cards/CardNFT_timeOff'
import Cardsthree from '../../components/Cards/CardNFT_timeOn'
import Cardstwo from '../../components/Cards/CardCollection'
import Button from '../../components/Buttons/PrimaryBtn'

const boxStyles = {
  gridTemplateColumns: 'repeat(4, 12fr)',
  display: 'grid',
  gap: '20px',
  marginLeft: '10px',
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

const myCollection = () => {
  return (
    <MainLayout PageHeadline="My Collection" textPathFirst="Home" textPathSecond="Profile">
      <Flex m={'65px 35px 25px 45px'} justifyContent={'space-between'} alignItems={'center'}>
        <Text sx={TextStyle}>My Collection</Text>
        <Box sx={Buttonstyle}>
          <Button w={'189px'} h={'55px'}>Create Collection</Button>
        </Box>
      </Flex>
      <Box>
        <Box sx={boxStyles}>
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
          <Cardstwo />
        </Box>
        <Box mt={'8'} sx={Buttonstyle}>
          <Button w={'189px'} h={'55px'}>Load More</Button>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default myCollection