import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>E-Com</h2>
      </Link>
      <div>
        <Nav />
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
