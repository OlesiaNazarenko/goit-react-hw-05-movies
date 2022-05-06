import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';
import Container from '../../components/container/Container';
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.listItem}>
            <img
              className={s.poster}
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.name}
            />
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={s.link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
