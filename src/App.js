import './App.css';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import Books from './components/Books';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Books />
      <AddBook />
    </main>
  );
}

export default App;
