import React from "react";
import { Link } from "react-router-dom";

import rawg_logo from "../../assets/rawg_logo.png";

import css from './Header.module.css';

export const Header = () => {
    return (
        <div className={css["header"]}>
            <Link className={css["link_head_logo"]}
                to={{pathname: `/`}}
            >
                <img className={css["rawg_logo"]} alt='rawg_logo' src={rawg_logo}></img>
            </Link>
            <div className={css["container_buttons"]}>
                <Link className={css["link_head"]} to="/login">
                    <button className={css["button_signup"]}>LOG IN</button>
                </Link> 
                <Link className={css["link_head"]} to="/signup">
                    <button className={css["button_signup"]}>SIGN UP</button>
                </Link>
            </div>      
        </div>
    )
}