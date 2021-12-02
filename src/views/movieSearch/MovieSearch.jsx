import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSearch } from 'react-icons/io';
import { searchFilm } from '../../services/API';
import Container from '../../components/container/Container';
import MovieList from '../../components/movieList/MovieList';
toast.configure();
const Form = styled.form`
  padding: 10px;
`;
const Input = styled.input`
  padding: 10px 15px;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  background: rgba(202, 207, 210, 0.4);
`;
const SearchButton = styled.button`
  padding: 8px 0;
  position: absolute;
  background: #900c3f;
  color: white;
  border: none;
  width: 37px;
  height: 37px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  margin-left: -35px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const searchQuery = e => {
    setQuery(e.currentTarget.value);
  };
  const getFilms = request => {
    return searchFilm(request).then(data => {
      setMovies(data);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter a name!');
      return;
    }
    getFilms(query);
    setQuery('');
    // onSubmit(query);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="">
          <Input
            type="text"
            name="query"
            value={query}
            placeholder="Enter a movie name"
            onChange={searchQuery}
          />
          <SearchButton type="submit" onSubmit={getFilms}>
            <IoIosSearch />
          </SearchButton>
        </label>
      </Form>
      {<MovieList movies={movies} />}
    </Container>
  );
}
