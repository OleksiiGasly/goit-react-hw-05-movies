import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieDetailsPage.module.css';

export default function MovieInfo({ movie, moviesLocation }) {
  const { url } = useRouteMatch();
  const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

  function movieGenres() {
    if (movie.genres) {
      const genreArray = movie.genres.map(genre => {
        return genre.name;
      });
      return genreArray.join(', ');
    }
  }

  function getReleaseYear() {
    if (movie.release_date) {
      const date = movie.release_date.split('-');
      return date[0];
    }
  }

  return (
    <>
      <div className={css.infoWrapper}>
        <img
          src={movie.poster_path && `${IMG_BASE}${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div className={css.info}>
          <h1>
            {movie.original_title}({getReleaseYear()})
          </h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movieGenres()}</p>
        </div>
      </div>

      <ul className={css.list}>
        <li>
          <NavLink
            className={css.links}
            activeClassName={css.activeLink}
            to={{
              pathname: `${url}/cast`,
              state: { from: moviesLocation },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={css.links}
            activeClassName={css.activeLink}
            to={{
              pathname: `${url}/reviews`,
              state: { from: moviesLocation },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
  moviesLocation: PropTypes.object,
};
