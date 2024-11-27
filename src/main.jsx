import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import TVHOME from "./pages/tv-home/tv-home.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import UnderConstructionPage from "./pages/under-construction/under-construction-page.jsx";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tv-home", element: <TVHOME /> },
      { path: "/store", element: <UnderConstructionPage pageName="Store" /> },
      { path: "/mac", element: <UnderConstructionPage pageName="Mac" /> },
      { path: "/ipad", element: <UnderConstructionPage pageName="iPad" /> },
      { path: "/iphone", element: <UnderConstructionPage pageName="iPhone" /> },
      { path: "/watch", element: <UnderConstructionPage pageName="Watch" /> },
      {
        path: "/airpods",
        element: <UnderConstructionPage pageName="AirPods" />,
      },
      {
        path: "/entertainment",
        element: <UnderConstructionPage pageName="Entertainment" />,
      },
      {
        path: "/accessories",
        element: <UnderConstructionPage pageName="Accessories" />,
      },
      {
        path: "/support",
        element: <UnderConstructionPage pageName="Support" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
