import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import css from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const PageError = lazy(() => import('./views/PageError/PageError'));

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <PageError />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
