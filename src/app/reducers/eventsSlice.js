import { createSlice } from '@reduxjs/toolkit'
import { events } from '../mock/events'

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    value: events 
  },
  reducers: {
    updateEvent: (state, action) => {
        const {id} = action.payload;
        
        state.value = state.value.map(event => event.id === id ? action.payload : event);
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateEvent } = eventsSlice.actions

export default eventsSlice.reducer