import React, { useState } from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Avatar, Box, Button, Flex, Link, Tab, TabIndicator, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import TextWithReadMore from '../../components/textWithReadMore'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'
import SecondBtn from '../../components/Buttons/SecondBtn'
import moment from 'moment/moment'
import { GrStatusGoodSmall } from 'react-icons/gr'

const NFTDetailsPage = () => {

  const [isFilled, setIsFilled] = useState(false)

  const handleHeartClick = () => {
    setIsFilled(!isFilled)
  }

  const NFTDetailsPageStyles = {
    leftBox: {
      firstNFTimgBox: {
        width: '49%',
        height: 0,
        padding: '10px',
        paddingTop: '50%', // Равняется 50% ширины, чтобы создать соотношение 1:1
        background: 'url(https://s3-alpha-sig.figma.com/img/f1d5/cd3a/a192cf41f3d2eb98f51ba570e0590599?Expires=1690761600&Signature=lJaDeoy4wCLycgVqeEpWVKvusJVpLeiiS-NX3hmyu6H9VE6cbpcQDuvacesqYV5XsqhyyCPba4Hlr5WxFNxrm2wt91xg7bM1Vzk1gEhrtI3R07-p5jLnSNMbw2Y4zXgX7uTStC2GMhgjmcxfwYusFKmhDuK9KopZiVMkrajfD3VRdf3dx~a4wl4ZcFkL9iwmuTDLcOIil~wpxdSw8eQ1GRaHMGnv0FIKSRT56gJIhGhzwpAKevT5ZGm5tovN4jgFxop-ioe5H8dPlAGkZQvunxx1Z3N0kgZ2g-HzrCI9vjO8F0Tq3f2PgC1uIliy51hFBRkhTtroYKd3m-8sQ9R3kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) center/cover no-repeat',
        borderRadius: '3xl',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      contentInsideBox: {
        position: 'absolute', // Позиционируем контент абсолютно внутри box
        top: '22px', // Отступ сверху
        // left: '90%', // Отступ слева
        right: '29px', // Отступ справа
        bottom: '10px', // Отступ снизу
      },
    },
    textStyles: {
      headerText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '27px',
        // marginBottom: '15px',
      },
      headerTabsText: {
        color: '#777E90',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '27px',
        // marginBottom: '15px',
      },
      numberText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '21px',
      },
      byText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '21px',
      },
      authorText: {
        color: '#FE3796',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '21px',
      },
      bossText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '55px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '66px',
      },
      timerText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '55px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '66px',
        margin: '0px 6px',
      },
      headerAuthorStyles: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '21px',
      },
      idTextStyles: {
        color: '#777E90',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '21px',
      },
      creatorText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',
      },
      criptoСurrencyText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '44px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '66px',
      },
      dollarConvertCurrencyText: {
        color: '#65676B',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '30px',
      },
      lastSalePriceText: {
        color: '#65676B',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '21px',
      },
      tableHeaderText: {
        color: '#5D5D5B',
        fontFamily: 'Inter',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',
      },
      priceAndFromText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '21px',
      },
      otherTableElementText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '21px',
      },
      tableHeaderAboutText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',
      },
      tableDetailAboutText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '21px',
      },
      statusText: {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',
        padding: '4px 8px',
        borderRadius: 'md',
        marginRight: '16px',
      },
    },
  }

  // Detail
  const tableDetailsList = [
    { key: 'Blockchain', label: 'Ethereum' },
    { key: 'Contact Address', label: '#10101010' },
    { key: 'Metadeta', label: 'Centralized' },
    { key: 'Last Update', label: '1689759219' },
    { key: 'Created', label: '1686382377' },
    { key: 'Supply left', label: '10' },
  ]

  // Table Offers
  const tableHeaderList = [
    { key: 'price', label: 'Price (ETH)' },
    { key: 'usdPrice', label: 'USD Price' },
    { key: 'floorDifference', label: 'Floor Difference' },
    { key: 'expiration', label: 'Expiration' },
    { key: 'from', label: 'From' },
  ]

  // Table Offers Data
  const tableDataList = [
    {
      price: '0.001 ETH',
      usdPrice: '$384.95',
      floorDifference: '31% below',
      expiration: '11 min',
      from: 'yes_nft',
    },
    {
      price: '0.001 ETH',
      usdPrice: '$384.95',
      floorDifference: '31% below',
      expiration: '11 min',
      from: 'yes_nft',
    },
    {
      price: '0.001 ETH',
      usdPrice: '$384.95',
      floorDifference: '31% below',
      expiration: '11 min',
      from: 'yes_nft',
    },
    {
      price: '0.001 ETH',
      usdPrice: '$384.95',
      floorDifference: '31% below',
      expiration: '11 min',
      from: 'yes_nft',
    },
    {
      price: '0.001 ETH',
      usdPrice: '$384.95',
      floorDifference: '31% below',
      expiration: '11 min',
      from: 'yes_nft',
    },
    // Add more data here...
  ]

  // Функция для форматирования времени
  const formatDate = (timestamp) => {
    const momentTime = moment.unix(timestamp)
    return momentTime.fromNow()
  }

  return (
    <MainLayout PageHeadline="NFT Detail" textPathFirst="Home" textPathSecond="NFT Detail">
      <Box p={'70px 80px'}>

        {/* ---1--- */}
        <Flex w={'full'} justifyContent={'space-between'}>
          {/* left-box */}
          <Box sx={NFTDetailsPageStyles.leftBox.firstNFTimgBox}>
            {/* content */}
            <Text sx={NFTDetailsPageStyles.leftBox.contentInsideBox}>
              <Button p={'10px 18px'}
                borderRadius={'23px'}
                colorScheme="gray"
                onClick={handleHeartClick}>
                {isFilled ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                <Text mx={'1.5'} sx={NFTDetailsPageStyles.textStyles.numberText}>
                  68
                </Text>
              </Button>
            </Text>
          </Box>

          {/* right-box */}
          <Box w={'49%'} h={'677px'} >

            {/* 1 block */}
            <Box>

              {/* author */}
              <Flex
                sx={NFTDetailsPageStyles.textStyles.byText}
                mt={'1'}
              >by
                <Link sx={NFTDetailsPageStyles.textStyles.authorText} mx={'1'}>Billionaire’s NFT Club
                </Link>
              </Flex>

              {/* nft-name */}
              <Text sx={NFTDetailsPageStyles.textStyles.bossText} my={'2'}>Golden Skull</Text>

              {/* description */}
              <TextWithReadMore
                maxWords={25}>
                The Wall Street Official Avatar Fight Club is launching its NFT Collection, which includes over 50k unique pieces inspired by the iconic symbols and characters from Wall Street. Each NFT in the collection represents a distinct and rare piece of art, making it a valuable and sought-after digital asset in the blockchain world. Collectors and enthusiasts will have the opportunity to own and trade these exclusive pieces, adding a touch of Wall Street prestige to their digital portfolios. Dont miss out on the chance to be a part of this extraordinary journey into the world of blockchain art and finance. Join the fight club today!
              </TextWithReadMore>


              {/* timer */}
              <Box mt={'5'} sx={NFTDetailsPageStyles.textStyles.timerContainer} alignItems="center">
                <Text sx={NFTDetailsPageStyles.textStyles.headerText}>Auction end time: </Text>
                <Flex>
                  <Flex alignItems="center">
                    <Text sx={NFTDetailsPageStyles.textStyles.bossText}>2</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.criptoСurrencyText}>d</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.timerText}>:</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Text sx={NFTDetailsPageStyles.textStyles.bossText}>5</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.criptoСurrencyText}>h</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.timerText}>:</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Text sx={NFTDetailsPageStyles.textStyles.bossText}>13</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.criptoСurrencyText}>m</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.timerText}>:</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Text sx={NFTDetailsPageStyles.textStyles.bossText}>45</Text>
                    <Text sx={NFTDetailsPageStyles.textStyles.criptoСurrencyText}>s</Text>
                  </Flex>
                </Flex>
              </Box>
              {/* status */}
              <Flex my={'5'} alignItems={'center'}>
                <Text sx={NFTDetailsPageStyles.textStyles.creatorText} mr={'1'}>Current status of NFT: </Text>
                {/* green */}
                <Flex sx={{ ...NFTDetailsPageStyles.textStyles.statusText, backgroundColor: 'rgba(0, 128, 0, 0.2)' }} color="green.500" alignItems="center">
                  <GrStatusGoodSmall size={'8px'} />
                  <Text ml={'1'}>On Sale</Text>
                </Flex>

                {/* red */}
                <Flex sx={{ ...NFTDetailsPageStyles.textStyles.statusText, backgroundColor: 'rgba(255, 0, 0, 0.2)' }} color="red.500" alignItems="center">
                  <GrStatusGoodSmall size={'8px'} />
                  <Text ml={'1'}>Sold</Text>
                </Flex>

                {/* gray */}
                <Flex sx={{ ...NFTDetailsPageStyles.textStyles.statusText, backgroundColor: 'rgba(140, 140, 140, 0.7)' }} color="gray.600" alignItems="center">
                  <GrStatusGoodSmall size={'8px'} />
                  <Text ml={'1'}>Inactive</Text>
                </Flex>
              </Flex>
              {/* creator-current-owner */}
              <Flex my={'8'}>

                <Box mr={'17%'}>
                  <Text sx={NFTDetailsPageStyles.textStyles.creatorText}>Creator</Text>
                  <Flex my={'3'} alignItems={'center'} _hover={{ cursor: 'pointer' }}>
                    <Avatar name="John Doe" />
                    <Box ml={'3'}>
                      <Text sx={NFTDetailsPageStyles.textStyles.headerAuthorStyles}>John Doe</Text>
                      <Text sx={NFTDetailsPageStyles.textStyles.idTextStyles}>@johndoe1999</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Text sx={NFTDetailsPageStyles.textStyles.creatorText}>Current Owner</Text>
                  <Flex my={'3'} alignItems={'center'} _hover={{ cursor: 'pointer' }}>
                    <Avatar name="John Doe" />
                    <Box ml={'3'}>
                      <Text sx={NFTDetailsPageStyles.textStyles.headerAuthorStyles}>John Doe</Text>
                      <Text sx={NFTDetailsPageStyles.textStyles.idTextStyles}>@johndoe1999</Text>
                    </Box>
                  </Flex>
                </Box>

              </Flex>

            </Box>

            {/* 2 block */}
            <Box>
              <Text sx={NFTDetailsPageStyles.textStyles.creatorText}>Current Price</Text>
              <Flex alignItems={'flex-end'}>
                <Text sx={NFTDetailsPageStyles.textStyles.criptoСurrencyText}>~6.38 ETH</Text>
                <Text sx={NFTDetailsPageStyles.textStyles.dollarConvertCurrencyText}>($4,774.36)</Text>
              </Flex>
              <Text sx={NFTDetailsPageStyles.textStyles.lastSalePriceText}>Last sale price ~ 5.93 ETH</Text>

              <Box mt={'5%'}>
                <SecondBtn padding="11px 43px" >Place a bid</SecondBtn>
              </Box>
              {/* Buy buttons */}

            </Box>
          </Box>
        </Flex>

        {/* ---2--- */}
        <Flex my={'16'}>
          {/* 1-block */}
          <Box w={'49%'} h={'677px'} >
            <Text sx={NFTDetailsPageStyles.textStyles.headerText} >Offers</Text>
            <Box my={'5'} w={'full'} justifyContent={'left'}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1" viewBox="0 0 678 1" fill="none">
                <path d="M1.11279 0.5H677.113" stroke="#DEDEDE" strokeLinecap="square" />
              </svg>
            </Box>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    {tableHeaderList.map((header) => (
                      <Th key={header.key} sx={NFTDetailsPageStyles.textStyles.tableHeaderText} p={'0'}>{header.label}</Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {tableDataList.map((rowData, rowIndex) => (
                    <Tr key={rowIndex}>
                      {tableHeaderList.map((header) => (
                        <Td key={header.key} pl={'1'} sx={NFTDetailsPageStyles.textStyles[header.key === 'price' || header.key === 'from' ? 'priceAndFromText' : 'otherTableElementText']}>
                          {header.key === 'price' ? (
                            <Flex alignItems={'center'}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
                                <path d="M8.28528 0L8.11768 0.569661V17.0999L8.28528 17.2672L15.9584 12.7316L8.28528 0Z" fill="#343434" />
                                <path d="M8.28594 0L0.612793 12.7316L8.28594 17.2672V9.24397V0Z" fill="#8C8C8C" />
                                <path d="M8.28536 18.7208L8.19092 18.8359V24.7244L8.28536 25.0003L15.9631 14.1875L8.28536 18.7208Z" fill="#3C3C3B" />
                                <path d="M8.28594 25V18.7206L0.612793 14.1873L8.28594 25Z" fill="#8C8C8C" />
                                <path d="M8.28491 17.2668L15.9579 12.7313L8.28491 9.24365V17.2668Z" fill="#141414" />
                                <path d="M0.612793 12.7313L8.28582 17.2668V9.24365L0.612793 12.7313Z" fill="#393939" />
                              </svg>
                              <Text ml={'1'}>{rowData[header.key]}</Text>
                            </Flex>
                          ) : (
                            rowData[header.key]
                          )}
                        </Td>
                      ))}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          {/* 2-block */}
          <Box w={'49%'} h={'677px'}>
            <Tabs position="relative" variant="unstyled">
              <TabList sx={NFTDetailsPageStyles.textStyles.headerTabsText}>
                <Tab _selected={{ color: 'black' }}>Details</Tab>
                <Tab _selected={{ color: 'black' }}>Bids</Tab>
                <Tab _selected={{ color: 'black' }}>Activity</Tab>
              </TabList>
              <TabIndicator
                mt="10px"
                height="2px"
                bg="black"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel p={'25px'}>
                  {/* Description */}
                  <Box
                    height="90px"
                    overflowY="auto"
                  >
                    <TextWithReadMore maxWords={'25'}>
                      A collection of 10,000 undead NFTs minted on the Ethereum blockchain. Each unique Deadfella is randomly generated from a combination of over 400 individually.

                      A collection of 10,000 undead NFTs minted on the Ethereum blockchain. Each unique Deadfella is randomly generated.

                      A collection of 10,000 undead NFTs minted on the Ethereum blockchain. Each unique Deadfella is randomly generated from a combination of over 400 individually.

                      A collection of 10,000 undead NFTs minted on the Ethereum blockchain. Each unique Deadfella is randomly generated.
                    </TextWithReadMore>
                  </Box>

                  {/* Table Details */}
                  <Table variant="simple" w={'320px'}>
                    <Tbody>
                      {tableDetailsList.map((item) => (
                        <Tr key={item.key}>
                          <Td pl={'0'} py={'2'} sx={NFTDetailsPageStyles.textStyles.tableHeaderAboutText}>{item.key}</Td>
                          {item.key === 'Last Update' || item.key === 'Created' ? (
                            <Td py={'2'} sx={NFTDetailsPageStyles.textStyles.tableDetailAboutText}>{formatDate(item.label)}</Td>
                          ) : (
                            <Td py={'2'} sx={NFTDetailsPageStyles.textStyles.tableDetailAboutText}>{item.label}</Td>
                          )}
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box >
    </MainLayout >
  )
}

export default NFTDetailsPage