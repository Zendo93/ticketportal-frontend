import { createSlice } from '@reduxjs/toolkit'
import { events } from '../mock/events'

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    value: events 
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = eventsSlice.actions

export default eventsSlice.reducer