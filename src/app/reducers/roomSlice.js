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
    selectSeat: (state, action) => {
        const {
            row,
            position,
            selected
        } = action.payload;
        
        state.seats[row][position] = {...state.seats[row][position], selected: selected};
    }
  },
})

export const { setSeats, selectSeat } = roomSlice.actions;

export default roomSlice.reducer;
