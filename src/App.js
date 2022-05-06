import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import './App.css';
import Header from './components/header/Header';

const HomePage = lazy(() => import('./views/homePage/HomePage.jsx'));
const MoviePage = lazy(() => import('./views/moviePage/MoviePage.jsx'));
const MovieSearch = lazy(() => import('./views/movieSearch/MovieSearch'));
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movies/:movieId/*" element={<MoviePage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
