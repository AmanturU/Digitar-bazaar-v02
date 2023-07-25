import React from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Flex, Text } from '@chakra-ui/react'

const ChooseSellTypePage = () => {

  const ChooseSellTypePageStyles = {
    grayText: {
      color: '#777E90',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
    },
    secondHeaderText: {
      color: '#000',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
    },
  }

  return (
    <MainLayout PageHeadline="Create Item" textPathFirst="Home" textPathSecond="Create">
      <Flex mt={'20'} justifyContent={'center'} alignItems={'center'}>

        <Flex sx={ChooseSellTypePageStyles.grayText}>
          Choose <Text sx={ChooseSellTypePageStyles.secondHeaderText} mx={'1'}>“Single”</Text> if you want your collectible to be one of a kind or <Text sx={ChooseSellTypePageStyles.secondHeaderText} mx={'1'}>“Multiple”</Text> if you want to sell one collectible multiple times
        </Flex>
        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} >


        </Flex>

      </Flex>
    </MainLayout >
  )
}

export default ChooseSellTypePage