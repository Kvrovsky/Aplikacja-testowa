import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';


function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Wszystkie ogłoszenia</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Wszystkie ogłoszenia</Link>
          </li>
          <li>
            <Link to='/newAnnoucment'>Stwórz nowe ogłoszenie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
