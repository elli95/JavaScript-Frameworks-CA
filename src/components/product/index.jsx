import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product({ product: { id, title, price, image, rating, discountedPrice }, onAddToCartClick }) {
  function handleButtonOnClick() {
    onAddToCartClick(id);
  }

  const lowestPrice = Math.min(price, discountedPrice);
  const oldPrice = discountedPrice && price !== discountedPrice ? price : null;

  const discountAmount = price - discountedPrice;
  const percentageDiscount = Math.round((discountAmount / price) * 100);

  return (
    <div className="productCard">
      <div className="imgBox">{image && <img src={image.url} alt={image.alt} />}</div>
      <div className="productInfoBox">
        <h2>{title}</h2>
        <p className="starRating" aria-label="Star rating">
          <FontAwesomeIcon icon={faStar} /> {rating}
        </p>
        <div className="productPriceContainer">
          {oldPrice && (
            <div className="discountContainer">
              <p className="productPercentageDiscount">{percentageDiscount}%</p>
              <p className="productDiscount">${oldPrice}</p>
            </div>
          )}
          <p className="normalPrice">{lowestPrice}</p>
        </div>
        <div className="card-btn">
          <button onClick={handleButtonOnClick}>Add to cart</button>
          <Link to={`/products/${id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
