import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product({ product: { id, title, description, price, image, tags, rating, discountedPrice }, onAddToCartClick }) {
  function handleButtonOnClick() {
    onAddToCartClick(id);
  }

  const lowestPrice = Math.min(price, discountedPrice);
  const isPriceHigher = price > discountedPrice;
  const oldPrice = discountedPrice && price !== discountedPrice ? price : null;

  return (
    <div className="productCard">
      <h2>{title}</h2>
      {image && <img src={image.url} alt={image.alt} />}
      <p>{description}</p>
      <div className="productTags">
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <p className="starRating">
        <FontAwesomeIcon icon={faStar} /> {rating}
      </p>
      <div className="productPriceContainer">
        {oldPrice && <p className="oldPrice">${oldPrice}</p>}
        <p className={isPriceHigher ? "productDiscount" : "normalPrice"}>{lowestPrice}</p>
      </div>
      <div className="card-btn">
        <Link to={`/products/${id}`}>
          <button>View product</button>
        </Link>
        <button onClick={handleButtonOnClick}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
