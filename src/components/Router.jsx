import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ProductsPage from '../pages/ProductsPage';

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
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
