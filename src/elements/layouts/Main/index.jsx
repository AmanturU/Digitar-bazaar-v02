import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Navbar from '../../../components/main/Navbar'
import Footer from '../../../components/main/Footer'

const MainLayout = (props) => {
  const { PageHeadline, textPathFirst, textPathSecond, children, ...restProps } = props

  // alert(`text => ${textPathFirst} text2 => ${textPathSecond}`)

  const basicBoxStyles = {
    width: 'full',
    height: '367px',
    background: 'url(https://s3-alpha-sig.figma.com/img/90c1/c47f/757c88402ba1acb3cd63b2833bd2a4cd?Expires=1690156800&Signature=nHL9jXKmSvuKxTvsiV3QaDlRuWdrMDiyKBJlV2do2e1036tcQkysWm9Cz2t8E3y2--tqwJJLRt9XSXf12MAgtBCOE4d3btPhLgSClpP-2zElNYa5nymdFnf5My0yPs3hRiG5OjRNSnYYfvib7T2i53vqsFm6d1gg-YY3d7oJuzTjeUAtAjoDtcy3QocajjejeSRwwmxuaUR772c9nm5KlhQ0AQWqgBv9chn89Ey3jtB9JQ6z3kjsGaUq9VBdUNDWitPMHU051TQszrvb1p~ZyzYLSWzzaX9D9WJvx61VNy5WksR3X-XoSgXY387YfHxmxaZeNVXBVKB--0rGCJDoFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) center/cover no-repeat',
    flexShrink: 0,
  }


  const headerStyles = {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
  }

  const headlineTextStyles = {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '52px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '78px',
  }
  const textStylesFirst = {
    color: 'rgba(255, 255, 255, 0.50)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  }
  const textStylesSecond = {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  }

  return (
    <Box w={'full'} h={'full'} m={0} p={0}>
      {/* Header */}
      <Box sx={basicBoxStyles}>
        <Navbar />

        <Box sx={headerStyles} pt={'24'}>
          <Text sx={headlineTextStyles}>{PageHeadline ? PageHeadline : 'Unknown'}</Text>
          <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
            <Text sx={textStylesFirst}>{textPathFirst ? textPathFirst : 'Empty'}ㅤ/ㅤ</Text>
            <Text sx={textStylesSecond}>{textPathSecond ? textPathSecond : 'Empty page'}</Text>
          </Flex>
        </Box>

      </Box>

      <Box minH={'100vh'}>
        {children}

      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout