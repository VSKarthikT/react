import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurentmenue from "./components/Restaurentmenue";

const Grocery = React.lazy(() => import("./components/Grocery.jsx"));

const Applayout = () => {
  return (
    <div className="app " id="app">
      <Header />
      {/* if path is / shuld have body if path is /about about component should be here */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>This is loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/res/:resId",
        element: <Restaurentmenue />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
