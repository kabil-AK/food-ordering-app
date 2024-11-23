import {  Routes } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from '../pages/PaymentSuccess';
import Register from "../pages/Register";

const Navigation = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
}


export default Navigation;