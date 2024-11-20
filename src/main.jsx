import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/home.jsx';
import TVHOME from './pages/tv-home';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

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
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tv-home",
        element: <TVHOME />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
