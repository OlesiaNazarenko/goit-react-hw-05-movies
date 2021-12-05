import React, { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  useMatch,
} from 'react-router-dom';
import { getMovieCredits } from '../../services/API';

export default function Cast() {
  const navigate = useNavigate();
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
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                alt={actor.name}
              />
              <h3>{actor.name}</h3>
              <h4>Character: {actor.character}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
