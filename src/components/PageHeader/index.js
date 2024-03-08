// import logo from "./logo.svg";
// import "../../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Contact</li>
        <li>Products</li>
        <li>Checkout</li>
      </ul>
    </nav>
  );
}

export default Header;
