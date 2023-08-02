import React, { useState } from 'react'
import MainLayout from 'elements/layouts/Main'

import { Avatar, Box, Button, Flex, FormControl, FormErrorMessage, Image, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Text, Textarea, useToast } from '@chakra-ui/react'
import PrimaryBtn from 'components/Buttons/PrimaryBtn'
import CardNftTimeOff from 'components/Cards/CardNFT_timeOff'
import DropzoneComponent from 'components/dragndrop'
import ThirdBtn from 'components/Buttons/ThirdBtn'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SecondBtn from 'components/Buttons/SecondBtn'
import CardNftTimeOn from 'components/Cards/CardNFT_timeOn'
import { useForm } from 'react-hook-form'
import { Forms } from 'helpers/Forms'
import { useDispatch, useSelector } from 'react-redux'
import { decodeJWT } from 'hooks/idDecodeJWT'
import { createCollectionAction } from 'store/slices/user'
import { STATUS } from 'store/statuses'


const CreateCollectionPage = () => {

  const CreateCollectionPageStyles = {
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
        // marginBottom: '15px',
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
  const avatarImgUrl = 'https://s3-alpha-sig.figma.com/img/ff63/767a/ebbd76404340ee5ae9ebde9ad07b42f2?Expires=1691971200&Signature=qbnMeCRydjO18G1RMg6b9JjMaN8MVxS9-Cw0y-Xv8EvnT2Yran5yiw38HBKHZgmI4dPGId~EAFPa1PFWLNtm5VQh1INsePg4w~5j3-Kf7Q-dcA3qoCOINOIZJ3I7JM~2L~xiLKhbgDTUTU3ebeR9h1ung4049U8151fCupPKGcvsHuP~rCspMQZqrBWOFEBz5tSSjJQxjUX6ZKSDMS5EltsToYLp9s15ArCgF2pXLrH6M6ZbVOupy~NePiXJZu4m2I~GOAaQN1zKUBZN4WbUp~VL4z-vICJFCqklPB-xcIqfYn97BfsO5Y4EI3WAMhpCtjhf1NfpvQRTfo1hk2jGKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  const access_auth = localStorage.getItem('access_auth')

  const [selectedMethod, setSelectedMethod] = useState(null)
  const [uploadedFile, setUploadedFile] = useState(null)

  const dispatch = useDispatch()
  const toast = useToast()

  const {
    createCollectionStatus,
    createCollectionError,
  } = useSelector(s => s.User)

  React.useEffect(() => {
    if (createCollectionStatus === STATUS.FAILED) {
      toast({
        title: 'Error when trying to create a collection',
        description: createCollectionError,
        status: 'error',
        duration: '4000',
        isClosable: 'true',
        position: 'top-left',
      })
      return
    }

    if (createCollectionStatus === STATUS.SUCCEEDED) {
      toast({
        title: 'The query when attempting to create a collection was successful',
        description: createCollectionStatus,
        status: 'success',
        duration: '4000',
        isClosable: 'true',
        position: 'top-left',
      })
      return
    }

  }, [toast, createCollectionStatus, createCollectionError])


  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const onSubmit = React.useCallback(async (body) => {
    console.log(uploadedFile)
    console.log('-----------------------')
    dispatch(createCollectionAction({ data: body, image: uploadedFile, token: access_auth }))
  }, [access_auth, dispatch, createCollectionAction, uploadedFile])

  return (
    <MainLayout PageHeadline="Create Collection" textPathFirst="Home" textPathSecond="Create Collection" minHehe="60px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt={'60px'} px={'26.5%'}>
          {/* leftMainBlock */}
          <Box w={'38%'}>
            <Box>
              <Flex sx={CreateCollectionPageStyles.textStyles.headerText}>Upload Avatar <Text sx={CreateCollectionPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Text sx={CreateCollectionPageStyles.leftBlock.grayText} mt={'5px'} mb={'15px'}>Drag or choose your file to upload</Text>
            </Box>
            <DropzoneComponent
              padding="0 0 10px 0"
              upload={setUploadedFile}
            >
              <Image p={'10px'} borderRadius={'3xl'} src={avatarImgUrl} />
              {uploadedFile === null ? <SecondBtn>Upload</SecondBtn> : <PrimaryBtn>Uploaded</PrimaryBtn>}
            </DropzoneComponent>
          </Box>


          {/* RightMainBlock */}
          <Box ml={'35px'}>

            {/* title ++*/}
            <FormControl mb={'9'} isInvalid={errors.title}>
              <Flex sx={CreateCollectionPageStyles.textStyles.headerText}>Title<Text sx={CreateCollectionPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input
                {...register('title', Forms.Rules.Posts.Title)
                }
                sx={CreateCollectionPageStyles.inputStyles}
                border={'none'}
                size="lg"
                placeholder="e.g: https://yoursite.io/item/123"
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            {/* custom url ++*/}
            <FormControl mb={'9'} isInvalid={errors.external_link}>
              <Flex sx={CreateCollectionPageStyles.textStyles.headerText}>External Link<Text sx={CreateCollectionPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input
                type="url"
                {...register('external_link', Forms.Rules.Posts.Required)
                }
                sx={CreateCollectionPageStyles.inputStyles}
                border={'none'}
                size="lg"
                placeholder="e.g: https://yoursite.io/item/123"
              />
              <FormErrorMessage>
                {errors.external_link && errors.external_link.message}
              </FormErrorMessage>
            </FormControl>

            {/* despcription ++*/}
            <FormControl mb={'9'} isInvalid={errors.description}>
              <Flex sx={CreateCollectionPageStyles.textStyles.headerText}>Description<Text sx={CreateCollectionPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input
                {...register('description', Forms.Rules.Posts.Description)
                }
                sx={CreateCollectionPageStyles.inputStyles}
                border={'none'}
                size="lg"
                placeholder="e.g: https://yoursite.io/item/123"
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>


            {/* prices */}
            <Flex sx={CreateCollectionPageStyles.textStyles.headerText}>Fixed Price<Text sx={CreateCollectionPageStyles.textStyles.requiredIconStyles}>*</Text>
            </Flex>

            <Flex>
              <Input
                type="number"
                {...register('price', Forms.Rules.Posts.Required)
                }
                placeholder="Enter amount"
              />
              <Select
                {...register('blockchain', Forms.Rules.Posts.Required)
                }>
                <option value="ETH">ETH</option>
              </Select>
            </Flex>

          </Box>

        </Flex >
        <Box w={'full'} h={'100px'} mt={'25px'} mb={'100px'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}><PrimaryBtn type="submit">Explore</PrimaryBtn></Box>
      </form >
    </MainLayout >
  )
}

export default CreateCollectionPage