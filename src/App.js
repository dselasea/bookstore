import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
