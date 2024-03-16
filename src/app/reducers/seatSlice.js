import { createSlice } from '@reduxjs/toolkit'

export const seatSlice = createSlice({
  name: 'seat',
  initialState: {
    status: "",
    row: "",
    position: "",
    price: "",
  },
  reducers: {
    setSeat: (state, action) => {
        const {
            status,
            row,
            position,
            price
        } = action.payload;
        
        state.status = status;
        state.row = row;
        state.position = position;
        state.price = price; 
    },
  },
})

export const { setSeat } = seatSlice.actions;

export default seatSlice.reducer;
