import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
  <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : classes.item}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.active : classes.item}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : classes.item}>News</NavLink>
    </div>
    <div className={classes.item}>
      <a>Music</a>
    </div>
    <div className={classes.item}>
      <a>Settings</a>
    </div>
  </nav>)
}


export default Navbar;
