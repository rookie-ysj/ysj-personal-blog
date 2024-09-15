import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './theme.ts'

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
