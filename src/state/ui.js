import { createSlice } from '@reduxjs/toolkit'

const ui = createSlice({
  name: 'ui',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenuOpen: state => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const selectIsMenuOpen = state => state.ui.isMenuOpen

export const { toggleMenuOpen } = ui.actions
export const { reducer } = ui
