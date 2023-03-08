import { createSlice } from "@reduxjs/toolkit"
import { genres } from "../../utils/constants"

const dataSlice = createSlice({
  name: "data",
  initialState: {
    selectedGenre: genres[4].value,
    sidebar: false,
  },
  reducers: {
    changeGenre(state, action) {
      state.selectedGenre = action.payload
    },
    toggleSidebar(state, action) {
      state.sidebar = action.payload
    },
  },
})

export const { changeGenre, toggleSidebar } = dataSlice.actions
export const dataReducer = dataSlice.reducer
