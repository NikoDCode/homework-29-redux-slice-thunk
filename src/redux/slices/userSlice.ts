import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface UserState {
  name: string
}

const initialState: UserState = {
  name: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setUsername } = userSlice.actions

export const selectUsername = (state: RootState) => state.user.name

export default userSlice.reducer
