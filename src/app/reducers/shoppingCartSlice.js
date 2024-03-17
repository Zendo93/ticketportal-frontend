import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    open: false
  },
  reducers: {
    setOpen: (state, action) => {
        state.open = action.payload; 
    },
  },
})

export const { setOpen } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
