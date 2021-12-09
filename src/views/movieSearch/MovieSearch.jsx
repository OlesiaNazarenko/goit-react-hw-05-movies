import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSearch } from 'react-icons/io';
import { searchFilm } from '../../services/API';
import Container from '../../components/container/Container';
import MovieList from '../../components/movieList/MovieList';
import s from './MovieSearch.module.css';
toast.configure();
export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const getQuery = new URLSearchParams(location.search).get('query');
  const [searchQuery, setSearchQuery] = useState(getQuery ? getQuery : '');
  useEffect(() => {
    if (!searchQuery) return;
    searchFilm(searchQuery).then(data => {
      setMovies(data);
    });
  }, [searchQuery]);
  const searchInputQuery = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter a name!');
      return;
    }
    navigate({ ...location, search: `query=${query}` });
    setSearchQuery(query);
  };
  console.log(searchQuery);
  return (
    <Container>
      <form className={s.Form} onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            className={s.Input}
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            placeholder="Enter a movie name"
            onChange={searchInputQuery}
          />
          <button className={s.SearchButton} type="submit">
            <IoIosSearch />
          </button>
        </label>
      </form>
      {<MovieList movies={movies} />}
    </Container>
  );
}
