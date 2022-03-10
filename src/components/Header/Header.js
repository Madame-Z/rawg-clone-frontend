import React from "react";
import { Link } from "react-router-dom";

import rawg_logo from "../../assets/rawg_logo.png";

import css from './Header.module.css';

export const Header = () => {
    return (
        <Link
            className={css["header"]}
            to={{pathname: `/`}}
        >
            <img className={css["rawg_logo"]} alt='rawg_logo' src={rawg_logo}></img>
        </Link>   
    )
}