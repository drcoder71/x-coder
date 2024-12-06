import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: {
        value: "Tanlang...",
        icon: {
            value: ''
        }
    }
}

export const SelectLanguageSlice = createSlice({
    name: 'programminglangugage',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language.value = action.payload.language
            state.language.icon.value = action.payload.icon
        }
    }
})

export const { changeLanguage } = SelectLanguageSlice.actions
export default SelectLanguageSlice.reducer