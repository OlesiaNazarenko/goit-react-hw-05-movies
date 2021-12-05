import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useMatch } from 'react-router-dom';
import { getMovieCredits } from '../../services/API';
import styled from 'styled-components';
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 3fr));
  grid-gap: 2em;
  list-style: none;
`;
export default function Cast() {
  const location = useLocation();
  const { movieId } = useParams();
  const match = useMatch(`/movies/${movieId}/cast/`);
  console.log(match);
  console.log(location);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      console.log(data);

      setCast(data);
    });
  }, [movieId]);
  console.log(useParams());
  console.log(cast);
  return (
    <>
      {cast && (
        <List>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                width="150px"
                src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                alt={actor.name}
              />
              <h3>{actor.name}</h3>
              <h4>Character: {actor.character}</h4>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
