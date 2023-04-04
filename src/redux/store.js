import { configureStore } from '@reduxjs/toolkit';
import booksSliceReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    book: booksSliceReducer,
  },
});

export default store;
