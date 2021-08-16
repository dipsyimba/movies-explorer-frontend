import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const path = useLocation().pathname;

  return (
    <section className={path === "/" ? "header header_type_main" : "header"}>
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <Navigation loggedIn={props.loggedIn} />
    </section>
  );
}

export default Header;
