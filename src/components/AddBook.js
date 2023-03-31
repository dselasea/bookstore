import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = () => {

  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Add Book Title" />
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Add Book Author" />
        <button onClick={addBook} type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
