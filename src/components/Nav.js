import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link to='/About' style={navStyle}>
          <li>About</li>
        </Link>

        <Link to='/Shop' style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
