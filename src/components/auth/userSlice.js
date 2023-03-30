import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    logout: state => {
      state.user = null
    },
    saveUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const selectUser = state => state.user.user

export const {
  logout,
  saveUser
} = userSlice.actions

export default userSlice.reducer