import { Link } from "react-router-dom";

import logo from '../../images/Logo.svg';
import classes from "./MainNavigation.module.css";

function MainNavigation() {

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <nav className={classes.marginized}>
        <ul className={classes.nav}>
          <li>
            <Link to="/" className={`${classes.link} paragraph`}>Home</Link>
          </li>
          <li>
            <Link to="/" className={`${classes.link} paragraph`}>About</Link>
          </li>
          <li>
            <Link to="/" className={`${classes.link} paragraph`}>Menu</Link>
          </li>
          <li>
            <Link to="/" className={`${classes.link} paragraph`}>Order Online</Link>
          </li>
          <li>
            <Link to="/" className={`${classes.link} paragraph`}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
