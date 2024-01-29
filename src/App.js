import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import DetailsPage from './pages/pageDetail/DetailsPage';
import DetailsMovie from './pages/movieDetail/DetailsMovie';
import Search from './pages/search/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/movie/detail/:id" element={<DetailsMovie />} />
        <Route path="/movie/search/:keyword" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
