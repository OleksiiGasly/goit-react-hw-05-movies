import { useEffect, useState } from 'react';
import { fetchReviews } from '../../services/api';
import PropTypes from 'prop-types';
import css from './Reviews.module.css';

export default function Reviews({ id }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReviews(id).then(res => setReview(res.results));
  }, [id]);

  return (
    <ul className={css.reviewsList}>
      {review.length !== 0 ? (
        review.map(data => (
          <li key={data.id}>
            <h3>{data.author}</h3>
            <p className={css.review}>{data.content}</p>
          </li>
        ))
      ) : (
        <p className={css.emptyReviews}>No reviews</p>
      )}
    </ul>
  );
}

Reviews.propTypes = {
  id: PropTypes.string,
};
