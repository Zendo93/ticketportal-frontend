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
    coverImage: '',
    rowNumber: '',
    columnNumber: '' 
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
            coverImage,
            rowNumber,
            columnNumber
        } = action.payload;

        state.id = id;
        state.name = name;
        state.viewpoint = viewpoint;
        state.address = address;
        state.start = start;
        state.price = price;
        state.coverImage = coverImage;
        state.rowNumber = rowNumber;
        state.columnNumber = columnNumber;
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
    setRowNumber: (state, action) => {
        state.rowNumber = action.payload;
    },
    setColumnNumber: (state, action) => {
        state.columnNumber = action.payload;
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
                setCoverImage,
                setRowNumber,
                setColumnNumber
            } = editedEventSlice.actions

export default editedEventSlice.reducer