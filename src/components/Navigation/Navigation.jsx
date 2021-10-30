import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink
          to="/"
          exact
          className={css.link}
          activeClassName={css.activeLink}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={css.link}
          activeClassName={css.activeLink}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
