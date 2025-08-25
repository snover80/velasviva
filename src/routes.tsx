import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products/:categoryName", element: <ProductListPage /> },
    ],
  },
]);

export default route;
