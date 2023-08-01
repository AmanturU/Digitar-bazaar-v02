import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { pocketbase, serverbase } from 'api'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from 'store/slices/user'
import DropzoneComponent from 'components/dragndrop'
import SecondBtn from 'components/Buttons/SecondBtn'
import { decodeJWT } from 'hooks/idDecodeJWT'

export const ChangeCoverModal = ({
  onClose,
  isOpen,
}) => {
  const headerText = {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    marginTop: '15px',
    marginBottom: '30px',
  }

  const access_auth = localStorage.getItem('access_auth')

  const dispatch = useDispatch()
  const toast = useToast()

  const [userIdJWT, setUserIdJWT] = useState(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)

  const {
    register,
    handleSubmit,
    formState: {
      isDirty,
    },
  } = useForm()

  React.useEffect(() => {
    setUserIdJWT(decodeJWT(access_auth))
  }, [access_auth])


  const onSubmit = React.useCallback(async (body) => {
    if (!userIdJWT) return

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      console.log(uploadedFile)
      formData.append('cover_image', uploadedFile)

      console.log(formData)
      const { data } = await serverbase.patch(`/users/${userIdJWT}/`, formData)

      if (data) {
        onClose()

        dispatch(getUserAction(userIdJWT))
      }
    } catch (error) {
      toast({
        title: 'Error sending',
        description: Object.values(error.response.data.data)[0].message,
        position: 'top',
        duration: 3000,
        colorScheme: 'red',
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [userIdJWT, dispatch, uploadedFile])



  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Changing the profile cover image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <DropzoneComponent
            padding="50px 120px"
            upload={setUploadedFile}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.56934 5C3.56934 2.79086 5.3602 1 7.56934 1H15.9125C16.9733 1 17.9908 1.42143 18.7409 2.17157L20.3978 3.82843C21.1479 4.57857 21.5693 5.59599 21.5693 6.65685V19C21.5693 21.2091 19.7785 23 17.5693 23H7.56934C5.3602 23 3.56934 21.2091 3.56934 19V5ZM19.5693 8V19C19.5693 20.1046 18.6739 21 17.5693 21H7.56934C6.46477 21 5.56934 20.1046 5.56934 19V5C5.56934 3.89543 6.46477 3 7.56934 3H14.5693V5C14.5693 6.65685 15.9125 8 17.5693 8H19.5693ZM19.4584 6C19.3602 5.7176 19.199 5.45808 18.9836 5.24264L17.3267 3.58579C17.1113 3.37035 16.8517 3.20914 16.5693 3.11094V5C16.5693 5.55228 17.0171 6 17.5693 6H19.4584Z" fill="#777E91" />
              <path d="M12.1866 9.07588C12.0686 9.12468 11.9581 9.19702 11.8622 9.29289L8.86223 12.2929C8.4717 12.6834 8.4717 13.3166 8.86223 13.7071C9.25275 14.0976 9.88592 14.0976 10.2764 13.7071L11.5693 12.4142V17C11.5693 17.5523 12.0171 18 12.5693 18C13.1216 18 13.5693 17.5523 13.5693 17V12.4142L14.8622 13.7071C15.2528 14.0976 15.8859 14.0976 16.2764 13.7071C16.667 13.3166 16.667 12.6834 16.2764 12.2929L13.2764 9.29289C12.9818 8.99825 12.549 8.92591 12.1866 9.07588Z" fill="#777E91" />
            </svg>
            <Text sx={headerText}>
              PNG, JPG, JPEG or GIF. Max size: 50MB
            </Text>
            <SecondBtn>Upload</SecondBtn>
          </DropzoneComponent>
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