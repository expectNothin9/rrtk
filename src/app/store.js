import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../features/project/projectSlice'
import mentorReducer from '../features/mentor/mentorSlice'

export default configureStore({
  reducer: {
    project: projectReducer,
    mentor: mentorReducer
  }
})
