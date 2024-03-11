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
        const {
            name,
        } = action.payload;

        state.name = name;
    },
    setViewpoint: (state, action) => {
        const {
            viewpoint,
        } = action.payload;

        state.viewpoint = viewpoint;
    },
    setAddress: (state, action) => {
        const {
            address,
        } = action.payload;

        state.address = address;
    },
    setStart: (state, action) => {
        const {
            start,
        } = action.payload;

        state.start = start;
    },
    setPrice: (state, action) => {
        const {
            price,
        } = action.payload;

        state.price = price;
    },
    setCoverImage: (state, action) => {
        const {
            coverImage,
        } = action.payload;

        state.coverImage = coverImage;
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