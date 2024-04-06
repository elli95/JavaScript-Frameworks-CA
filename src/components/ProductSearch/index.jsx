import { Link } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import { API_PRODUCTS } from "../../shared/apis";
import React, { useState } from "react";

function ProductSearch() {
  const { products, isLoading, isError } = useFetchApi(`${API_PRODUCTS}`);
  const [inputValue, setInputValue] = useState("");

  if (isLoading) {
    return <div>Product is loading</div>;
  }

  if (isError) {
    return <div>Sorry, there was an error loading the product</div>;
  }

  const inputValueChange = (input) => {
    const newValue = input.target.value;
    setInputValue(newValue);
  };

  const filteredProduct = products.filter((productData) => productData.title.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div className="search-container">
      <input type="text" value={inputValue} onChange={inputValueChange} placeholder="Search for a product..."></input>
      {inputValue && (
        <ul>
          {filteredProduct.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <li key={product.id}>
                <div>{product.image && <img src={product.image.url} alt={product.image.alt} />}</div>
                {product.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductSearch;
