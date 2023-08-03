import React from 'react'

import { pocketbase, serverbase } from 'api'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BOOL_STATUS } from 'store/statuses'
import { getUserAction } from 'store/slices/user'
import { decodeJWT } from 'hooks/idDecodeJWT'

export const useWatchingUser = () => {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [isLoadingWatchingUser, setIsLoadingWatchingUser] = React.useState(false)
  const [isMyProfile, setIsMyProfile] = React.useState(BOOL_STATUS.UNKNOWN)
  const access_auth = localStorage.getItem('access_auth')

  const dispatch = useDispatch()

  const { userData } = useSelector(s => s.User)

  React.useEffect(() => {
    if (!access_auth) return

    if (!userData) {
      const user_id = decodeJWT(access_auth)
      dispatch(getUserAction(user_id))
    }
  }, [userData, access_auth])

  const { id } = useParams()
  const watchingUser = userData


  const getWatchingUser = React.useCallback(async (userId) => {
    setIsLoadingWatchingUser(true)

    try {
      const { data } = await serverbase.get(`/users/${userId}/`)

      setCurrentUser(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingWatchingUser(false)
    }
  }, [setIsLoadingWatchingUser])

  React.useEffect(() => {
    if (!id) return

    getWatchingUser(id)
  }, [id])

  React.useEffect(() => {
    if (!watchingUser) return
    if (!currentUser) return

    if (watchingUser.id === currentUser.id) {
      setIsMyProfile(BOOL_STATUS.TRUE)
    } else {
      setIsMyProfile(BOOL_STATUS.FALSE)
    }
  }, [setIsMyProfile, currentUser, watchingUser])

  return {
    isMyProfile,
    currentUser,
    watchingUser,
    isLoadingWatchingUser,
  }
}