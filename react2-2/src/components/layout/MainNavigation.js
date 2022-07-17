import { useContext } from "react";

// Chamar por Link, invés do a do html
import { Link } from "react-router-dom";

// Para funcionar o css em js importar com o classes, usar .module.css por costume
import classes from "./MainNavigation.module.css";

import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    // Colocar classes.header para conseguir chamar no css sem dar nenhum conflito com outro arquivo
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            {/* to seria o href*/}
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
