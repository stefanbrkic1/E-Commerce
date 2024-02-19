import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { path: '/products/:category', element: <ProductsPage /> },
  { path: '/product/:productId', element: <ProductPage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
