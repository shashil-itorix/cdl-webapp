import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeRoute from './pages/HomeRoute';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
  ]);
  return (
    <div className="">
      <Header />
      <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
