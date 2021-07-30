import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
  console.log(props);
  return (
    <section className={props.main ? 'header header_type_main' : 'header'}>
      <Link to="/"><img className="header__logo" alt="logo" src={logo} /></Link>
      <Navigation loggedIn={props.loggedIn}/>
    </section>
  )
}

export default Header;