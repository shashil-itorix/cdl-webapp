import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeRoute from "./pages/HomeRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyDetails from "./pages/property/PropertyDetails";
import Enquiry from "./pages/enquiry/Enquiry";
import Login from './pages/Login';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin/:propertyType/listings",
      element: <PropertyDetails />,
    },
    {
      path: "/admin/:propertyType/enquiries",
      element: <Enquiry />,
    },
  ]);
  return (
    <div>
      <Header />
      <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
