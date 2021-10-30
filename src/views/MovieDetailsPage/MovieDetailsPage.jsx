import { useEffect, useState } from 'react';
import { fetchMovieCard } from '../../services/api';
import { useParams, Route, useHistory, useLocation } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import MovieInfo from './MovieInfo';
import Cast from '../../components/Cast/Cast';
import MovieReviews from '../../components/Reviews/Reviews';
import Loader from '../../components/Loader/Loader';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoader(true);
    fetchMovieCard(movieId).then(res => {
      setMovie(res);
    });
    setLoader(false);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button className={css.button} type="button" onClick={onGoBack}>
        &#10094; Go Back
      </button>
      {loader && Loader}
      <div className={css.wrapper}>
        {movie !== {} && (
          <MovieInfo movie={movie} moviesLocation={location.state.from} />
        )}

        <Route path="/movies/:movieId/cast">
          <Cast id={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <MovieReviews id={movieId} />
        </Route>
      </div>
    </>
  );
}
