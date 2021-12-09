import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/API';
export default function Reviews() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId, '/reviews')
      .then(data => {
        setMovie(data);
      })
      .catch(error => alert(error.message));
  }, [movieId]);
  return (
    <div>
      {movie && (
        <ul>
          {movie.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {movie.length === 0 && <p>There are no reviews for this movie.</p>}
    </div>
  );
}
