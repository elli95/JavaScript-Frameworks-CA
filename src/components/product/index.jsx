import { Link } from "react-router-dom";

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
      <p>{description}</p>
      {image && <img src={image.url} alt={image.alt} />}
      <p>{tags}</p>
      <p>{rating}</p>
      {oldPrice && <p className="oldPrice">${oldPrice}</p>}
      <p className={isPriceHigher ? "productDiscount" : "normalPrice"}>{lowestPrice}</p>
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
