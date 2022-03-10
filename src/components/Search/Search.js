import React from "react";


import css from './Search.module.css';

export const Search = (props) => {
    const {value, onChange, placeholder} = props
    return (
        <input
            placeholder={placeholder}
            className={css["search-input"]}
            type="text"
            value={value}
            onChange={onChange}
        />
    )
}