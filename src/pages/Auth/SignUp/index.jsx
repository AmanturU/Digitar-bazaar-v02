import React from 'react'
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
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setSignUpData, signUpAction } from 'store/slices/auth'
import { STATUS } from 'store/statuses'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const onSubmit = React.useCallback((data) => {
    dispatch(setSignUpData(data))
    dispatch(signUpAction(data))
  }, [setSignUpData, signUpAction])

  const {
    signUpStatus,
    signUpError,
  } = useSelector(s => s.Auth)

  React.useEffect(() => {
    if (signUpStatus === STATUS.FAILED) {
      toast({
        title: 'Account registration error',
        description: signUpError,
        status: 'error',
        duration: '4000',
        isClosable: 'true',
        position: 'top-left',
      })
      return
    }

    if (signUpStatus === STATUS.SUCCEEDED) {
      navigate('/auth/signin')

      return
    }
  }, [navigate, toast, signUpStatus, signUpError])

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Join us to experience all the awesome features we offer ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <HStack>
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

                <Box>
                  {/* Display name */}
                  <FormControl isInvalid={errors.display_name}>
                    <FormLabel>Display name</FormLabel>
                    <Input
                      {...register('display_name', Forms.Rules.Auth.Displayname)
                      }
                    />
                    <FormErrorMessage>
                      {errors.display_name && errors.display_name.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>

              {/* email */}
              <FormControl isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  {...register('email', Forms.Rules.Auth.Email)
                  }
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
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
                  isLoading={signUpStatus === STATUS.PENDING}
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
              {/* transfer */}
              <Stack pt={6}>
                <Flex align={'center'}>
                  Already a user? <Link to="/auth/signin"><Text ml={'2'} color={'blue.400'}>Login</Text></Link>
                </Flex>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUpPage