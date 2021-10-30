import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Cast.module.css';
import { fetchCast } from '../../services/api';
import defaultProfileImg from './default-profile-img.jpeg';

export default function Cast({ id }) {
  const IMG_BASE = 'https://image.tmdb.org/t/p/w200';
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(id).then(cast => {
      setCast(cast.cast);
    });
  }, [id]);

  return (
    <ul className={css.castList}>
      {cast !== [] &&
        cast.map(actor => (
          <li className={css.actor} key={actor.id}>
            <img
              src={
                actor.profile_path !== null
                  ? `${IMG_BASE}${actor.profile_path}`
                  : `${defaultProfileImg}`
              }
              alt={actor.name}
            />
            <h3 className={css.name}>{actor.name}</h3>
            {actor.character && (
              <p className={css.character}>Character: {actor.character}</p>
            )}
          </li>
        ))}
    </ul>
  );
}

Cast.propTypes = {
  id: PropTypes.string,
};
