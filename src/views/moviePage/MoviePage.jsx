import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Outlet,
  NavLink,
  useParams,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Container from '../../components/container/Container';
import { getMoviesDetails } from '../../services/API';
import s from './MoviePage.module.css';
const Cast = lazy(() =>
  import('../../components/cast/Cast' /* webpackChunkName: "cast" */),
);
const Review = lazy(() =>
  import('../../components/reviews/Review' /* webpackChunkName: "reviews" */),
);
export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    getMoviesDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  const cbOnClick = () => {
    location.state ? navigate(location.state.from) : navigate('/');
  };
  return (
    <Container>
      <button type="button" onClick={cbOnClick}>
        Go back
      </button>
      <>
        <div className={s.DetailesDiv}>
          <img
            className={s.Poster}
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className={s.TextInfo}>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            {movie.genres && (
              <p>
                Genres:
                {movie.genres
                  .map(genre => {
                    return genre.name;
                  })
                  .join(' / ')}
              </p>
            )}
          </div>
        </div>
        <div className="aditionalInformation">
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`} state={location.state}>
                Cast
              </NavLink>
            </li>

            <li>
              <NavLink to={`/movies/${movieId}/reviews`} state={location.state}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </>
      <Suspense fallback={<h1>Downloading...</h1>}>
        <Routes>
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
