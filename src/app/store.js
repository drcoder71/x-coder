import { configureStore } from '@reduxjs/toolkit'
import codeEditorSliceReducer from '../features/code-editor/codeEditorSlice'

export default configureStore({
  reducer: {
    codeeditor: codeEditorSliceReducer
  }
})