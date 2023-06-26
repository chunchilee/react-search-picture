import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./Layout";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import "./style/style.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
