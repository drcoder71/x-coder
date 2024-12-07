import { configureStore } from '@reduxjs/toolkit'
import codeEditorSliceReducer from '../features/code-editor/codeEditorSlice'
import CodeSystemSliceReducer from '../features/code-system/CodeSystemSlice'

export default configureStore({
  reducer: {
    codeeditor: codeEditorSliceReducer,
    codesystem: CodeSystemSliceReducer
  }
})