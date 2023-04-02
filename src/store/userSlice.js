import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false
  },
  reducers: {
    logout: state => {
      state.auth = false
    },
    saveUser: (state, action) => {
      state.auth = action.payload ?? false
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