import { useParams } from "react-router-dom";
import useStoreProducts from "../../store/storeProducts";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {product.image && <img src={product.image.url} alt={product.image.alt} />}
      <p>{product.tags}</p>
      <p>{product.rating}</p>
      <p style={{ color: isPriceHigher ? "red" : "black" }}>{lowestPrice}</p>
      <Link to={`/products/${id}`}>
        <button>View product</button>
      </Link>
      <button onClick={handleButtonOnClick}>Add to cart</button>
    </div>
  );
}

export default ProductById;
