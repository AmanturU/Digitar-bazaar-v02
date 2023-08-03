import { Avatar, Box, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserActionForNFT, getUserCollectionsList } from 'store/slices/user'

const CardCollection = (props) => {
  const { theme, collectionData, ...restProps } = props
  const isWhiteTheme = theme === 'white'
  const backgroundColor = isWhiteTheme ? '#fff' : '#1B1B1B'
  const textColor = isWhiteTheme ? '#000' : 'white'
  const grayBg = isWhiteTheme ? 'https://fotoland.by/pics/items/foto737_20200606140653.jpg' : 'https://i.imgflip.com/3rot4q.png'

  const dispatch = useDispatch()

  const { userForNFTData } = useSelector(s => s.User)

  React.useEffect(() => {
    dispatch(getUserActionForNFT(collectionData.owner))
  }, [collectionData.owner, dispatch])


  const CardCollectionData = {
    title: collectionData ? collectionData.title : 'Collection Name',
    author: collectionData ? collectionData.author : 'Author Name',
    nft_collections: collectionData ? collectionData.nft_collections : [],
    collection_img: collectionData ? collectionData.image : grayBg,
    display_name: userForNFTData ? userForNFTData.display_name : 'DB',
    avatar: userForNFTData ? userForNFTData.avatar : grayBg,
  }

  const basicBoxStyles = {
    width: '310px',
    height: '375px',
    background: backgroundColor,
    borderRadius: '6.828px',
    boxShadow: '0px 6.828011512756348px 10.242016792297363px 0px rgba(30, 30, 30, 0.07)',
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

  const collectionImgStyles = {
    backgroundImage: `url(${grayBg})`,
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
              <Avatar name={CardCollectionData.display_name} src={CardCollectionData.avatar} />

              <Box>
                <Heading sx={headingStyles}>{CardCollectionData?.title}</Heading>
                <Text sx={grayTextStyles}>
                  {CardCollectionData.display_name}
                </Text>
              </Box>
            </Flex>

          </Flex>
          <Grid
            templateAreas={`
            'Img Img-1'
            'Img Img-2'
            'Img Img-3'`}
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="1fr 1fr 1fr"
            gap="2"
            gridAutoFlow="row"
            h={'full'}

          >
            <GridItem
              sx={{
                backgroundImage: `url(${CardCollectionData.collection_img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              borderRadius={'md'}
              area={'Img'}>
            </GridItem>
            {CardCollectionData.nft_collections.map((nft, index) => (
              <GridItem key={index} sx={{
                backgroundImage: `url(${nft.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }} borderRadius={'md'} area={`Img-${index + 1}`} />
            ))}

            {/* if === 0 */}
            {CardCollectionData.nft_collections.length === 0 && (
              <>
                <GridItem
                  sx={collectionImgStyles}
                  borderRadius={'md'}
                  area={'Img-1'}
                ></GridItem>
                <GridItem
                  sx={collectionImgStyles}
                  borderRadius={'md'}
                  area={'Img-2'}
                ></GridItem>
                <GridItem
                  sx={collectionImgStyles}
                  borderRadius={'md'}
                  area={'Img-3'}
                ></GridItem>
              </>
            )}

            {/* if === 1 */}
            {CardCollectionData.nft_collections.length === 1 && (
              <>
                <GridItem
                  sx={collectionImgStyles}
                  borderRadius={'md'}
                  area={'Img-2'}
                ></GridItem>
                <GridItem
                  sx={collectionImgStyles}
                  borderRadius={'md'}
                  area={'Img-3'}
                ></GridItem>
              </>
            )}

            {/* if === 2 */}
            {CardCollectionData.nft_collections.length === 2 && (
              <>
                <GridItem
                  sx={collectionImgStyles}
                  borderRadius={'md'}
                  area={'Img-3'}
                ></GridItem>
              </>
            )}
          </Grid>
        </Stack>
      </Flex>
    </Box>
  )
}

export default CardCollection
