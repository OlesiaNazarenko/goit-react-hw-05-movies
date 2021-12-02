import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import { getMoviesDetails } from '../../services/API';
import styled from 'styled-components';
const DetailesDiv = styled.div`
  display: flex;
  width: 800px;
  height: 400px;
  margin-top: 20px;
  border: 1px solid red;
`;
const Poster = styled.img`
  display: inline-block;
  width: 250px;
`;
const TextInfo = styled.div`
  width: 300px;
  margin-left: 20px;
`;
export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    getMoviesDetails(movieId).then(data => {
      const movies = data;
      setMovie(movies);
    });
  }, [movieId]);
  console.log(movie);
  return (
    <Container>
      <button type="button">Go back</button>
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
            <p>
              Genres:
              {movie.genres
                .map(genre => {
                  return genre.name;
                })
                .join(' / ')}
            </p>
          </TextInfo>
        </DetailesDiv>
        <div className="aditionalInformation">
          {/* <ul>
            <li>
              <Link>Cast</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul> */}
        </div>
      </>
    </Container>
  );
}
