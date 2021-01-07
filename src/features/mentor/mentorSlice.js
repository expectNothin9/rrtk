import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  question: '',
  answer: {
    quote: '',
    details: ''
  },
  // https://redux.js.org/tutorials/essentials/part-5-async-logic#loading-state-for-requests
  status: 'idle', // idle|loading|succeeded|failed
  error: null
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export const fetchAnswer = createAsyncThunk('mentor/fetchAnswer', async () => {
  await timeout(3000)
  // fulfilled
  return {
    answer: {
      quote: '有問題的其實是你',
      details:
        '少責怪別人，因為別人很難被改變，事情的發生一定有原因，你的情緒受到影響一定是有屎弄到你，好消息是，屎你可以自己洗掉，但要改變別人卻比登天還難，從自己改變自行開始，有問題的地方你就改，沒問題的地方就繼續任性，狠狠地打自己一巴掌，重新做人，漠視他人'
    }
  }
})

const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    updateQuestion: (state, action) => {
      state.question = action.payload
    }
  },
  extraReducers: {
    [fetchAnswer.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchAnswer.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.answer = action.payload.answer
    },
    [fetchAnswer.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { updateQuestion } = mentorSlice.actions

export default mentorSlice.reducer
