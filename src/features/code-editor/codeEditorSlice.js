import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    language: {
        value: "Tanlang...",
        icon: {
            value: ''
        }
    },
    executedCode: {
        value: null
    },
    editorCode: {
        value: null
    }
}

export const codeEditorSlice = createSlice({
    name: "codeeditor",
    initialState,
    reducers: {
        ChangeLanguage: (state, action) => {
            state.language.value = action.payload.language
            state.language.icon.value = action.payload.icon
        },
        ExecutedCode: (state, action) => {
            state.executedCode.value = action.payload
        },
        SetEditorCode: (state, actions) => {
            state.editorCode.value = actions.payload
        }
    }
})

export const { ChangeLanguage, ExecutedCode, SetEditorCode } = codeEditorSlice.actions
export default codeEditorSlice.reducer