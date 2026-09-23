import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  submissions: [],
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitForm: (state, action) => {
      state.submissions.push(action.payload)
    },
  },
})

export const { submitForm } = formSlice.actions
export default formSlice.reducer