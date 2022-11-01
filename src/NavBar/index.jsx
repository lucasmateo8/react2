import React from "react";
import CartWidget from "../containers/CartWidget";

import './styles.css'
const NavBar = () => {
    return (
        <ul className="navbar me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a href="#home">Incio</a>
            </li>
            <li>
                <a href="#news">Productos</a>
            </li>
            <li>
                <a href="#contact">Contacto</a>
            </li>
            <li>
                <a href="#about">Nosotros</a>
            </li>
            <CartWidget/>
        </ul>
    );
};

export default NavBar;

