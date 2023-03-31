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
      state.auth = action.payload
    },
  }
})

export const selectUser = state => state.user?.auth ?? {user: null}
export const selectAuthed = state => state.user?.auth?.id ?? { user: null}

export const {
  logout,
  saveUser
} = userSlice.actions

export default userSlice.reducer