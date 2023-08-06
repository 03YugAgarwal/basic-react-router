// import {createBrowserRouter, createRoutesFromElements ,Route,RouterProvider} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/product" element={<Product/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routerDefinition)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
