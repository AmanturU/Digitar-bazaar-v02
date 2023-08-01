import React, { useState } from 'react'
import MainLayout from 'elements/layouts/Main'
import { Avatar, Box, Button, Flex, FormControl, FormErrorMessage, Image, Input, InputGroup, InputRightElement, Text, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import SecondBtn from 'components/Buttons/SecondBtn'
import PrimaryBtn from 'components/Buttons/PrimaryBtn'
import { useDispatch, useSelector } from 'react-redux'
import DropzoneComponent from 'components/dragndrop'
import ThirdBtn from 'components/Buttons/ThirdBtn'
import { useForm } from 'react-hook-form'
import { Forms } from 'helpers/Forms'
import { ChangeAvatarModal } from './components/modalAvatar'
import { getUserAction, updateUserAction } from 'store/slices/user'
import { decodeJWT } from 'hooks/idDecodeJWT'
import { STATUS } from 'store/statuses'
import { ChangeCoverModal } from './components/modalCover'
import { MdPassword } from 'react-icons/md'
import { UpdatePasswordModal } from './components/modalUpdatePassword'
import NextAction from './components/modalNextAction'

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
      header2Text: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '30px',
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

  const {
    isOpen: isOpenAvatarModal,
    onClose: onCloseAvatarModal,
    onOpen: onOpenAvatarModal,
  } = useDisclosure()
  const {
    isOpen: isOpenCoverModal,
    onClose: onCloseCoverModal,
    onOpen: onOpenCoverModal,
  } = useDisclosure()
  const {
    isOpen: isOpenPasswordModal,
    onClose: onClosePasswordModal,
    onOpen: onOpenPasswordModal,
  } = useDisclosure()
  const {
    isOpen: isOpenActionModal,
    onClose: onCloseActionModal,
    onOpen: onOpenActionModal,
  } = useDisclosure()

  const dispatch = useDispatch()
  const [userIdJWT, setUserIdJWT] = useState(null)
  const { userData } = useSelector(s => s.User)
  const toast = useToast()
  const access_auth = localStorage.getItem('access_auth')

  React.useEffect(() => {
    setUserIdJWT(decodeJWT(access_auth))
  }, [access_auth])
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(updateUserAction({ userId: decodeJWT(access_auth), formData: data }))
  }

  const {
    updateUserStatus,
    updateUserError,
  } = useSelector(s => s.User)

  React.useEffect(() => {
    if (updateUserStatus === STATUS.FAILED) {
      toast({
        title: 'Error when trying to update user data',
        description: updateUserError,
        status: 'error',
        duration: '4000',
        isClosable: 'true',
        position: 'top-left',
      })
      return
    }

    if (updateUserStatus === STATUS.SUCCEEDED) {
      toast({
        title: 'The request when trying to update the users data was successful',
        description: updateUserStatus,
        status: 'success',
        duration: '4000',
        isClosable: 'true',
        position: 'top-left',
      })
      onOpenActionModal()
      return
    }

  }, [toast, updateUserStatus, updateUserError])


  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageSelect = (image) => {
    setSelectedImage(image)
  }

  return (
    <MainLayout PageHeadline="Edit Profile" textPathFirst="Home" textPathSecond="Edit Profile">
      <ChangeAvatarModal
        isOpen={isOpenAvatarModal}
        onClose={onCloseAvatarModal}
      />
      <ChangeCoverModal
        isOpen={isOpenCoverModal}
        onClose={onCloseCoverModal}
      />
      <UpdatePasswordModal
        isOpen={isOpenPasswordModal}
        onClose={onClosePasswordModal}
      />
      <NextAction
        isOpen={isOpenActionModal}
        onClose={onCloseActionModal}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt={'60px'} px={'26.5%'}>
          {/* leftMainBlock */}
          <Box>
            <Flex mb={'8'}>
              <Avatar size={'xl'} w={'128px'} h={'128px'} name={userData?.display_name} src={userData?.avatar} bgColor={'pink.600'} color={'white'} />
              <Box mx={'30px'}>
                <Box m={'2'}>
                  <Text sx={EditPageStyles.textStyles.headerText} mb={'15px'}>Profile photo</Text>
                  <Text sx={EditPageStyles.leftBlock.grayText} w={'150px'} my={'10px'}>We recommend an image
                    of at least 400x400. <br /> Gifs work too 🙌</Text>
                  <SecondBtn onClick={onOpenAvatarModal}>Upload</SecondBtn>
                </Box>
              </Box>
            </Flex>

            <Flex alignItems={'center'}>
              <Text sx={EditPageStyles.textStyles.header2Text} mr={'3'}>Update password</Text>
              <SecondBtn padding="10px" onClick={onOpenPasswordModal}><MdPassword /></SecondBtn>
            </Flex>
          </Box>

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
                  <DropzoneComponent>
                    <ThirdBtn onClick={onOpenCoverModal}>Upload</ThirdBtn>
                  </DropzoneComponent>
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
            <FormControl mb={'9'} isInvalid={errors.display_name}>
              <Flex sx={EditPageStyles.textStyles.headerText}>Display name<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input
                {...register('display_name', Forms.Rules.Auth.nonDisplayname)
                }
                placeholder={userData?.display_name}
                sx={EditPageStyles.inputStyles}
                border={'none'}
                // value={userData?.display_name}
                size="lg"
              />
              <FormErrorMessage>
                {errors.display_name && errors.display_name.message}
              </FormErrorMessage>
            </FormControl>

            {/* username */}
            <FormControl mb={'9'} isInvalid={errors.username}>
              <Flex sx={EditPageStyles.textStyles.headerText}>Username<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input
                {...register('username', Forms.Rules.Auth.nonUsername)
                }
                placeholder={userData?.username}
                sx={EditPageStyles.inputStyles}
                // value={userData?.username}
                border={'none'}
                size="lg"
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>

            {/* custom url */}
            <FormControl mb={'9'} isInvalid={errors.url}>
              <Flex sx={EditPageStyles.textStyles.headerText}>Custom URL</Flex>
              <Input

                {...register('url')
                }
                type="url"
                placeholder={userData?.url}
                sx={EditPageStyles.inputStyles}
                border={'none'}
                size="lg"
              />
              <FormErrorMessage>
                {errors.url && errors.url.message}
              </FormErrorMessage>
            </FormControl>

            {/* {...register('avatar', uploadedFile)
            } */}
            {/* email */}
            <FormControl mb={'9'} isInvalid={errors.email}>
              <Flex sx={EditPageStyles.textStyles.headerText}>Email<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Input
                type="email"
                {...register('email', Forms.Rules.Auth.nonEmail)
                }
                placeholder={userData?.email}
                // value={userData?.email}
                sx={EditPageStyles.inputStyles}
                border={'none'}
                size="lg"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* short bio */}
            <FormControl mb={'9'} isInvalid={errors.description}>
              <Flex sx={EditPageStyles.textStyles.headerText}>Short Bio<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text></Flex>
              <Textarea
                {...register('description')
                }
                placeholder={userData?.description === null ? 'e.g: I’m an entreprenuer' : userData?.description}
                sx={EditPageStyles.inputStyles}
                border={'none'}
                size="lg"
                rows={'8'}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            {/* social links */}
            <FormControl mb={'9'}>
              <Text sx={EditPageStyles.textStyles.headerText}>Social Links</Text>
              <Text sx={EditPageStyles.leftBlock.grayText}>Add your existing social links to build a stronger reputation</Text>


              <FormControl isInvalid={errors.telegram}>
                <Text sx={EditPageStyles.textStyles.secondHeaderText}>Telegram</Text>
                <Input
                  type="url"
                  {...register('telegram')
                  }
                  placeholder={userData?.telegram === null ? 'e.g: https://t.me/username' : userData?.url}
                  sx={EditPageStyles.inputStyles}
                  border={'none'}
                  size="lg"
                />
                <FormErrorMessage>
                  {errors.telegram && errors.telegram.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.facebook}>
                <Text sx={EditPageStyles.textStyles.secondHeaderText}>Facebook</Text>
                <Input
                  type="url"
                  {...register('facebook')
                  }
                  placeholder={userData?.facebook === null ? 'e.g: https://www.facebook.com/username' : userData?.url}
                  sx={EditPageStyles.inputStyles}
                  border={'none'}
                  size="lg"
                />
                <FormErrorMessage>
                  {errors.facebook && errors.facebook.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.instagram}>
                <Text sx={EditPageStyles.textStyles.secondHeaderText}>Instagram</Text>
                <Input
                  type="url"
                  {...register('instagram')
                  }
                  placeholder={userData?.facebook === null ? 'e.g: https://www.instagram.com/username' : userData?.url}
                  sx={EditPageStyles.inputStyles}
                  border={'none'}
                  size="lg"
                />
                <FormErrorMessage>
                  {errors.instagram && errors.instagram.message}
                </FormErrorMessage>
              </FormControl>

            </FormControl>
          </Box>
        </Flex>
        <Box w={'full'} h={'100px'} mt={'25px'} mb={'100px'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
          <PrimaryBtn type="submit">Save Settings</PrimaryBtn>
        </Box>
      </form>
    </MainLayout >
  )

}

export default EditProfilePage