import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'javascript'
}

export const SelectLanguageSlice = createSlice({
    name: 'programminglangugage',
    initialState,
    reducers: {
        changeLanguage: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { changeLanguage } = SelectLanguageSlice.actions
export default SelectLanguageSlice.reducer