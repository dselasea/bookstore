import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book }) => (
  <div>
    <h1>{book.title}</h1>
    <p>{book.author}</p>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
