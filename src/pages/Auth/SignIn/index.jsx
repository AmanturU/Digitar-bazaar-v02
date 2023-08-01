import React, { useEffect } from 'react'
import { Forms } from 'helpers/Forms'


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { selectAccessToken, signInAction } from 'store/slices/auth'
import { STATUS } from 'store/statuses'
import { decodeJWT } from 'hooks/idDecodeJWT'

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userIdNav, setUserIdNav] = useState(null)
  const [userIdJWT, setUserIdJWT] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const access_auth = localStorage.getItem('access_auth')
  const [redirected, setRedirected] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const toast = useToast()

  const onSubmit = React.useCallback((data) => {
    const access_auth = localStorage.getItem('access_auth')

    if (access_auth && !redirected) {
      navigate('/')
      setRedirected(true)
    } else {
      dispatch(signInAction(data))
    }
  }, [dispatch, navigate, redirected])

  const {
    signInStatus,
    signInError,
    selectAccessToken,
  } = useSelector(s => s.Auth)

  React.useEffect(() => {
    const access_auth = localStorage.getItem('access_auth')
    if (signInStatus === STATUS.FAILED) {
      toast({
        title: 'Error logging in to the account',
        description: signInError,
        status: 'error',
        duration: '4000',
        isClosable: 'true',
        position: 'top-left',
      })
      return
    }

    if (signInStatus === STATUS.SUCCEEDED) {
      setUserIdJWT(decodeJWT(access_auth))
      onOpen()

      return
    }

  }, [navigate, toast, signInStatus, signInError])

  const handleCompleteProfile = () => {
    navigate(`/users/${userIdJWT}/settings`)
  }

  const handleProfileLater = () => {
    onClose()
    navigate('/')
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      boxShadow="dark-lg" rounded="md">

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign in
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to resume enjoying all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Box>
                {/* Username */}
                <FormControl isInvalid={errors.username}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...register('username', Forms.Rules.Auth.Username)
                    }
                  />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              {/* password */}
              <FormControl isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', Forms.Rules.Auth.Password)
                    }
                  />
                  {/* show password button */}
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {/* Submit */}
                <Button
                  loadingText="Submitting"
                  isLoading={signInStatus === STATUS.PENDING}
                  type="submit"
                  size="lg"
                  bg={'#FE3796'}
                  color={'white'}
                  _hover={{
                    bg: '#D92770',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Flex align={'center'}>
                  Don&apos;t have an account? <Link to="/auth/signup"><Text ml={'2'} color={'blue.400'}>Sign up</Text></Link>
                </Flex>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Modal isCentered isOpen={isOpen} size={'xl'}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="10%"
          backdropBlur="8px"
        />
        <ModalContent>
          <ModalHeader color="#FE3796" fontFamily="Plus Jakarta Sans" fontSize="20px" fontStyle="normal" fontWeight="700" lineHeight="24px">
            Welcome to Our NFT Marketplace!
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box fontFamily="Plus Jakarta Sans" fontSize="16px" fontStyle="normal" fontWeight="600" lineHeight="21px">
              Regardless of whether you are new to our site or experienced users, we offer you the opportunity to supplement your profile with additional information or update it.
            </Box>

            <Box fontFamily="Plus Jakarta Sans" fontSize="16px" fontStyle="normal" fontWeight="600" lineHeight="21px" mt="4">
              Share your interests, favorite artists, and more to connect with the NFT community.
            </Box>

            <Box fontFamily="Plus Jakarta Sans" fontSize="16px" fontStyle="normal" fontWeight="600" lineHeight="21px" mt="4">
              Let&apos;s explore our NFT marketplace together and discover unique digital assets! Whenever you are ready, head to the &apos;Complete Profile&apos; page to dive into the world of NFTs.
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" onClick={handleProfileLater}>
              Complete Profile Later
            </Button>
            <Button colorScheme="pink" onClick={handleCompleteProfile}>
              Go to Complete Profile
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default SignInPage