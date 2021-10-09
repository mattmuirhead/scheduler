import { configureStore } from '@reduxjs/toolkit'

import { reducer as uiReducer } from './ui'

export default configureStore({
  reducer: {
    ui: uiReducer,
  },
})
