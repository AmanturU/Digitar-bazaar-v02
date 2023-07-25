import React from 'react'
import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const CardNftTimeOff = () => {
  const basicBoxStyles = {
    width: '310px',
    height: '400px',
    background: 'url(https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png) center/cover no-repeat',
    color: 'white',
    flexShrink: 0,
  }

  return (
    <Box sx={basicBoxStyles} borderRadius={'2xl'} maxW={'md'} margin={'20px'}>
      <Flex flexDirection="column" justifyContent="flex-end" h="100%">
        <Stack px={'3'} py={4} w={'full'} spacing={4} backdropFilter="auto" backdropBlur="8px" borderBottomRadius={'2xl'}>
          <Text w={'full'}>
            Army WW1945
          </Text>

          <Flex alignItems="center" justify={'space-between'} gap={4}>
            <Flex alignItems="center" gap={4}>
              <Avatar name="User Avatar" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000" />

              <Box>
                <Text opacity={0.6} fontWeight={500} fontSize={14}>
                  Creator
                </Text>
                <Heading size="sm">Thappier Fresco</Heading>
              </Box>
            </Flex>

            <Box textAlign={'right'} justifyContent={'center'}>
              <Text>Highest Bid</Text>
              <Text>6.38 ETH</Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}

export default CardNftTimeOff
