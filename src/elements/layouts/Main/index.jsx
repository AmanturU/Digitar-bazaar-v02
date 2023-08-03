import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Navbar from '../../../components/main/Navbar'
import Footer from '../../../components/main/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction, setUser } from 'store/slices/user'

const MainLayout = (props) => {
  const { PageHeadline, textPathFirst, textPathSecond, children, minHehe, ...restProps } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(s => s.User)
  const access_auth = localStorage.getItem('access_auth')

  const { userData } = useSelector(s => s.User)

  React.useEffect(() => {
    if (!access_auth) return

    if (!user) {
      const decodedToken = JSON.parse(atob(access_auth.split('.')[1]))

      // Получаем user_id из объекта с информацией о пользователе
      const user_id = decodedToken.user_id

      dispatch(setUser(user_id))
      dispatch(getUserAction(user_id))
    }
  }, [user, access_auth])

  const bgStandardImg = 'url(https://s3-alpha-sig.figma.com/img/90c1/c47f/757c88402ba1acb3cd63b2833bd2a4cd?Expires=1691366400&Signature=aQsHHIbgPRiz4dF~TxU-qhwvJd3Q3wSAtQej9yQvhsGIrwOptqe12ij90X3w-E20BQfphFSButQc3aQVnLjrg8UiUcz3nlgX6Jw4MzxmXtEfklQKo701lHbI87eRvBfFqGPVllCMGCUdLdVJbb94mVnmJ6Z66UcgPoHyy5ahNNL-CrWvdwrZTNeHUmvhqHQ2MWXVEJFUc8GFPZnfz3oCiryclOBiWX8jlsQEFbzozqq~h-bxgOdQ-WVWNfpPhOUhTApj0~mWYJp7i0-oatF8lu1JSwxSiUhYiVkDnFoZG9ENagOZA7LnWj~u4dEQqxshnQsP0mfVjt7k9ETpj0gvcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) center/cover no-repeat'

  const basicBoxStyles = {
    width: 'full',
    height: '367px',
    background: userData?.cover_image ? `url(${userData.cover_image}) center/cover no-repeat` : bgStandardImg,
    flexShrink: 0,
  }

  const headerStyles = {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
  }
  const headlineTextStyles = {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '52px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '78px',
  }
  const textStylesFirst = {
    color: 'rgba(255, 255, 255, 0.50)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  }
  const textStylesSecond = {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  }
  const BoxFill = {
    background: '#f5f7fa',
  }



  return (
    <Box w={'full'} h={'full'} m={0} p={0} backgroundColor={'#e3e3e3'}>
      {/* Header */}
      <Box sx={basicBoxStyles}  >
        <Box h={'full'} backdropFilter="auto"
          backdropBlur="3px">
          <Navbar />

          <Box sx={headerStyles} pt={'24'} >
            <Text sx={headlineTextStyles}>{PageHeadline ? PageHeadline : 'Unknown'}</Text>
            <Flex w={'full'} justifyContent={'center'} alignItems={'center'} >
              <Text sx={textStylesFirst}>{textPathFirst ? textPathFirst : 'Empty'}ㅤ/ㅤ</Text>
              <Text sx={textStylesSecond}>{textPathSecond ? textPathSecond : 'Empty page'}</Text>
            </Flex>
          </Box>

        </Box>
      </Box>

      <Box minH={minHehe ? minHehe : '100vh'}>
        {
          access_auth ? children : <Flex>You do not have access to this page, please<Link to="/auth/signup"><Text ml={'2'} color={'blue.500'} _hover={{ as: 'u' }}>Sign In</Text></Link></Flex>
        }
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout