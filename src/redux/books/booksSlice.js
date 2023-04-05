import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      };
      return { ...state, books: [...state.books, newBook] };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const remove = state.books.filter((book) => book.item_id !== bookId);
      return { ...state, books: remove };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
