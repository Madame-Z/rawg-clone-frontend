import React from "react";

import './Search.css';

export const Search = (props) => {
    const {value, onChange, placeholder} = props
    return (
        <input
            placeholder={placeholder}
            className="search-input"
            type="text"
            value={value}
            onChange={onChange}
        />
    )
}