import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL, serverbase } from 'api'

import { STATUS } from 'store/statuses'
import { setUser } from './user'

const initialState = {
  // sign up
  signUpData: null,
  signUpStatus: STATUS.IDLE,
  signUpError: null,

  // sign in
  signInData: null,
  signInStatus: STATUS.IDLE,
  signInError: null,

  accessToken: null,
  refreshToken: null,
}


// signUpAction
export const signUpAction = createAsyncThunk('auth/signup', async (body) => {
  try {

    await serverbase.post('/users/', body)

    return body
  } catch (error) {
    throw new Error(Object.values(error.response.data.data)[0].message)
  }
})

// signInAction
export const signInAction = createAsyncThunk('auth/signin', async (body, thunkAPI) => {
  try {
    const { data } = await serverbase.post('/token/create/', body)

    const {
      access,
      refresh,
    } = data

    localStorage.setItem('access_auth', JSON.stringify(access))
    localStorage.setItem('refresh_auth', JSON.stringify(refresh))

    const decodedToken = JSON.parse(atob(access.split('.')[1]))

    // Получаем user_id из объекта с информацией о пользователе
    const user = decodedToken.user_id

    thunkAPI.dispatch(setUser(user))


    return data
  } catch (error) {
    throw new Error(Object.values(error.response.data.data)[0].message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignUpData: (state, action) => {
      state.signUpData = action.payload
    },
    signOut: (state) => {
      state.signInError = null
      state.signInStatus = STATUS.IDLE

      state.signUpData = null

      state.signUpError = null
      state.signUpStatus = STATUS.IDLE
    },
  },
  extraReducers: (builder) => {
    builder
      // signUp
      .addCase(signUpAction.pending, state => {
        state.signUpStatus = STATUS.PENDING
        state.signUpError = null
      })
      .addCase(signUpAction.fulfilled, state => {
        state.signUpStatus = STATUS.SUCCEEDED
        state.signUpError = null
      })
      .addCase(signUpAction.rejected, (state, action) => {
        state.signUpStatus = STATUS.FAILED
        state.signUpError = action.error.message
      })

      // signUp
      .addCase(signInAction.pending, state => {
        state.signInStatus = STATUS.PENDING
        state.signInError = null
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.signInStatus = STATUS.SUCCEEDED
        state.signInError = null
        state.accessToken = action.payload.access
        state.refreshToken = action.payload.refresh
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.signInStatus = STATUS.FAILED
        state.signInError = action.error.message
      })
  },
})
export const selectAccessToken = (state) => state.auth.accessToken
// export const isAuthenticated = (state) => !!state.auth.accessToken

export const { setSignUpData, signOut } = authSlice.actions

export default authSlice.reducer