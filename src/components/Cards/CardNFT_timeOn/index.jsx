import { Avatar, Box, Flex, Heading, Stack, Text, useToast } from '@chakra-ui/react'
import { useCountdownTimer } from 'hooks/timeToTimer'
import { useWatchingUser } from 'pages/Users/hooks/useWatchingUser'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserActionForNFT } from 'store/slices/user'
import { STATUS } from 'store/statuses'

const CardNftTimeOn = (props) => {
  const { nftData } = props
  const navigate = useNavigate()

  const dispatch = useDispatch()


  const { userForNFTData } = useSelector(s => s.User)

  React.useEffect(() => {
    dispatch(getUserActionForNFT(nftData.author))
  }, [nftData.author, dispatch])



  const CardNftData = {
    title: nftData ? nftData.title : 'Collection Name',
    author: nftData ? nftData.author : 'Author Name',
    price: nftData ? nftData.price : 'Author Name',
    nft_collections: nftData ? nftData.nft_collections : [],
    nft_image: nftData ? nftData.image : 'https://i.imgflip.com/3rot4q.png',
    display_name: userForNFTData ? userForNFTData.display_name : 'DB',
    avatar: userForNFTData ? userForNFTData.avatar : 'https://fotoland.by/pics/items/foto737_20200606140653.jpg',
    auction: nftData ? nftData.auction : false,
    auction_end_date: nftData ? nftData.auction_end_date : '',
    nft_id: nftData ? nftData.id : 1,
  }

  const onClickToNav = () => {
    navigate(`/users/${CardNftData.nft_id}/nft`)
  }

  const { hours, minutes, seconds } = useCountdownTimer(CardNftData.auction_end_date, CardNftData.auction)

  const nftCardStyles = {
    basicBoxStyles: {
      width: '310px',
      height: '400px',
      background: `url(${CardNftData.nft_image}) center/cover no-repeat`,
      color: 'white',
      flexShrink: 0,
      transition: 'transform 0.2s ease-in-out', // Добавляем transition в основные стили
      '&:hover': {
        transform: 'translateY(-1px)', // Приподнятие на 2 пикселя при наведении
        cursor: 'pointer',
      },
    },
    headerText: {
      width: '100%',
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '30px',
    },
    grayTextStyles: {
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      opacity: '0.6000000238418579',
    },
    authorTextStyles: {
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    priceTextStyles: {
      color: '#F5F7FA',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal',
    },
  }
  const timeBlockStyles = {
    width: '158px',
    height: '44px',
    borderRadius: '42px',
    background: 'rgba(0, 0, 0, 0.30)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: '10px',
    flexShrink: '0',
  }

  const timerNumbersStyles = {
    flexDirection: 'column',
    color: 'var(--neutral-white, #FFF)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
  }
  return (
    <Box sx={nftCardStyles.basicBoxStyles} onClick={onClickToNav} borderRadius={'2xl'} maxW={'md'}>
      <Flex flexDirection="column" justifyContent="flex-end" h="100%">

        {hours !== 0 && minutes !== 0 && seconds !== 0 && (
          <>
            <Flex
              sx={timeBlockStyles}
              backdropFilter="auto"
              backdropBlur="10px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none">
                <path d="M7.46387 18C11.1921 18 14.2139 15.75 14.2139 11.8125C14.2139 10.125 13.6514 7.3125 11.4014 5.0625C11.6826 6.75 9.99512 7.3125 9.99512 7.3125C10.8389 4.5 8.58887 0.5625 5.21387 0C5.61549 2.25 5.77637 4.5 2.96387 6.75C1.55762 7.875 0.713867 9.82012 0.713867 11.8125C0.713867 15.75 3.73562 18 7.46387 18ZM7.46387 16.875C5.59974 16.875 4.08887 15.75 4.08887 13.7812C4.08887 12.9375 4.37012 11.5312 5.49512 10.4062C5.35449 11.25 6.33887 11.8125 6.33887 11.8125C5.91699 10.4062 6.90137 8.15625 8.58887 7.875C8.38749 9 8.30762 10.125 9.71387 11.25C10.417 11.8125 10.8389 12.7845 10.8389 13.7812C10.8389 15.75 9.32799 16.875 7.46387 16.875Z" fill="white" />
              </svg>
              {/* timer */}
              <Flex ml={'2'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} >
                <Text flex="1" sx={timerNumbersStyles}>
                  {hours}
                </Text>
                <Text sx={timerNumbersStyles}>
                  :
                </Text>
                <Text flex="1" sx={timerNumbersStyles}>
                  {minutes}
                </Text>
                <Text sx={timerNumbersStyles}>
                  :
                </Text>
                <Text flex="1" sx={timerNumbersStyles}>
                  {seconds}
                </Text>
              </Flex>

            </Flex>
          </>
        )}

        <Stack px={'3'} py={4} w={'full'} spacing={4} backdropFilter="auto" backdropBlur="8px" borderBottomRadius={'2xl'}>
          <Text sx={nftCardStyles.headerText}>
            {CardNftData.title}
          </Text>
          <Flex alignItems="center" justify={'space-between'} gap={4}>
            <Flex alignItems="center" gap={4}>
              <Avatar name="Avatar" src={CardNftData.avatar} />

              <Box>
                <Text sx={nftCardStyles.grayTextStyles}>
                  Creator
                </Text>
                <Text sx={nftCardStyles.authorTextStyles}>{CardNftData.display_name}</Text>
              </Box>
            </Flex>

            <Box textAlign={'right'} justifyContent={'center'}>
              <Text sx={nftCardStyles.grayTextStyles}>Highest Bid</Text>
              <Text sx={nftCardStyles.priceTextStyles}>{CardNftData.price} ETH</Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Box >
  )
}

export default CardNftTimeOn
