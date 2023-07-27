import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const NumberStyle = {
  color: 'var(--neutral-black, #000)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '27px',
}

const secondNumberStyle = {
  color: 'var(--neutral-black, #000)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '21px',
}

const UserCards = (props) => {
  return (
    <Flex borderBottom={'2px solid #E6E8EC'} alignItems={'center'} h={'94'} bg={'var(--input-field, rgba(101, 103, 107, 0.04))'}>
      <Text ml={'5'} mr={'40px'} sx={NumberStyle}>{props.number}</Text>
      <Avatar w={'54px'} h={'54px'} src={'https://avatars.mds.yandex.net/i?id=10e2a3446277667f878a104fdf7f3ffa06439177-7549266-images-thumbs&n=13'} />
      <Text ml={'4'}  sx={NumberStyle}>Trippin’ Ape Tribe</Text>
      <Text ml={'145'} sx={secondNumberStyle}>{props.price}</Text>
      <Text ml={'144'} color={'var(--number-plus, #42A846)'} fontWeight={'600'} fontSize={'14px'} >+2.3%</Text>
      <Text ml={'142'} sx={secondNumberStyle}>14.32 ETH</Text>
      <Text ml={'135'} sx={secondNumberStyle}>2.4k</Text>
      <Text ml={'134'} mr={'140'} sx={secondNumberStyle}>205</Text>
      <StarIcon />
    </Flex>
  )
}

export default UserCards