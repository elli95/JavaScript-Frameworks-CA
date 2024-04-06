import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
