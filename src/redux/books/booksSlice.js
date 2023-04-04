import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      state.books.push({
        id: state.books.length + 1,
        title: '',
        author: '',
      });
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
