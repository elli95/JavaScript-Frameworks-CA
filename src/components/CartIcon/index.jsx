import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useStoreProducts from "../../store/storeProducts";
import { Link } from "react-router-dom";

function CartIcon() {
  const { getTotalNumberOfItemsInCart } = useStoreProducts();
  return (
    <div className="menuCart">
      <Link to={`/checkout`}>
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
      <p>{getTotalNumberOfItemsInCart()}</p>
    </div>
  );
}

export default CartIcon;
