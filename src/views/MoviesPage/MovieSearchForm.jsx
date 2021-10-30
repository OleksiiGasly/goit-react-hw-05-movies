import css from './MoviesPage.module.css';
import PropTypes from 'prop-types';

export function MovieSearchForm({ onChange, inputValue, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        name="movie"
        placeholder="Movie"
        value={inputValue}
        className={css.searchInput}
      />
      <button className={css.searchBtn}>Search</button>
    </form>
  );
}

MovieSearchForm.propTypes = {
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
};
