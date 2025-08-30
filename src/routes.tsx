import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ShipmentPoliticsPage from "./pages/ShipmentPoliticsPage";
import RefundPage from "./pages/RefundPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import RecommendationsPage from "./pages/RecommendationsPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products/:categoryName", element: <ProductListPage /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/shipment_politics", element: <ShipmentPoliticsPage /> },
      { path: "/refund", element: <RefundPage /> },
      { path: "/terms_conditions", element: <TermsAndConditionsPage /> },
      { path: "/recomendations", element: <RecommendationsPage /> },
    ],
  },
]);

export default route;
