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

  createItemStatus: STATUS.IDLE,
  createItemError: null,

  createCollectionStatus: STATUS.IDLE,
  createCollectionError: null,

  collectionsData: null,
  getUserCollectionStatus: STATUS.IDLE,
  getUserCollectionError: null,
}

export const getUserAction = createAsyncThunk('users/getOne', async (userId) => {
  try {
    const { data } = await serverbase.get(`/users/${userId}`)
    return data
  } catch (error) {
    throw new Error(Object.values(error.response.data.data)[0].message)
  }
})

export const getUserCollectionsList = createAsyncThunk('user/collections', async (userId) => {
  try {
    const { data } = await serverbase.get('/collections_nft/')
    // const userCollections = data.filter((collection) => collection.owner === userId)
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

export const createItemAction = createAsyncThunk(
  'users/createItem',
  async ({ data, image, token }) => {

    const formData = new FormData()
    const formattedToken = token.replace(/"/g, '')

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
      formData.append('image', image)
      formData.append('collection_id', 1)
    })

    try {
      // Опции для запроса
      const options = {
        method: 'POST',
        url: '/nft/',
        data: formData,
        headers: {
          Authorization: `Bearer ${formattedToken}`, // Добавляем токен в заголовок
        },
      }
      console.log(formData)
      const { data } = await serverbase(options) // Используем serverbase с переданными опциями

      return data
    } catch (error) {
      throw new Error(Object.values(error.response.data.data)[0].message)
    }
  },
)

export const createCollectionAction = createAsyncThunk(
  'users/createCollection',
  async ({ data, image, token }) => {

    const formData = new FormData()
    const formattedToken = token.replace(/"/g, '')

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
      formData.append('image', image)
    })

    try {
      // Опции для запроса
      const options = {
        method: 'POST',
        url: '/collections_nft/',
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

      // Обработчик для createItemAction
      .addCase(createItemAction.pending, state => {
        state.createItemStatus = STATUS.PENDING
        state.createItemError = null
      })
      .addCase(createItemAction.fulfilled, (state) => {
        state.createItemStatus = STATUS.SUCCEEDED
        state.createItemError = null
      })
      .addCase(createItemAction.rejected, (state, action) => {
        state.createItemStatus = STATUS.FAILED
        state.createItemError = action.error.message
      })

      // Обработчик для createCollectionAction
      .addCase(createCollectionAction.pending, state => {
        state.createCollectionStatus = STATUS.PENDING
        state.createCollectionError = null
      })
      .addCase(createCollectionAction.fulfilled, (state) => {
        state.createCollectionStatus = STATUS.SUCCEEDED
        state.createCollectionError = null
      })
      .addCase(createCollectionAction.rejected, (state, action) => {
        state.createCollectionStatus = STATUS.FAILED
        state.createCollectionError = action.error.message
      })

      // get USER Collections
      .addCase(getUserCollectionsList.pending, (state) => {
        state.getUserCollectionStatus = STATUS.PENDING
        state.getUserCollectionError = null
      })
      .addCase(getUserCollectionsList.fulfilled, (state, action) => {
        state.getUserCollectionStatus = STATUS.SUCCEEDED
        state.getUserCollectionError = null
        state.collectionsData = action.payload
      })
      .addCase(getUserCollectionsList.rejected, (state, action) => {
        state.getUserCollectionStatus = STATUS.FAILED
        state.getUserCollectionError = action.error.message
      })
  },
})


export const { setUser, resetUpdateUser, resetUpdateUserPassword } = userSlice.actions

export default userSlice.reducer