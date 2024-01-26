import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import ProductPage from '../pages/ProductPage/ProductPage';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    },
    {
      path: '/product',
      element: <ProductPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
