import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  access_token: string | null
}

const initialState: AuthState = {
  access_token: localStorage.getItem('access_token'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload
    },
  },
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer