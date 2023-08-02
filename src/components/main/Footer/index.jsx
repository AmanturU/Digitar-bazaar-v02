import React from 'react'

import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react'

const FooterStyles = {
  mainBoxStyles: {
    width: '100%',
    height: '556px',
    padding: '60px',
    flexShink: '0',
    background: 'rgb(27,27,27)',
    position: 'relative',
  },
  topLeftBlockStyles: {
    width: '393px',
    height: '246px',
  },
  emailInput: {
    width: '347px',
    padding: '15px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(101, 103, 107, 0.10)',
    background: '#1B1B1B',
  },
  listBlockStyles: {
    marginRight: '100px',

    color: '#777E90',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',

    '& > *': {
      marginBottom: '15px',
    },
  },
  bottomBlockStyles: {
    borderTop: '1px rgb(74, 74, 74) solid',
    borderBottom: '1px rgb(74, 74, 74) solid',
    gap: '35px',
    padding: '35px 0',

    color: '#777E90',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
  },
  lastBlockStyles: {
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',

    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '21px',
  },
  bgColorBox: {
    firstBoxColor: {
      width: '338px',
      height: '338px',
      flexShink: '0',
      borderRadius: '338px',
      opacity: '0.800000011920929',
      background: '#FF377F',
      filter: 'blur(182.5px)',
      position: 'absolute',
      top: '-140px',
      right: '150px',
    },
    secondBoxColor: {
      width: '338px',
      height: '338px',
      flexShink: '0',
      borderRadius: '338px',
      opacity: '0.800000011920929',
      background: 'rgba(151, 71, 255, 0.80)',
      filter: 'blur(182.5px)',
      position: 'absolute',
      top: '100px',
      // right: '-20px',
    },
  },
  textStyles: {
    logoStylesFirst: {
      color: '#FFF',
      fontFamily: 'Commissioner',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    logoStylesSecond: {
      color: '#FE3497',
      fontFamily: 'Commissioner',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    grayText: {
      color: '#777E90',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
    },
    listHeaderStyles: {
      color: '#FFF',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '27px',
      marginBottom: '22px',
    },
  },
}

const Footer = () => {
  return (
    <Box sx={FooterStyles.mainBoxStyles}>
      <Flex mb={'40px'}>
        <Box sx={FooterStyles.topLeftBlockStyles}>
          <Flex mb={'4'}><Text sx={FooterStyles.textStyles.logoStylesFirst}>Art</Text><Text sx={FooterStyles.textStyles.logoStylesSecond}>BIT</Text></Flex>
          <Text sx={FooterStyles.textStyles.grayText}>Enter your email to get notified by ArtBit for latest updates.</Text>

          <Box my={'8'}>
            <IconButton colorScheme="purple" icon={<BsTwitter />} mr={'2'} />
            <IconButton colorScheme="pink" icon={<BsInstagram />} mr={'2'} />
            <IconButton colorScheme="blue" icon={<FaFacebookSquare />} />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              input: {
                width: '347px',
                padding: '15px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(101, 103, 107, 0.10)',
                background: '#1B1B1B',
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
              },
            }}
          >
            <input type="search" name="username" placeholder="Email Adress" required className="emailInput" />

            <button className="browse-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M14.6595 25.7445C8.21618 25.7445 2.99284 20.5211 2.99284 14.0778C2.99284 7.63448 8.21618 2.41113 14.6595 2.41113C21.1028 2.41113 26.3262 7.63448 26.3262 14.0778C26.3262 20.5211 21.1028 25.7445 14.6595 25.7445Z" fill="#FE3796" stroke="#FE3796" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5762 14.0781H17.5762" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.2441 10.5781L18.7441 14.0781L15.2441 17.5781" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Box>
        </Box>

        <Flex ml="280px">
          <Box sx={FooterStyles.listBlockStyles}>
            <Text sx={FooterStyles.textStyles.listHeaderStyles}>ArtBit</Text>
            <Box>
              <Link>Explore</Link>
            </Box>
            <Box>
              <Link>All NFTs</Link>
            </Box>
            <Box>
              <Link>About</Link>
            </Box>
          </Box>

          <Box sx={FooterStyles.listBlockStyles}>
            <Text sx={FooterStyles.textStyles.listHeaderStyles}>My Account</Text>
            <Box>
              <Link>Profile</Link>
            </Box>
            <Box>
              <Link>Favourites</Link>
            </Box>
            <Box>
              <Link>Watchlist</Link>
            </Box>
            <Box>
              <Link>My Collections</Link>
            </Box>
            <Box>
              <Link>Settings</Link>
            </Box>
          </Box>

          <Box sx={FooterStyles.listBlockStyles}>
            <Text sx={FooterStyles.textStyles.listHeaderStyles}>Resources</Text>
            <Box >
              <Link>Platform Status</Link>
            </Box>
            <Box>
              <Link>Partners</Link>
            </Box>
            <Box>
              <Link>Texas</Link>
            </Box>
            <Box>
              <Link>Newsletter</Link>
            </Box>
          </Box>

          <Box sx={FooterStyles.listBlockStyles}>
            <Text sx={FooterStyles.textStyles.listHeaderStyles}>Community</Text>
            <Box>
              <Link>Help Center</Link>
            </Box>
            <Box>
              <Link>ArtBit Token</Link>
            </Box>
            <Box>
              <Link>Suggest Features</Link>
            </Box>
            <Box>
              <Link>Subscribe</Link>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Flex sx={FooterStyles.bottomBlockStyles}>
        <Link>Terms</Link>
        <Link>Privacy Policy</Link>
      </Flex>

      <Box sx={FooterStyles.lastBlockStyles}>
        <Text>© Artbit, Inc @ All Rights Reserved</Text>
      </Box>
      {/* Color box */}
      <Box sx={FooterStyles.bgColorBox.firstBoxColor}>ㅤ</Box>
      <Box sx={FooterStyles.bgColorBox.secondBoxColor}>ㅤ</Box>
    </Box>
  )
}

export default Footer

