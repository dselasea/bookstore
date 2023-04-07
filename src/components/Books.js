import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (status) {
    return (<div><h1>Loading...</h1></div>);
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
