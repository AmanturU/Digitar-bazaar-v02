import React from 'react'
import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react'

import SecondBtn from '../../Buttons/SecondBtn'

const MiniFollowCard = (props) => {
  const { theme, ...restProps } = props

  const isWhiteTheme = theme === 'white'
  const backgroundColor = isWhiteTheme ? '#fff' : '#1B1B1B'
  const textColor = isWhiteTheme ? '#000' : '#fff'


  const basicBoxStyles = {
    width: '192px',
    height: '228px',
    backgroundColor: backgroundColor,
    color: textColor,
    flexShrink: 0,
  }

  const coverImageStyles = {
    width: '170px',
    height: '100px',
    backgroundImage: 'url(https://i.pinimg.com/564x/f0/57/28/f05728828151251ad6341d8544adc235.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '12px',
    backgroundColor: 'transparent', // Изменено с background-color на backgroundColor
  }

  const userNameStyles = {
    color: textColor,
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '21px',
  }

  return (
    <Box sx={basicBoxStyles} {...restProps} borderRadius={'2xl'} maxW={'md'} margin={'20px'}>
      <Flex position={'relative'} flexDirection="column" justifyContent="flex-start" h="100%">

        <Stack bottom={'52'} px={'3'} py={4} w={'full'} alignItems={'center'} spacing={1}>
          <Box sx={coverImageStyles} />

          <Avatar name="User Avatar" top={'88px'} position={'absolute'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zlyMSV4wcE-O6_YQjLyo2uyeIEbnpKJWTw&usqp=CAU" />
          <Text mt={7} sx={userNameStyles} w={'full'}>
            Mard Basa
          </Text>

          <SecondBtn fontSize="14px" fontWeight="600" lineHeight="21px" padding="8px 30px">Follow</SecondBtn>
        </Stack>
      </Flex>
    </Box>
  )
}

export default MiniFollowCard
