import React from 'react'
import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const CardNftTimeOff = () => {

  const nftCardStyles = {
    basicBoxStyles: {
      width: '310px',
      height: '400px',
      background: 'url(https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png) center/cover no-repeat',
      color: 'white',
      flexShrink: 0,
    },
    headerText: {
      width: '100%',
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '30px',
    },
    grayTextStyles: {
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      opacity: '0.6000000238418579',
    },
    authorTextStyles: {
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    priceTextStyles: {
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal',
    },
  }

  // const basicBoxStyles = {
  //   width: '310px',
  //   height: '400px',
  //   background: 'url(https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png) center/cover no-repeat',
  //   color: 'white',
  //   flexShrink: 0,
  // },


  return (
    <Box sx={nftCardStyles.basicBoxStyles} borderRadius={'2xl'} maxW={'md'} >
      <Flex flexDirection="column" justifyContent="flex-end" h="100%">
        <Stack px={'3'} py={4} w={'full'} spacing={4} backdropFilter="auto" backdropBlur="8px" borderBottomRadius={'2xl'}>
          <Text sx={nftCardStyles.headerText}>
            Army WW1945
          </Text>

          <Flex alignItems="center" justify={'space-between'} gap={4}>
            <Flex alignItems="center" gap={4}>
              <Avatar name="User Avatar" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000" />

              <Box>
                <Text sx={nftCardStyles.grayTextStyles}>
                  Creator
                </Text>
                <Text sx={nftCardStyles.authorTextStyles}>Thappier Fresco</Text>
              </Box>
            </Flex>

            <Box textAlign={'right'} justifyContent={'center'}>
              <Text sx={nftCardStyles.grayTextStyles}>Highest Bid</Text>
              <Text sx={nftCardStyles.priceTextStyles}>6.38 ETH</Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}

export default CardNftTimeOff
