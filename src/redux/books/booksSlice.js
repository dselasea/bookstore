import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wrcRoQ7axFGLY3A38Uya/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (input) => {
  try {
    const response = await axios.post(BASE_URL, input);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  books: [],
  status: false,
  error: null,
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
  extraReducers(builders) {
    builders
      .addCase(getBooks.pending, (state) => ({ ...state, status: true }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const data = action.payload;
        const newBooks = [];
        for (const id in data) {
          if (id) {
            const newData = data[id][0];
            newData.item_id = id;
            newBooks.push(newData);
          }
        }
        return { ...state, status: false, books: newBooks };
      })
      .addCase(getBooks.rejected, (state) => ({ ...state, status: false, error: true }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
