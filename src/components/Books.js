import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: false,
    },
    {
      id: 2,
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      completed: false,
    },
    {
      id: 3,
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: false,
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
