import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark'

const initialState: {
  theme: Theme
} = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
  },
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions
