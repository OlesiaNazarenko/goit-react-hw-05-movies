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
import styled from 'styled-components';
const DetailesDiv = styled.div`
  display: flex;
  width: 800px;
  margin-top: 20px;
  border: 1px solid red;
`;
const Poster = styled.img`
  display: inline-block;
  width: 250px;
  height: 400px;
`;
const TextInfo = styled.div`
  width: 300px;
  margin-left: 20px;
`;
const Cast = lazy(() => import('../../components/cast/Cast'));
const Review = lazy(() => import('../../components/reviews/Review'));

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

  console.log(location);
  return (
    <Container>
      <button type="button" onClick={cbOnClick}>
        Go back
      </button>
      <>
        <DetailesDiv className="movieDetails">
          <Poster
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <TextInfo>
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
          </TextInfo>
        </DetailesDiv>
        <div className="aditionalInformation">
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to="cast" state={location.state}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={location.state}>
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
