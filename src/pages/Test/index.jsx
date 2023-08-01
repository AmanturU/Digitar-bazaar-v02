import React from 'react'
import { Box, Card, Switch, Text, Wrap } from '@chakra-ui/react'

import PrimaryBtn from '../../components/Buttons/PrimaryBtn'
import SecondBtn from '../../components/Buttons/SecondBtn'
import ThirdBtn from '../../components/Buttons/ThirdBtn'

import CardNftTimeOff from '../../components/Cards/CardNFT_timeOff'
import CardNftTimeOn from '../../components/Cards/CardNFT_timeOn'
import MiniFollowCard from '../../components/Cards/MiniFollowCard'
import CardCollection from '../../components/Cards/CardCollection'
import MainLayout from '../../elements/layouts/Main'
import { useSelector } from 'react-redux'

const TestPage = () => {

  const {
    selectAccessToken,
  } = useSelector(s => s.Auth)

  return (
    <MainLayout PageHeadline="Test Page" textPathFirst="Home" textPathSecond="Test page" w={'full'} h={'full'}>

      <Wrap mt={'50px'} justify="center" spacing={4}>
        <Card w={'lg'} mt={'8'} justify={'center'} align={'center'} alignItems={'center'} backgroundColor={'gray.400'}>
          <Text fontSize={'2xl'} className="mb-11" >Plus Jakarta Sans</Text>
          <Text fontSize={'9xl'}>{selectAccessToken}</Text>
          <Box m={2}>
            <PrimaryBtn width="200px" disabled>
              Button
            </PrimaryBtn>
          </Box>
          <Box m={2}>
            <SecondBtn width="200px">
              Button
            </SecondBtn>
          </Box>
          <Box m={2}>
            <ThirdBtn width="200px">
              Button
            </ThirdBtn>
          </Box>
          <Box m={2}>
            <Switch size={'lg'} colorScheme="pink" />
          </Box>

        </Card>
        <CardNftTimeOff />

        <CardNftTimeOn />
        <MiniFollowCard theme="white" />
        <MiniFollowCard theme="black" />
        <CardCollection theme="white" />
        <CardCollection theme="black" />

        <Text size={'sm'}>LWhat is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumWhat is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumWhat is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
      </Wrap>
    </MainLayout>
  )
}

export default TestPage