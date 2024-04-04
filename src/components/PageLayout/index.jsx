import Header from "../PageHeader";
import Footer from "../PageFooter";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
