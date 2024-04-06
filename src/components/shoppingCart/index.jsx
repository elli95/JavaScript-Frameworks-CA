import useStoreProducts from "../../store/storeProducts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="shoppingCart">
      <h1>Cart:</h1>
      {!isCartEmpty && (
        <button className="clearCartBtn" onClick={clearCart}>
          Clear cart
        </button>
      )}
      {!isCartEmpty && (
        <div className="cartProductContainer">
          {cart.map(({ id, image, title, quantity, price }) => (
            <div key={`cart-${id}`} className="cartProduct">
              <div>{image && <img src={image.url} alt={image.alt} />}</div>
              <div className="cartProductInfo">
                <div>{title}:</div>
                <div>{price}</div>
              </div>
              <div className="productAmount">
                <button onClick={() => handleRemoveValue(id)} className="buttonSubtract">
                  <FontAwesomeIcon icon={faMinus} aria-label="-" />
                </button>
                {quantity}
                <button onClick={() => handleAddValue(id)} className="buttonAdd">
                  <FontAwesomeIcon icon={faPlus} aria-label="+" />
                </button>
                <button onClick={() => handleDeleteItem(id)} className="cartTrashCan">
                  <FontAwesomeIcon icon={faTrashCan} aria-label="Trash can" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {!isCartEmpty ? <div>Cart total: ${getShoppingCartTotalValue().toFixed(2)}</div> : <div>Your shopping cart is empty.</div>}
      {!isCartEmpty ? (
        <Link to={`/checkoutSuccess`}>
          <button className="cartCheckoutBtn" onClick={clearCart}>
            Checkout
          </button>
        </Link>
      ) : (
        <Link to={`/`}>
          <button className="cartBackHomeBtn">Back to store</button>
        </Link>
      )}
    </div>
  );
}

export default ShoppingCart;
