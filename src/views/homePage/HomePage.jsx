import Container from '../../components/container/Container';
import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/API';
import MovieList from '../../components/movieList/MovieList';
import s from './HomePage.module.css';
export default function Trending() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(e => alert(e.message));
  }, []);

  return (
    <Container>
      <h2 className={s.title}>Trending today</h2>
      {movies && <MovieList movies={movies} />}
    </Container>
  );
}
