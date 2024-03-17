import { createSelector, createSlice } from '@reduxjs/toolkit'

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

export const getSelectedSeats = createSelector([state => state.room.seats], (seats) => {
  const selectedSeats = [];
  
  for (let i=0; i < seats.length; i++) {
    for (let j=0; j < seats[i].length; j++) {
      if (seats[i][j].selected) selectedSeats.push(seats[i][j]);
    }
  }

  return selectedSeats;
});

export const { setSeats, selectSeat } = roomSlice.actions;

export default roomSlice.reducer;
