import React from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import UserCards from '../../components/users'
import Btns from '../../components/Buttons/PrimaryBtn'
import Selection from '../../components/Buttons/selection'

const Cardstobuycoinswords = {
  color: 'var(--neutral-black, #000)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '27px',
}

const TextStyle = {
  color: 'var(--neutral-black, #000)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '44px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '66px',
}

const CollectionStats = (props) => {
  return (
    <MainLayout PageHeadline="Collection Stats" textPathFirst="Home" textPathSecond="Stats">
      <Box m={'0 50px 0 50px'}>
        <Box mb={'50px'}>
          <Text m={'70px 0 40px 0'} sx={TextStyle}>Top Collection</Text>
          <Box>
            <Flex>
              <Btns p={'20px'}>Top</Btns>
              <Btns m={'0 12px 0 12px'} p={'20px'}>Trending</Btns>
              <Btns p={'20px'}>Wishlist</Btns>
              <Btns m={'0 12px 0 700px'} p={'20px'}>1h</Btns>
              <Btns p={'20px'}>6h</Btns>
              <Btns m={'0 12px 0 12px'} p={'20px'}>24h</Btns>
              <Btns p={'20px'}>3d</Btns>
              <Btns m={'0 12px 0 12px'} p={'20px'}>7d</Btns>
              <Btns p={'20px'}>1m</Btns>
            </Flex>
          </Box>
        </Box>
        <Flex textAlign={'center'} borderTop={'2px solid #E6E8EC'} p={'40px 0 20px 0'}>
          <Text pt={'7px'} pl={'5'} pr={'37px'} color={'#65676B'} fontWeight={'500'} fontSize={'18px'} >#</Text>
          <Text pt={'7px'} sx={secondNumberStyle}>Collection</Text>
          <Box p={'0 80px 0 250px'}><Selection  name="Volume"/></Box>
          <Box><Selection  name="Change"/></Box>
          <Box p={' 0 57px 0 67px'}><Selection  name="Floor Price"/></Box>
          <Box><Selection  name="Owner"/></Box>
          <Box p={'0 50px 0 59px'}><Selection  name="Items"/></Box>
          <Text pt={'7px'} sx={secondNumberStyle} px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}>Watchlist</Text>
        </Flex>
        <UserCards number="1" price="12.23 ETH" />
        <UserCards number="2" price="12.23 ETH" />
        <UserCards number="3" price="12.23 ETH" />
        <UserCards number="4" price="12.23 ETH" />
        <UserCards number="5" price="12.23 ETH" />
        <UserCards number="6" price="12.23 ETH" />
        <UserCards number="7" price="12.23 ETH" />
        <UserCards number="8" price="12.23 ETH" />
        <UserCards number="9" price="12.23 ETH" />
      </Box>
      <Flex justifyContent={'center'} m={'60px 0 130px 0'}><Btns p={'11px 43px'}>Load More</Btns></Flex>
    </MainLayout>
  )
}

export default CollectionStats