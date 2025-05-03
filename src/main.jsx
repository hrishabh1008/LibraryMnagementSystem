import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import AddBooks from "./pages/AddBooks.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import BooksDetails from "./pages/BooksDetails.jsx";
import HomePage from "./pages/HomePage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/browse",
        element: <BrowseBooks />,
      },
      {
        path: "/add",
        element: <AddBooks />,
      },
      {
        path: "/details/:bookId",
        element: <BooksDetails />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
