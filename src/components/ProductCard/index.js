// import { API_PRODUCTS } from "../../shared/apis";
// import useFetchApi from "../../hooks/useFetchApi";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function ProductCard({ product }, onAddToCartClick) {
  console.log(product);
  function handleButtonOnClick() {
    onAddToCartClick(product.id);
  }
  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {product.image && <img src={product.image.url} alt={product.image.alt} />}
      <p>{product.tags}</p>
      <p>{product.rating}</p>
      <p>{product.price}</p>
      <button onClick={handleButtonOnClick}>Add to cart</button>
    </div>
  );
}

export default ProductCard;

// import { API_PRODUCTS } from "../../shared/apis";
// import useFetchApi from "../../hooks/useFetchApi";
// import { Link } from "react-router-dom";

// function ProductCard() {
//   const { products, isLoading, isError } = useFetchApi(API_PRODUCTS);

//   if (isLoading) {
//     return <div>Products are loading</div>;
//   }

//   if (isError) {
//     return <div>Sorry, there was an error loading the products</div>;
//   }

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//           {product.image && <img src={product.image.url} alt={product.image.alt} width="500" height="600" />}
//           <p>{product.tags}</p>
//           <p>{product.rating}</p>
//           <p>{product.price}</p>
//           <Link to={`/products/${product.id}`}>View product</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductCard;
