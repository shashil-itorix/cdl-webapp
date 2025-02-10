import "./App.css";
import Layout from "./components/Layout";
import HomeRoute from "./pages/HomeRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyListingPage from "./pages/ListingProperty/PropertyListingPage";
import PropertyDetails from "./pages/property/PropertyDetails";
import Enquiry from "./pages/enquiry/Enquiry";
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
          path: "/:propertyType",
          element: <PropertyListingPage />,
        },
        {
          path: "/admin/:propertyType/listings",
          element: <PropertyDetails />,
        },
        {
          path: "/admin/:propertyType/enquiries",
          element: <Enquiry />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
