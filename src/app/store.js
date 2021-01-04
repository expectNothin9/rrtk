import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import projectReducer from '../features/project/projectSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    project: projectReducer
  }
})
