import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      console.log('Add Books');
    },
    removeBook: (state) => {
      console.log('Remove Books')
    }
  },
});

export const { addBook, removeBook} = booksSlice.actions;
export default booksSlice.reducer
