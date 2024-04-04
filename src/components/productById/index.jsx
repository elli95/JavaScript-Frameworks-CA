import { useParams } from "react-router-dom";
import useStoreProducts from "../../store/storeProducts";
import React, { useEffect, useState } from "react";

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
  const isPriceHigher = product.price > product.discountedPrice;
  const oldPrice = product.discountedPrice && product.price !== product.discountedPrice ? product.price : null;

  console.log(product);
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {product.image && <img src={product.image.url} alt={product.image.alt} />}
      {product.tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
      <p>{product.rating}</p>
      {oldPrice && <p className="oldPrice">${oldPrice}</p>}
      <p className={isPriceHigher ? "productDiscount" : "normalPrice"}>{lowestPrice}</p>
      <button onClick={handleButtonOnClick}>Add to cart</button>
      <div>
        {product.reviews.map((review) => (
          <div key={review.id}>
            <p>{review.description}</p>
            <p>{review.rating}</p>
            <p>{review.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductById;
