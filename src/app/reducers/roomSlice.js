import { createSlice } from '@reduxjs/toolkit'

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    seats: [[]],
  },
  reducers: {
    setSeats: (state, action) => {
        state.seats = action.payload;
    },
  },
})

export const { setSeats } = roomSlice.actions;

export default roomSlice.reducer;
