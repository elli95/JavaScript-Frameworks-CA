// import Layout from "../../components/PageLayout";
// import { Link } from "react-router-dom";
import ShoppingCart from "../../components/shoppingCart";

function CheckoutPage() {
  return (
    <div>
      {/* <Layout /> */}
      <div className="cart-container">
        <ShoppingCart />
        {/* <Link to={`/checkoutSuccess`}>
          <button>Checkout</button>
        </Link> */}
      </div>
    </div>
  );
}

export default CheckoutPage;
