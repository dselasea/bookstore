import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook, postBooks } from '../redux/books/booksSlice';
import Button from './Button';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      const input = {
        item_id: nanoid(), title, author, category,
      };
      dispatch(postBooks(input));
      dispatch(addBook({
        item_id: nanoid(),
        title,
        author,
        category,
      }));
      setAuthor('');
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Book Title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Add Book Author" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        <Button />
      </form>
    </div>
  );
};

export default AddBook;
