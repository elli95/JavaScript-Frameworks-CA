import "./index.css";
import Header from "../PageHeader";
import CartIcon from "../CartIcon";
import Footer from "../PageFooter";

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <CartIcon></CartIcon>
      </header>
      <main>
        <p>Home</p>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
