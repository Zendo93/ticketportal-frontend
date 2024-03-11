import { createSlice } from '@reduxjs/toolkit'

export const editedEventSlice = createSlice({
  name: 'editedEvent',
  initialState: {
    id: '',
    name: '',
    viewpoint: '',
    address: '',
    start: '',
    price: '',
    coverImage: ''
  },
  reducers: {
    setEditedEvent: (state, action) => {
        const {
            id,
            name,
            viewpoint,
            address,
            start,
            price,
            coverImage
        } = action.payload;

        state.id = id;
        state.name = name;
        state.viewpoint = viewpoint;
        state.address = address;
        state.start = start;
        state.price = price;
        state.coverImage = coverImage;
    },
    setName: (state, action) => {
        state.name = action.payload;
    },
    setViewpoint: (state, action) => {
        state.viewpoint = action.payload;
    },
    setAddress: (state, action) => {
        state.address = action.payload;
    },
    setStart: (state, action) => {
        state.start = action.payload;
    },
    setPrice: (state, action) => {
        state.price = action.payload;
    },
    setCoverImage: (state, action) => {
        state.coverImage = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setEditedEvent, 
                setName, 
                setViewpoint, 
                setAddress,
                setPrice,
                setStart,
                setCoverImage
            } = editedEventSlice.actions

export default editedEventSlice.reducer