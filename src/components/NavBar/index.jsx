import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <ul>
            <li>
                <Link to="/">INICIO</Link>
            </li>
            <li>
            <Link to ="/category/all">PRODUCTOS</Link>
            </li>
            <li>
                <a href="#contact">NOSOTROS</a>
            </li>
            <Link to ="/cart" > 
            <CartWidget />
            </Link>
        </ul>
    );
};

export default NavBar;
