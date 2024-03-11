import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './reducers/eventsSlice';
import editedEventReducer from './reducers/editedEventSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    editedEvent: editedEventReducer,
  }
});