import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './reducers/eventsSlice';
import editedEventReducer from './reducers/editedEventSlice';
import roomReducer from './reducers/roomSlice';
import shoppingCartReducer from './reducers/shoppingCartSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    editedEvent: editedEventReducer,
    room: roomReducer,
    shoppingCart: shoppingCartReducer,
  }
});