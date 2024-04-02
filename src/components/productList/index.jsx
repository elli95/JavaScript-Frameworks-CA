import { useEffect } from "react";
import useStoreProducts from "../../store/storeProducts";
import Product from "../product";

function ProductList() {
  const { products, fetchProducts, addToCart } = useStoreProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function onAddToCartClick(id) {
    addToCart(id);
  }

  if (products) {
    return products.map((product) => <Product key={product.id} product={product} onAddToCartClick={onAddToCartClick} />);
  }

  return <div>hello</div>;
}

export default ProductList;
