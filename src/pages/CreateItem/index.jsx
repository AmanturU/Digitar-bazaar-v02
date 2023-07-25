import React, { useState } from 'react'
import MainLayout from '../../elements/layouts/Main'

import { Avatar, Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Text, Textarea } from '@chakra-ui/react'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'
import CardNftTimeOff from '../../components/Cards/CardNFT_timeOff'
import DropzoneComponent from '../../components/dragndrop'
import ThirdBtn from '../../components/Buttons/ThirdBtn'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SecondBtn from '../../components/Buttons/SecondBtn'

const CreateItemPage = () => {


  const CreateItemPageStyles = {
    inputStyles: {
      padding: '17px 20px',
      borderRadius: '20px',
      background: 'rgba(217, 217, 217, 0.20)',
    },
    textStyles: {
      headerText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '30px',
        marginBottom: '15px',
      },
      secondHeaderText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
        marginTop: '25px',
        marginBottom: '15px',
      },
      selectText: {
        color: '#777E90',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px',
      },
      requiredIconStyles: {
        color: '#E23434',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
      },
    },
    leftBlock: {
      grayText: {
        color: '#777E90',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '18px',
      },
    },
    rightBlock: {
      bgSelectStyles: {
        width: '160px',
        height: '122px',
        alt: 'background image',
        cursor: 'pointer',
        flexShink: '0',
      },
      uploadButtonbgSelect: {
        width: '160px',
        height: '122px',
        alt: 'background image',
        cursor: 'pointer',
        flexShink: '0',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(217, 217, 217, 0.20)',
      },
    },
  }

  const headerText = {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    marginTop: '15px',
    marginBottom: '30px',
  }

  const [selectedMethod, setSelectedMethod] = useState(null)

  const handleMethodSelect = (method) => {
    setSelectedMethod(method)
  }


  return (
    <MainLayout PageHeadline="Create Item" textPathFirst="Home" textPathSecond="Create Item">
      <Flex mt={'60px'} px={'26.5%'}>
        {/* leftMainBlock */}
        <Box w={'38%'}>
          <Box>
            <Text sx={CreateItemPageStyles.textStyles.headerText}>Preview Item</Text>
            <Text sx={CreateItemPageStyles.leftBlock.grayText} w={'150px'} my={'10px'}>Your NFT will look like this</Text>
          </Box>
          <CardNftTimeOff />
        </Box>

        {/* RightMainBlock */}
        <Box ml={'10px'}>
          {/* file upload */}
          <Box mb={'8'}>
            <Text sx={CreateItemPageStyles.textStyles.headerText}>Choose Your Cover Image</Text>
            <DropzoneComponent padding="64px 135px">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.56934 5C3.56934 2.79086 5.3602 1 7.56934 1H15.9125C16.9733 1 17.9908 1.42143 18.7409 2.17157L20.3978 3.82843C21.1479 4.57857 21.5693 5.59599 21.5693 6.65685V19C21.5693 21.2091 19.7785 23 17.5693 23H7.56934C5.3602 23 3.56934 21.2091 3.56934 19V5ZM19.5693 8V19C19.5693 20.1046 18.6739 21 17.5693 21H7.56934C6.46477 21 5.56934 20.1046 5.56934 19V5C5.56934 3.89543 6.46477 3 7.56934 3H14.5693V5C14.5693 6.65685 15.9125 8 17.5693 8H19.5693ZM19.4584 6C19.3602 5.7176 19.199 5.45808 18.9836 5.24264L17.3267 3.58579C17.1113 3.37035 16.8517 3.20914 16.5693 3.11094V5C16.5693 5.55228 17.0171 6 17.5693 6H19.4584Z" fill="#777E91" />
                <path d="M12.1866 9.07588C12.0686 9.12468 11.9581 9.19702 11.8622 9.29289L8.86223 12.2929C8.4717 12.6834 8.4717 13.3166 8.86223 13.7071C9.25275 14.0976 9.88592 14.0976 10.2764 13.7071L11.5693 12.4142V17C11.5693 17.5523 12.0171 18 12.5693 18C13.1216 18 13.5693 17.5523 13.5693 17V12.4142L14.8622 13.7071C15.2528 14.0976 15.8859 14.0976 16.2764 13.7071C16.667 13.3166 16.667 12.6834 16.2764 12.2929L13.2764 9.29289C12.9818 8.99825 12.549 8.92591 12.1866 9.07588Z" fill="#777E91" />
              </svg>
              <Text sx={headerText}>
                PNG, GIF, WEBP, MP4 or MP3. Max size: 100MB
              </Text>
              <SecondBtn>Upload</SecondBtn>
            </DropzoneComponent>
          </Box>

          {/* sell method */}
          <Box mb={'9'}>
            <Flex sx={CreateItemPageStyles.textStyles.headerText}>Select Method<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Box display="flex" justifyContent="center" >
              <ThirdBtn
                mr={'4'}
                background={selectedMethod === 'fixed' ? '#FE3796' : '0'}
                color={selectedMethod === 'fixed' ? '#FFF' : '#000'}
                rounded="3xl"
                onClick={() => handleMethodSelect('fixed')}
              >
                Fixed Rate
              </ThirdBtn>
              <ThirdBtn
                mr={'4'}
                background={selectedMethod === 'auction' ? '#FE3796' : '0'}
                color={selectedMethod === 'auction' ? '#FFF' : '#000'}
                rounded="3xl"
                onClick={() => handleMethodSelect('auction')}
              >
                Time Auction
              </ThirdBtn>
            </Box>
          </Box>

          {/* title */}
          <Box mb={'9'}>
            <Flex sx={CreateItemPageStyles.textStyles.headerText}>Title<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="e.g: Crypto Hunks" sx={CreateItemPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* custom url */}
          <Box mb={'9'}>
            <Flex sx={CreateItemPageStyles.textStyles.headerText}>External Link<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="e.g: https://yoursite.io/item/123" sx={CreateItemPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* despcription */}
          <Box mb={'9'}>
            <Flex sx={CreateItemPageStyles.textStyles.headerText}>Description*<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Textarea placeholder="e.g: This is a very limited item" sx={CreateItemPageStyles.inputStyles} border={'none'} size="lg" rows={'8'} />
          </Box>


          {/* prices */}
          <Flex>
            <Box mb={'9'} w={'50%'}>
              {/* none*/}
              {
                selectedMethod === null && (
                  <>
                    <Flex sx={CreateItemPageStyles.textStyles.headerText}>Please choose the method of sale
                    </Flex>

                    <Flex>
                      <Input placeholder="Enter amount" disabled />
                      <Select disabled>
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="LTC">LTC</option>
                        <option value="DOGE">DOGE</option>
                      </Select>
                    </Flex>
                  </>
                )
              }

              {/* Fixed */}
              {
                selectedMethod === 'fixed' && (
                  <>
                    <Flex sx={CreateItemPageStyles.textStyles.headerText}>Fixed Price<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text>
                    </Flex>

                    <Flex>
                      <Input placeholder="Enter amount" />
                      <Select>
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="LTC">LTC</option>
                        <option value="DOGE">DOGE</option>
                      </Select>
                    </Flex>
                  </>
                )
              }

              {/* Auction */}
              {
                selectedMethod === 'auction' && (
                  <>
                    <Flex sx={CreateItemPageStyles.textStyles.headerText}>Initial auction price<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text>
                    </Flex>

                    <Flex>
                      <Input placeholder="0" type="number" />
                      <Select>
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="LTC">LTC</option>
                        <option value="DOGE">DOGE</option>
                      </Select>
                    </Flex>
                  </>
                )
              }


            </Box>

            {/* supply */}
            <Box mb={'9'}>
              <Flex sx={CreateItemPageStyles.textStyles.headerText}>Supply<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input placeholder="1" sx={CreateItemPageStyles.inputStyles} border={'none'} size="lg" />
            </Box>
          </Flex>

          {/* royalties */}
          <Box mb={'9'}>
            <Flex sx={CreateItemPageStyles.textStyles.headerText}>Royalties<Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="Maximum is 70%" sx={CreateItemPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* Collection */}
          <Box mb={'9'}>
            <Flex sx={CreateItemPageStyles.textStyles.headerText} alignItems={'center'}
            >Collection
              <Text sx={CreateItemPageStyles.textStyles.requiredIconStyles}
              >*</Text>
              <Popover placement="top-start">
                <PopoverTrigger>
                  <Button><AiOutlineInfoCircle /> </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold">About the collection</PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody sx={CreateItemPageStyles.textStyles.selectText}>
                    <Text fontSize={'12px'}>
                      If you want to create a new collection that will automatically appear in the list below, please visit
                    </Text>
                    <Link to="/test">
                      <Text color={'blue.400'}>
                        this page
                      </Text>
                    </Link>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>

            <Select sx={CreateItemPageStyles.textStyles.selectText}>
              <option value="ETH">Collection first</option>
              <option value="BTC">Collection second</option>
              <option value="LTC">Collection third</option>
              <option value="DOGE">Collection fourth</option>
            </Select>
          </Box>


        </Box>
      </Flex >
      <Box w={'full'} h={'100px'} mt={'25px'} mb={'100px'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}><PrimaryBtn>Explore</PrimaryBtn></Box>

    </MainLayout >
  )
}

export default CreateItemPage