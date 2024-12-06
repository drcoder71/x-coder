import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        language: "Tanlang...",
        icon: ''
    }
}

export const SelectLanguageSlice = createSlice({
    name: 'programminglangugage',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.value.language = action.payload.language
            state.value.icon = action.payload.icon
        }
    }
})

export const { changeLanguage } = SelectLanguageSlice.actions
export default SelectLanguageSlice.reducer