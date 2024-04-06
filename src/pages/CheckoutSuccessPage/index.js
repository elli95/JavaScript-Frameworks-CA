import { Link } from "react-router-dom";

function CheckoutSuccessPage() {
  return (
    <div className="checkoutSuccess">
      <h1>Thank you for your purchase!</h1>
      <p>Your order has been successfully processed and is now being prepared for shipment.</p>
      <p>We’re excited to get your items to you. </p>
      <p> An email confirmation has been sent to your inbox with all the details of your order.</p>
      <p>We appreciate your business and hope you enjoy your new purchase!</p>
      <Link to={`/`}>
        <button>Back to store</button>
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
