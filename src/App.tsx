import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio />,
    },
    {
      path: "/blog",
      element: <BlogList />,
    },
    {
      path: "/blog/:slug",
      element: <BlogPost />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
