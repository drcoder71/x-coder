import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layout: {
        value: "regular"
    }
}

export const CodeSystemSlice = createSlice({
    name: "codesystem",
    initialState,
    reducers: {
        ChangeLayout: (state, action) => {
            state.layout.value = action.payload
        }
    }
})

export const { ChangeLayout } = CodeSystemSlice.actions
export default CodeSystemSlice.reducer