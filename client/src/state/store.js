import { configureStore } from '@reduxjs/toolkit'

import { reducer as sessionReducer } from './session'
import { reducer as uiReducer } from './ui'


export default configureStore({
  reducer: {
    session: sessionReducer,
    ui: uiReducer,
  },
})
