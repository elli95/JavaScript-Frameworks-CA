// import Layout from "../../components/PageLayout";
// import ProductCard from "../../components/ProductCard";
import ProductSearch from "../../components/ProductSearch";
import ProductList from "../../components/productList";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function HomePage() {
//   return (
//     <div>
//       <Layout />
//       <Switch>
//         <ProductSearch />
//       </Switch>
//       <ProductList />
//     </div>
//   );
// }

function HomePage() {
  return (
    <div>
      {/* <Layout /> */}
      <ProductSearch />
      {/* <ProductCard /> */}
      <div className="productList">
        <ProductList />
      </div>
    </div>
  );
}

export default HomePage;
