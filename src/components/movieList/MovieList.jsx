import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';
import Container from '../../components/container/Container';
export default function MovieList({ movies }) {
  console.log(movies);
  const location = useLocation();
  return (
    <Container>
      <ul className={s.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
              <img
                height="400px"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={movie.name}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
