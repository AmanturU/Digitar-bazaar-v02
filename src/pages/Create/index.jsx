import React from 'react'
import { Box, Card, Switch, Text, Wrap } from '@chakra-ui/react'
import MainLayout from 'elements/layouts/Main'
import { useNavigate } from 'react-router-dom'
import { decodeJWT } from 'hooks/idDecodeJWT'



const textStylesSecond = {
  color: '#777E90',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '21px',
  width: '100%',
  // height: '100%',
  textAlign: 'center',
  '& .boldcolor': {
    color: '#1B1B1B',
  },
}

const boxStylesOne = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}
const boxStylesSecond = {
  display: 'flex',
  padding: '16px 16px 24px 16px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignitems: 'center',
  gap: '30px',
  borderRadius: '20px',
  background: 'white',
  width: '304px',
  height: '309px',
  margin: '20px',
  cursor: 'pointer',
  shadow: '2xl',
  transition: 'transform 0.2s ease-in-out',
}
const collectionImgFirst = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '272px',
  height: '218px',
  borderRadius: '20px',
}


const ChooseCreateVariant = () => {
  const access_auth = localStorage.getItem('access_auth')
  const user_id = decodeJWT(access_auth)

  const imgCard1 = 'https://s3-alpha-sig.figma.com/img/b501/d071/9d2a61b0ca25c29f6a829b2ad901c938?Expires=1691971200&Signature=Ny7mcHqpThPCWw1~Num-YruxmbAk3gqjyhRZ9St6fHHeLvvIAT1U-ieIddSGDdbbkaVAAH3i4JLP-HMjbTcpeZDj0Qc31w411Morj1Qb1Vy57OZbD6TzogOMy~NbbK42MWUFKdTew2iD6JIl-xPkzLwmCOy9hTWHtZmd2~QUiu~HXe3~0JI5ClSZxtz74tokuDgGUw5dat15Nau0g5ZedPwJGy-o-wwSDUAOSF8790-28GpnFb32lECesbCtmzTQgH4mmrV0dDd99Rt-l~r3JtbVFH2XtLs9Fb6h~SMZgQWLyLvjrio5XSpaKk~-~bV1fbFhiRLem4QruNVnUvkP6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  const imgCard2 = 'https://s3-alpha-sig.figma.com/img/3e6f/f82d/0a37261dd05fbc74cb232e946eeda1c5?Expires=1691971200&Signature=Zo-wcW1QabYowL7YdlRbtkqPbBmuBgx4iFxSSKq~DOxub1CKf0iq1s1lHm8FetTFzfYpJKgQUm5vlaawWv7~0ObvPi7Q4EBEfbg6RRlC6OT9QG0LU-YqIcXePNIbgYrtaHOGc7P03cEdnfTQfHT2L2W66cjXAYgv8RKhWMhr9iuOGMkA6LSBOCHyLstQccNA3dscaNwUaU36SPY0T4zvl8J-3ADcd7E2LjdP9l3wr~-DXeXWABv2BGSG~Gg9e1BbJ4X10zqcU8S67~6bSyEd2NMCoDbmPkzo2dk5Jj~W44cRRzMaiOvYkjOEdhAkJc57wUATSbFz46-NJHTeKW486Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  const navigate = useNavigate()

  const navigateToCreateNFT = () => {
    navigate(`/create/${user_id}/createNFT`)
  }
  const navigateToCreateCollections = () => {
    navigate(`/create/${user_id}/createCollection`)
  }

  return (
    <MainLayout PageHeadline="Create" textPathFirst="Home" textPathSecond="Create" minHehe="65vh" w={'full'} h={'full'}>
      <Wrap color={'#DEDEDE'} mt={'50px'} justify="center" spacing={4}>
        <Box sx={textStylesSecond}>
          Select  <span className="boldcolor">“NFT”</span> if you want to create your own NFT, or <span className="boldcolor">“NFT Collection”</span> if you want to create a collection <br /> of which you can then add NFTs via 1 method
        </Box>
        <Box sx={boxStylesOne} mt={'50px'} mb={'40px'}>
          {/* card 1 */}
          <Box
            sx={boxStylesSecond}
            onClick={navigateToCreateNFT}
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            <Box sx={collectionImgFirst}><img src={imgCard1} /></Box>
            <Text textAlign={'center'} fontFamily={'Plus Jakarta Sans'} color={'#777E90'} fontSize={'14px'}>Create NFT</Text>
          </Box>

          {/* card 2 */}
          <Box
            sx={boxStylesSecond}
            onClick={navigateToCreateCollections}
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            <Box sx={collectionImgFirst}><img src={imgCard2} /></Box>
            <Text textAlign={'center'} fontFamily={'Plus Jakarta Sans'} color={'#777E90'} fontSize={'14px'}>Create Collection</Text>
          </Box>
        </Box>
        <Box sx={textStylesSecond}>
          We do not own your private keys and cannot access your funds without your confirmation.
        </Box>

      </Wrap>
    </MainLayout >
  )
}

export default ChooseCreateVariant