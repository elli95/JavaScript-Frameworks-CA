// import Layout from "../../components/PageLayout";
import ProductById from "../../components/productById";
// import ProductCard from "../../components/ProductCard";
// import ProductList from "../../components/productList";

function ProductPage() {
  return (
    <div>
      {/* <Layout /> */}
      <ProductById />
      {/* <ProductList /> */}
      {/* <ProductCard /> */}
    </div>
  );
}

export default ProductPage;

// import { API_PRODUCTS } from "../../shared/apis";'
// import { useParams } from "react-router-dom";
// import useFetchApi from "../../hooks/useFetchApi";'

// function ProductPage() {
//   const { id } = useParams();
//   const { products, isLoading, isError } = useFetchApi(`${API_PRODUCTS}/${id}`);

//   if (isLoading) {
//     return <div>Product is loading</div>;
//   }

//   if (isError) {
//     return <div>Sorry, there was an error loading the product</div>;
//   }

//   return (
//     <div key={products.id}>
//       <h2>{products.title}</h2>
//       <p>{products.description}</p>
//       {products.image && <img src={products.image.url} alt={products.image.alt} />}
//       <p>{products.tags}</p>
//       <p>{products.rating}</p>
//       <p>{products.price}</p>
//       <button>Add to cart</button>
//     </div>
//   );
// }

// export default ProductPage;
