import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBooks } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBooks(id));
  };
  return (
    <div className="book">
      <div className="book-info">
        <p className="category">{book.category}</p>
        <h1 className="title">{book.title}</h1>
        <p className="author">{book.author}</p>
        <div>
          <button className="book-btn" type="button">Comments</button>
          <button className="book-btn btn-middle" type="button" onClick={() => deleteBook(book.item_id)}>Remove</button>
          <button className="book-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="book-status">
        <div className="status-circle">
          <div className="circle" />
          <div className="status-content">
            <h4>0%</h4>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="book-progress">
        <h4>CURRENT CHAPTER</h4>
        <p>Chapter 17</p>
        <button type="button" className="btn-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
