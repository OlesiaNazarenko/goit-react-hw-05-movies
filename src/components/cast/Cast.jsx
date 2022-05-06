import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/API';
import s from './Cast.module.css';
export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCast(data);
    });
  }, [movieId]);
  return (
    <>
      {cast ? (
        <ul className={s.list}>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  className={s.castPhotos}
                  width="130px"
                  height="200px"
                  src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <p className={s.noImg}>
                  We did not find any picture of this actor.
                </p>
              )}

              <h3>{actor.name}</h3>
              <h4>Character: {actor.character}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no information about the cast of this movie.</p>
      )}
    </>
  );
}
