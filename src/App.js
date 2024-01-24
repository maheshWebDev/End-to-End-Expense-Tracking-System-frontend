import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      <ToastContainer />

      <Footer />
    </>
  );
}

export default App;
