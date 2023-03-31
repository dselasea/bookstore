import React from 'react';
import Book from './Book';

const Books = () => {
  const books = [
    {
      id: 1,
      genre: 'Action',
      bookTitle: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: false,
    },
    {
      id: 2,
      genre: 'Science Fiction',
      bookTitle: 'Dune',
      author: 'Frank Herbert',
      completed: false,
    },
    {
      id: 3,
      genre: 'Economy',
      bookTitle: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: false,
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
