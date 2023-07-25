import React from 'react'
import { Box, Card, Switch, Text, Wrap } from '@chakra-ui/react'
import MainLayout from '../../elements/layouts/Main'
import firstimg from './first.png'
import secondimg from './second.png'



const textStylesSecond = {
  color: '#777E90',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '21px',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  '& .boldcolor': {
    color: '#1B1B1B',
  },
}

const boxStylesOne = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}
const boxStylesSecond = {
  display: 'flex',
  padding: '16px 16px 24px 16px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignitems: 'center',
  gap: '30px',
  borderRadius: '20px',
  background: 'white',
  width: '304px',
  height: '309px',
  margin: '20px',
  cursor: 'pointer',
}
const collectionImgFirst = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '272px',
  height: '218px',
  borderRadius: '20px',
}


const TestPage = () => {
  return (
    <MainLayout PageHeadline="Create Item" textPathFirst="Home" textPathSecond="Create" w={'full'} h={'full'}>
      <Wrap  color={'#DEDEDE'} mt={'50px'} justify="center" spacing={4}>
        <Box sx={textStylesSecond}>
          Choose  <span className="boldcolor">“Single”</span> if you want your collectible to be one of a kind or <span className="boldcolor">“Multiple”</span> if you want to sell <br /> one collectible multiple times
        </Box>
        <Box sx={boxStylesOne} mt={'50px'} mb={'40px'}>
          <Box sx={boxStylesSecond}>
            <Box sx={collectionImgFirst}><img src={firstimg} /></Box>
            <Text textAlign={'center'} fontFamily={'Plus Jakarta Sans'} color={'#777E90'} fontSize={'14px'}>Single NFT</Text>
          </Box>
          <Box sx={boxStylesSecond}>
            <Box sx={collectionImgFirst}><img src={secondimg} /></Box>
            <Text textAlign={'center'} fontFamily={'Plus Jakarta Sans'} color={'#777E90'} fontSize={'14px'}>Multiple NFT</Text>
          </Box>
        </Box>
        <Box sx={textStylesSecond}>
          We do not own your private keys and cannot access your funds without your confirmation.
        </Box>

      </Wrap>
    </MainLayout>
  )
}

export default TestPage