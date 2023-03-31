import React from 'react';

const Book = ({ book }) => {
  return (
          <>
            <span>{book.genre}</span>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </>
        );
};

export default Book;
