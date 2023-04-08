import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  if (status) {
    return (<div className="status-loading"><h1>Loading...</h1></div>);
  }
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
