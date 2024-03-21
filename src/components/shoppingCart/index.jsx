import useStoreProducts from "../../store/storeProducts";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cart, deleteItemFromCart, getShoppingCartTotalValue, clearCart } = useStoreProducts();

  function handleDeleteItem(id) {
    deleteItemFromCart(id);
  }

  return (
    <div>
      <h3>Cart:</h3>
      <button onClick={clearCart}>Clear cart</button>
      {cart.map(({ id, title, quantity, price }) => (
        <div key={`cart-${id}`}>
          <div>
            {title}: {quantity}, {price}
          </div>
          <button onClick={() => handleDeleteItem(id)}>Remove Item</button>
        </div>
      ))}
      <div>Cart total: ${getShoppingCartTotalValue().toFixed(2)}</div>
      <Link to={`/checkoutSuccess`}>
        <button onClick={clearCart}>Checkout</button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
