import React from "react";

import css from './Filter.module.css';

import { FilterOption } from "./FilterOption";

export const FilterSelect = (props) => {
    const { onChangeFunction} = props
    return (
        <select className={css['select_filter']} onChange={onChangeFunction}>
            <FilterOption title="Relevance"/>
            <FilterOption value="added" title="added"/>
            <FilterOption value="name"title="name"/>
    </select>
    )
}