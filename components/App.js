import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import About from "./About";
import Contact from "./Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => (
  <div className="main-app">
    <Header />
    <Body />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
