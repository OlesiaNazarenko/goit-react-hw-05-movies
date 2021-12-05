import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/container/Container';
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  grid-gap: 5em;
  list-style: none;
`;

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <Container>
      <List>
        {movies.map(movie => {
          // console.log(movie);
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
      </List>
    </Container>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
