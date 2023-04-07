import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook, postBooks } from '../redux/books/booksSlice';
import Button from './Button';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const input = {
        item_id: nanoid(), title, author, category: 'Action',
      };
      dispatch(postBooks(input));
      dispatch(addBook({
        item_id: nanoid(),
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
        <Button />
      </form>
    </div>
  );
};

export default AddBook;
