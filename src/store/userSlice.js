import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null
  },
  reducers: {
    logout: state => {
      state.auth = null
    },
    saveUser: (state, action) => {
      console.log('redux', action)
      state.auth = action.payload
    },
  }
})

export const selectUser = state => state.user?.auth ?? false
export const selectAuthed = state => state.user?.auth?.user?.id

export const {
  logout,
  saveUser
} = userSlice.actions

export default userSlice.reducer