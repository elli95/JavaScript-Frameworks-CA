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

  console.log(cart);

  return (
    <div className="shoppingCart">
      <h3>Cart:</h3>
      {!isCartEmpty && <button onClick={clearCart}>Clear cart</button>}
      <div className="cartProductContainer">
        {cart.map(({ id, image, title, quantity, price }) => (
          <div key={`cart-${id}`} className="cartProduct">
            {image && <img src={image.url} alt={image.alt} />} {title}: {price}
            <div className="productAmount">
              <button onClick={() => handleRemoveValue(id)} className="buttonSubtract">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              {quantity}
              <button onClick={() => handleAddValue(id)} className="buttonAdd">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={() => handleDeleteItem(id)} className="cartTrashCan">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {!isCartEmpty ? <div>Cart total: ${getShoppingCartTotalValue().toFixed(2)}</div> : <div>Your shopping cart is empty.</div>}
      {!isCartEmpty ? (
        <Link to={`/checkoutSuccess`}>
          <button onClick={clearCart}>Checkout</button>
        </Link>
      ) : (
        <Link to={`/`}>
          <button>Back to store</button>
        </Link>
      )}
    </div>
  );
}

export default ShoppingCart;
