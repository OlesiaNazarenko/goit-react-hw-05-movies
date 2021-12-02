import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './views/homePage/HomePage';
import NotFoundView from './views/notFoundView/NotFoundView';
import MoviePage from './views/moviePage/MoviePage';
// import Cast from './components/cast/Cast';
// import Reviews from './components/reviews/Review';
import MovieSearch from './views/movieSearch/MovieSearch';
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movies" element={<MovieSearch />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        <Route element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
