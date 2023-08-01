import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { serverbase } from 'api'
import { STATUS } from 'store/statuses'



const initialState = {
  // user
  user_id: null,
  userData: null,
  getUserStatus: STATUS.IDLE,
  getUserError: null,

  updateUserStatus: STATUS.IDLE,
  updateUserError: null,

  updateUserPasswordStatus: STATUS.IDLE,
  updateUserPasswordError: null,
}

export const getUserAction = createAsyncThunk('users/getOne', async (userId) => {
  try {
    const { data } = await serverbase.get(`/users/${userId}`)
    return data
  } catch (error) {
    throw new Error(Object.values(error.response.data.data)[0].message)
  }
})

export const updateUserAction = createAsyncThunk('users/update', async ({ userId, formData }) => {
  try {
    // Фильтруем объект с заполненными полями
    const filledData = {}
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== '') {
        filledData[key] = formData[key]
      }
    })
    console.log(filledData)
    // Отправляем PATCH запрос с данными с заполненными полями
    const { data } = await serverbase.patch(`/users/${userId}/`, filledData)
    return data
  } catch (error) {
    throw new Error(Object.values(error.response.data.data)[0].message)
  }
})

export const updateUserPasswordAction = createAsyncThunk(
  'users/updatePassword',
  async ({ userId, formData, token }) => {

    const formattedToken = token.replace(/"/g, '')

    try {
      // Опции для запроса
      const options = {
        method: 'PATCH',
        url: `/users/${userId}/update_password/`,
        data: formData,
        headers: {
          Authorization: `Bearer ${formattedToken}`, // Добавляем токен в заголовок
        },
      }
      const { data } = await serverbase(options) // Используем serverbase с переданными опциями

      return data
    } catch (error) {
      throw new Error(Object.values(error.response.data.data)[0].message)
    }
  },
)

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user_id = action.payload
    },
    resetUpdateUser: (state) => {
      state.updateUserError = null
      state.updateUserStatus = STATUS.IDLE
    },
    resetUpdateUserPassword: (state) => {
      state.updateUserPasswordStatus = STATUS.IDLE
      state.updateUserPasswordError = null
    },
  },
  extraReducers: (builder) => {
    builder
      // get USER action
      .addCase(getUserAction.pending, (state) => {
        state.getUserStatus = STATUS.PENDING
        state.getUserError = null
      })
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.getUserStatus = STATUS.SUCCEEDED
        state.getUserError = null
        state.userData = action.payload
      })
      .addCase(getUserAction.rejected, (state, action) => {
        state.getUserStatus = STATUS.FAILED
        state.getUserError = action.error.message
      })

      // update USER action
      .addCase(updateUserAction.pending, state => {
        state.updateUserStatus = STATUS.PENDING
        state.updateUserError = null
      })
      .addCase(updateUserAction.fulfilled, (state, action) => {
        state.updateUserStatus = STATUS.SUCCEEDED
        state.users = action.payload
        state.updateUserError = null
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        state.updateUserStatus = STATUS.FAILED
        state.updateUserError = action.error.message
      })

      // update USER PASSWORD action
      .addCase(updateUserPasswordAction.pending, state => {
        state.updateUserPasswordStatus = STATUS.PENDING
        state.updateUserPasswordError = null
      })
      .addCase(updateUserPasswordAction.fulfilled, (state, action) => {
        state.updateUserPasswordStatus = STATUS.SUCCEEDED
        state.users = action.payload
        state.updateUserPasswordError = null
      })
      .addCase(updateUserPasswordAction.rejected, (state, action) => {
        state.updateUserPasswordStatus = STATUS.FAILED
        state.updateUserPasswordError = action.error.message
      })
  },
})


export const { setUser, resetUpdateUser, resetUpdateUserPassword } = userSlice.actions

export default userSlice.reducer