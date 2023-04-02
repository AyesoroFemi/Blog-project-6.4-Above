import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlogDetails, {
  loader as singleBlogLoader,
  action as deleteBlogAction,
} from "./pages/BlogDetails";
import Create, { action as blogAction } from "./pages/Create";
import Home, { loader as blogLoader } from "./pages/Home";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home />, loader: blogLoader },
        {
          path: "/:blogId",
          element: <BlogDetails />,
          loader: singleBlogLoader,
          action: deleteBlogAction,
        },
        { path: "create", element: <Create />, action: blogAction },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
