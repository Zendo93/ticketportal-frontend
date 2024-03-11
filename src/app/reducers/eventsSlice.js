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
    },
    createEvent: (state, action) => {
        const {id} = action.payload;
        
        state.value.push({...action.payload, id: id + 10});
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateEvent, createEvent } = eventsSlice.actions

export default eventsSlice.reducer