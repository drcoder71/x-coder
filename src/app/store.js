import { configureStore } from '@reduxjs/toolkit'
import { SelectLanguageReducer } from '../features'
import ExecuteCodeSliceReducer from '../features/execute-cpde/executeCodeSlice'

export default configureStore({
  reducer: {
    programminglanguage: SelectLanguageReducer,
    executedcode: ExecuteCodeSliceReducer
  }
})