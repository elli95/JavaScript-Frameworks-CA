import useStoreProducts from "../../store/storeProducts";

function FinalShoppingCart() {
  const { cart, getShoppingCartTotalValue } = useStoreProducts();

  return (
    <div>
      <h3>Final Cart:</h3>
      {cart.map(({ id, title, quantity, price }) => (
        <div key={`cart-${id}`}>
          {title}: {quantity}, {price}
        </div>
      ))}
      <div>Cart total: ${getShoppingCartTotalValue().toFixed(2)}</div>
    </div>
  );
}

export default FinalShoppingCart;
