import React, { useState } from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Avatar, Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text, Textarea } from '@chakra-ui/react'
import SecondBtn from '../../components/Buttons/SecondBtn'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'

const EditProfilePage = () => {

  const EditPageStyles = {
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



  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageSelect = (image) => {
    setSelectedImage(image)
  }

  return (
    <MainLayout PageHeadline="Edit Profile" textPathFirst="Home" textPathSecond="Edit Profile">
      <Flex mt={'60px'} px={'26.5%'}>
        {/* leftMainBlock */}
        <Flex>
          <Avatar size={'xl'} w={'128px'} h={'128px'} name="Art Bit" bgColor={'pink.600'} color={'white'} />

          <Box mx={'30px'}>
            <Text sx={EditPageStyles.textStyles.headerText}>Profile photo</Text>
            <Text sx={EditPageStyles.leftBlock.grayText} w={'150px'} my={'10px'}>We recommend an image
              of at least 400x400. <br /> Gifs work too 🙌</Text>
            <SecondBtn>Upload</SecondBtn>
          </Box>
        </Flex>

        {/* RightMainBlock */}
        <Box ml={'10px'}>
          {/* Bg upload */}
          <Box mb={'8'}>
            <Text sx={EditPageStyles.textStyles.headerText}>Choose Your Cover Image</Text>
            <Box display="flex" justifyContent="center" >
              <Box sx={EditPageStyles.rightBlock.uploadButtonbgSelect}
                mr={'4'}
                boxShadow={selectedImage === 'image1' ? 'outline' : '0'}
                rounded="3xl"
                onClick={() => handleImageSelect('image1')}
              >
                <SecondBtn>Upload</SecondBtn>
              </Box>
              <Image
                sx={EditPageStyles.rightBlock.bgSelectStyles}
                mr={'4'}
                boxShadow={selectedImage === 'image2' ? 'outline' : '0'}
                rounded="3xl"
                onClick={() => handleImageSelect('image2')}
                src="https://cdn.discordapp.com/attachments/745308902584877181/1130841567473717329/Rectangle_3857.png"
              />
              <Image
                sx={EditPageStyles.rightBlock.bgSelectStyles}
                boxShadow={selectedImage === 'image3' ? 'outline' : '0'}
                rounded="3xl"
                onClick={() => handleImageSelect('image3')}
                src="https://media.discordapp.net/attachments/745308902584877181/1130841567838609478/Rectangle_3858.png"
              />
            </Box>
          </Box>

          {/* display name */}
          <Box mb={'9'}>
            <Flex sx={EditPageStyles.textStyles.headerText}>Display name<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="e.g: Mark Basa" sx={EditPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* username */}
          <Box mb={'9'}>
            <Flex sx={EditPageStyles.textStyles.headerText}>Username<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="e.g: @markbasa" sx={EditPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* custom url */}
          <Box mb={'9'}>
            <Flex sx={EditPageStyles.textStyles.headerText}>Custom URL<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="e.g: https://yoursite.io" sx={EditPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* email */}
          <Box mb={'9'}>
            <Flex sx={EditPageStyles.textStyles.headerText}>Email<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Input placeholder="e.g: Markbasa@gmail.com" sx={EditPageStyles.inputStyles} border={'none'} size="lg" />
          </Box>

          {/* short bio */}
          <Box mb={'9'}>
            <Flex sx={EditPageStyles.textStyles.headerText}>Short Bio<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
            <Textarea placeholder="e.g: I’m an entreprenuer" sx={EditPageStyles.inputStyles} border={'none'} size="lg" rows={'8'} />
          </Box>

          {/* social links */}
          <Box mb={'9'}>
            <Text sx={EditPageStyles.textStyles.headerText}>Social Links</Text>
            <Text sx={EditPageStyles.leftBlock.grayText}>Add your existing social links to build a stronger reputation</Text>

            <Text sx={EditPageStyles.textStyles.secondHeaderText}>Facebook</Text>
            <InputGroup size="md" display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Input
                sx={EditPageStyles.inputStyles} border={'none'} size="lg"
                placeholder="e.g: @MarkBasa"
              />
              <InputRightElement width="7rem">
                <Button h="1.75rem" size="md">
                  Connect
                </Button>
              </InputRightElement>
            </InputGroup>

            <Text sx={EditPageStyles.textStyles.secondHeaderText}>Twitter</Text>
            <InputGroup size="md" display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Input
                sx={EditPageStyles.inputStyles} border={'none'} size="lg"
                placeholder="e.g: @MarkBasa"
              />
              <InputRightElement width="7rem">
                <Button h="1.75rem" size="md">
                  Connect
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Flex>
      <Box w={'full'} h={'100px'} mt={'25px'} mb={'100px'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}><PrimaryBtn>Save Settings</PrimaryBtn></Box>

    </MainLayout >
  )

}

export default EditProfilePage