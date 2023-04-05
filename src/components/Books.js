import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.book.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
