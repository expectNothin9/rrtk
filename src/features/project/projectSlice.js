import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [
    // {
    //   id: 1,
    //   name: 'Project Name',
    //   createAt: 1609742852081,
    //   owner: {
    //     id: 1,
    //     firstName: 'First Name',
    //     lastName: 'Last Name',
    //     email: 'owner@email.com'
    //   }
    // }
  ],
  // https://redux.js.org/tutorials/essentials/part-5-async-logic#loading-state-for-requests
  status: 'idle', // idle|loading|succeeded|failed
  error: null
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export const fetchProjects = createAsyncThunk('project/fetchProjects', async () => {
  await timeout(1500)
  // fulfilled
  return {
    projects: [
      {
        id: 1,
        name: 'Project Name',
        createAt: 1609742852081,
        owner: {
          id: 1,
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'owner@email.com'
        }
      }
    ]
  }
})

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.projects = action.payload.projects
    },
    [fetchProjects.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export default projectSlice.reducer
