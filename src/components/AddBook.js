import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Add Book Title" />
        <input type="text" placeholder="Add Book Author" />
        <button onClick={() => dispatch(addBook())} type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
