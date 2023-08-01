import React, { useState } from 'react'
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { pocketbase, serverbase } from 'api'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction, resetUpdateUserPassword, updateUserPasswordAction } from 'store/slices/user'
import DropzoneComponent from 'components/dragndrop'
import SecondBtn from 'components/Buttons/SecondBtn'
import { decodeJWT } from 'hooks/idDecodeJWT'
import { Forms } from 'helpers/Forms'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { STATUS } from 'store/statuses'
import { signOut } from 'store/slices/auth'
import { useNavigate } from 'react-router-dom'

export const UpdatePasswordModal = ({
  onClose,
  isOpen,
}) => {
  const EditPageStyles = {
    inputStyles: {
      padding: '17px 20px',
      borderRadius: '20px',
      background: 'rgba(217, 217, 217, 0.20)',
      // marginBottom: '15px',
    },
    textStyles: {
      headingText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '30px',
        // marginBottom: '15px',
      },
      headerText: {
        color: '#000',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '17px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px',
        marginBottom: '10px',
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
  }

  const access_auth = localStorage.getItem('access_auth')

  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()

  // const [userIdJWT, setUserIdJWT] = useState(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [showPassword3, setShowPassword3] = useState(false)
  // const [uploadedFile, setUploadedFile] = useState(null)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const {
    updateUserPasswordStatus,
    updateUserPasswordError,
  } = useSelector(s => s.User)

  const [isPasswordUpdated, setIsPasswordUpdated] = React.useState(false)

  React.useEffect(() => {
    if (updateUserPasswordStatus === STATUS.FAILED) {
      toast({
        title: 'Error when trying to update user password',
        description: updateUserPasswordError,
        status: 'error',
        duration: '4000',
        isClosable: true,
        position: 'top-left',
      })
    } else if (updateUserPasswordStatus === STATUS.SUCCEEDED && !isPasswordUpdated) {
      toast({
        title: 'The request when trying to update the users password was successful',
        description: 'Your password has been successfully updated, please re-login to your account',
        status: 'success',
        duration: '4000',
        isClosable: true,
        position: 'top-left',
      })

      setIsPasswordUpdated(true)

      navigate('/auth/')

      localStorage.removeItem('access_auth')
      localStorage.removeItem('refresh_auth')

      dispatch(signOut())
      dispatch(resetUpdateUserPassword())
    }
  }, [toast, updateUserPasswordStatus, updateUserPasswordError, isPasswordUpdated])

  const onSubmit = (data) => {
    dispatch(updateUserPasswordAction({ userId: decodeJWT(access_auth), formData: data, token: access_auth }))
  }



  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader sx={EditPageStyles.textStyles.headingText} fontSize={'24px'} >Updating the account password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit()}>
            {/* First password */}
            <FormControl isInvalid={errors.password} marginBottom={'4'}>
              <Flex sx={EditPageStyles.textStyles.headerText}>
                Current password
              </Flex>
              <InputGroup>
                <Input
                  {...register('password', Forms.Rules.Auth.Password)}
                  type={showPassword1 ? 'text' : 'password'}
                  sx={EditPageStyles.inputStyles}
                  border={'none'}
                  size="lg"
                />
                {/* show password button */}
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword1((show) => !show)}
                  >
                    {showPassword1 ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            {/* New password */}
            <FormControl isInvalid={errors.new_password1} marginBottom={'4'}>
              <Flex sx={EditPageStyles.textStyles.headerText}>
                New password<Text sx={EditPageStyles.textStyles.requiredIconStyles}>*</Text>
              </Flex>
              <InputGroup>
                <Input
                  {...register('new_password1', Forms.Rules.Auth.Password)}
                  type={showPassword2 ? 'text' : 'password'}
                  sx={EditPageStyles.inputStyles}
                  border={'none'}
                  size="lg"
                />
                {/* show password button */}
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword2((show) => !show)}
                  >
                    {showPassword2 ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.new_password1 && errors.new_password1.message}
              </FormErrorMessage>
            </FormControl>

            {/* Confirm the new password */}
            <FormControl mb={'9'} isInvalid={errors.new_password2} marginBottom={'4'}>
              <Flex sx={EditPageStyles.textStyles.headerText}>
                Confirm the new password
              </Flex>
              <InputGroup>
                <Input
                  {...register('new_password2', Forms.Rules.Auth.Password)}
                  type={showPassword3 ? 'text' : 'password'}
                  sx={EditPageStyles.inputStyles}
                  border={'none'}
                  size="lg"
                />
                {/* show password button */}
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword3((show) => !show)}
                  >
                    {showPassword3 ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.new_password2 && errors.new_password2.message}
              </FormErrorMessage>
            </FormControl>

          </form>
        </ModalBody>

        <ModalFooter>

          <Button
            size="lg"
            colorScheme="pink"
            onClick={handleSubmit(onSubmit)}
            // isDisabled={!isDirty}
            isLoading={isSubmitting}
            mx={'4'}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}