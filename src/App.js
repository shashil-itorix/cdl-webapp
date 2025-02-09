import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomeRoute from "./pages/HomeRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyListingPage from "./pages/ListingProperty/PropertyListingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeRoute />,
        },
        {
          path: "/residential",
          element: <PropertyListingPage />,
        },
        {
          path: "/commercial",
          element: <PropertyListingPage />,
        },
        {
          path: "/industrial",
          element: <PropertyListingPage />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
