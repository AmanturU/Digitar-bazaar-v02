import { Avatar, Box, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const CardCollection = (props) => {
  const { theme, ...restProps } = props
  const isWhiteTheme = theme === 'white'
  const backgroundColor = isWhiteTheme ? '#fff' : '#1B1B1B'
  const textColor = isWhiteTheme ? '#000' : 'white'

  const basicBoxStyles = {
    width: '310px',
    height: '375px',
    background: backgroundColor,
    borderRadius: '6.828px',
    boxShadow: '0px 6.828011512756348px 10.242016792297363px 0px rgba(30, 30, 30, 0.04)',
    color: 'white',
    display: 'inline-flex',
    padding: '5px 13.656px 17.07px 13.656px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8.535px',
    flexShrink: 0,

  }

  const headingStyles = {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '21px',
    color: textColor,
  }
  const grayTextStyles = {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px',
    color: '#65676B',
  }


  const collectionImgFirst = {
    backgroundImage: 'url(https://i.pinimg.com/564x/7c/56/27/7c5627db77efe820986bd774ed0c9237.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const collectionImgSecond = {
    backgroundImage: 'url(https://i.pinimg.com/564x/7c/56/27/7c5627db77efe820986bd774ed0c9237.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const collectionImgThird = {
    backgroundImage: 'url(https://i.pinimg.com/564x/98/03/4e/98034e28c43f1c13c03fbc03aacf6aba.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const collectionImgFourth = {
    backgroundImage: 'url(https://i.pinimg.com/564x/98/03/4e/98034e28c43f1c13c03fbc03aacf6aba.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }



  return (
    <Box sx={basicBoxStyles} borderRadius={'2xl'} maxW={'md'} margin={'20px'} {...restProps}>
      <Flex flexDirection="column" w={'full'} h="100%">
        <Stack py={'2'} w={'full'} h={'full'} spacing={4} >


          <Flex px={'1'} pt={'1'} alignItems="start" justify={'space-between'} gap={4}>
            <Flex alignItems="center" gap={4}>
              <Avatar name="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zlyMSV4wcE-O6_YQjLyo2uyeIEbnpKJWTw&usqp=CAU" />

              <Box>
                <Heading sx={headingStyles}>NextFuture Abstract</Heading>
                <Text sx={grayTextStyles}>
                  SpaceX Club
                </Text>
              </Box>
            </Flex>

          </Flex>
          <Grid
            templateAreas={`
            'Img-1 Img-2'
            'Img-1 Img-3'
            'Img-1 Img-4'`}
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="1fr 1fr 1fr"
            gap="2"
            gridAutoFlow="row"
            h={'full'}

          >
            <GridItem sx={collectionImgFirst} borderRadius={'md'} area={'Img-1'}>

            </GridItem>
            <GridItem sx={collectionImgSecond} borderRadius={'md'} area={'Img-2'}>

            </GridItem>
            <GridItem sx={collectionImgThird} borderRadius={'md'} area={'Img-3'}>

            </GridItem>
            <GridItem sx={collectionImgFourth} borderRadius={'md'} area={'Img-4'}>

            </GridItem>
          </Grid>
        </Stack>
      </Flex>
    </Box>
  )
}

export default CardCollection
