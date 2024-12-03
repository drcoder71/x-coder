import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const ExecuteCodeSlice = createSlice({
    name: 'executedcode',
    initialState,
    reducers: {
        ExecutedCode: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { ExecutedCode } = ExecuteCodeSlice.actions
export default ExecuteCodeSlice.reducer
