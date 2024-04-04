import useStoreProducts from "../../store/storeProducts";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cart, deleteItemFromCart, addValueToCartQuantity, removeValueToCartQuantity, getShoppingCartTotalValue, clearCart } = useStoreProducts();

  function handleDeleteItem(id) {
    deleteItemFromCart(id);
  }

  function handleAddValue(id) {
    addValueToCartQuantity(id);
  }

  function handleRemoveValue(id) {
    removeValueToCartQuantity(id);
  }

  const isCartEmpty = cart.length === 0;

  console.log(cart);

  return (
    <div>
      <h3>Cart:</h3>
      {!isCartEmpty && <button onClick={clearCart}>Clear cart</button>}
      {cart.map(({ id, title, quantity, price }) => (
        <div key={`cart-${id}`}>
          <div>
            {title}: {price}, <button onClick={() => handleRemoveValue(id)}>-</button> {quantity}
            <button onClick={() => handleAddValue(id)}>+</button>
          </div>
          <button onClick={() => handleDeleteItem(id)}>Remove Item</button>
        </div>
      ))}
      {!isCartEmpty ? <div>Cart total: ${getShoppingCartTotalValue().toFixed(2)}</div> : <div>Your shopping cart is empty.</div>}
      {!isCartEmpty ? (
        <Link to={`/checkoutSuccess`}>
          <button onClick={clearCart}>Checkout</button>
        </Link>
      ) : (
        <Link to={`/`}>
          <button>Home</button>
        </Link>
      )}
    </div>
  );
}

export default ShoppingCart;
