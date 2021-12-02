import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '../../components/container/Container';

export default function MovieList({ movies }) {
  return (
    <Container>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
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
