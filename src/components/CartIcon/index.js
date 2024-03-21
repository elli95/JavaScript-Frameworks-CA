import useStoreProducts from "../../store/storeProducts";
import { Link } from "react-router-dom";

function CartIcon() {
  const { getTotalNumberOfItemsInCart } = useStoreProducts();
  return (
    <div className="menuCart">
      <Link to={`/checkout`}>
        <p>Cart Icon</p>
      </Link>
      <p>{getTotalNumberOfItemsInCart()}</p>
    </div>
  );
}

export default CartIcon;
