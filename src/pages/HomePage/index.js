import ProductSearch from "../../components/ProductSearch";
import ProductList from "../../components/productList";

function HomePage() {
  return (
    <div className="homePage">
      <ProductSearch />
      <div className="productList">
        <ProductList />
      </div>
    </div>
  );
}

export default HomePage;
