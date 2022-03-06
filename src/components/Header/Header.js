import React from "react";
import rawg_logo from "../../assets/rawg_logo.png";

import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <img className="rawg_logo" alt='rawg_logo' src={rawg_logo}></img>
        </header>
    )
}