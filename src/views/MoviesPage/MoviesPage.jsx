import { useState, useEffect } from 'react';
import { MovieSearchForm } from './MovieSearchForm';
import MovieList from '../../components/Movies/MovieList';
import { fetchByInput } from '../../services/api';
import { useHistory, useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const [inputValue, setInputvalue] = useState('');
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const data = new URLSearchParams(location.search).get('query');

  function handleInputChange(e) {
    setInputvalue(e.currentTarget.value.trim());
  }

  function handleMovieSearch(e) {
    e.preventDefault();
    if (inputValue) {
      fetchByInput(inputValue).then(res => setSearchMoviesList(res.results));
      changeQuery();
    }
  }

  function changeQuery() {
    history.push({
      ...location,
      search: `query=${inputValue}`,
    });
  }

  useEffect(() => {
    if (data !== null) {
      fetchByInput(data).then(res => setSearchMoviesList(res.results));
    }
  }, [data]);

  return (
    <div>
      <MovieSearchForm
        inputValue={inputValue}
        onChange={handleInputChange}
        onSubmit={handleMovieSearch}
      />
      {searchMoviesList.length > 0 && <MovieList list={searchMoviesList} />}
    </div>
  );
}
