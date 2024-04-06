import { useParams } from "react-router-dom";
import useStoreProducts from "../../store/storeProducts";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductById() {
  const { id } = useParams();
  const { products, fetchProducts, addToCart } = useStoreProducts();
  const [product, setProduct] = useState(null);

  function handleButtonOnClick() {
    addToCart(id);
  }

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id.toString() === id);
    setProduct(foundProduct);
  }, [products, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const lowestPrice = Math.min(product.price, product.discountedPrice);
  const oldPrice = product.discountedPrice && product.price !== product.discountedPrice ? product.price : null;

  const discountAmount = product.price - product.discountedPrice;
  const percentageDiscount = Math.round((discountAmount / product.price) * 100);

  const isReviewEmpty = product.reviews.length === 0;

  return (
    <div className="productPageContainer">
      <h1>{product.title}</h1>
      <div className="productInfo">
        {product.image && <img src={product.image.url} alt={product.image.alt} />}
        <div>
          <p>{product.description}</p>
          <div className="productTags">
            {product.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <p className="starRating">
            <FontAwesomeIcon icon={faStar} /> {product.rating}
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
          <button onClick={handleButtonOnClick}>Add to cart</button>
        </div>
      </div>
      {!isReviewEmpty && (
        <div className="reviewContainer">
          <h2>Product reviews:</h2>
          {product.reviews.map((review) => (
            <div key={review.id} className="reviewCard">
              <p>{review.description}</p>
              <div className="reviewRatingAuthor">
                <p className="starRating">
                  <FontAwesomeIcon icon={faStar} /> {review.rating}
                </p>
                <p>{review.username}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductById;
