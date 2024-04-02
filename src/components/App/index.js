import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.css";
import Layout from "../PageLayout";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";
import CheckoutSuccessPage from "../../pages/CheckoutSuccessPage";
import ContactPage from "../../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkoutSuccess",
        element: <CheckoutSuccessPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
