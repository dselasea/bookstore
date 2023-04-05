import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({
        id: nanoid(),
        title,
        author,
      }));
      setAuthor('');
      setTitle('');
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Book Title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Add Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
