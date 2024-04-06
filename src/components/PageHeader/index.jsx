import CartIcon from "../CartIcon";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <h2>E-Com</h2>
      <div>
        <Nav />
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
