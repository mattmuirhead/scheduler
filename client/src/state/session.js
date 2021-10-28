import { createSlice } from '@reduxjs/toolkit'

const session = createSlice({
  name: 'session',
  initialState: {
    user: {}
  },
  reducers: {
    setSession: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      }
    },
    clearSession: state => {
      state.user = {}
    }
  },
})

export const selectUser = state => state.session.user

export const { setSession, clearSession } = session.actions
export const { reducer } = session
