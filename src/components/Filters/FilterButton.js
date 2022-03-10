import React, { useEffect, useState } from "react";

import css from './Filter.module.css';

export const FilterButton = (props) => {
 
    const { title, arrayFilter, onClickFunctionLoadMore, onClickFunctionChangeFilter, button, link } = props
    return (
        <div className={css["container_filters"]}>
            <h2 className={css['title_of_filter']}>{title}</h2>
            {arrayFilter.map((filter, index) => {
                return (
                    <div className={css["container_filter_list"]}>
                        <button className={css["button_filter_list"]}
                            key={index}
                            value={filter.id}
                            onClick={onClickFunctionChangeFilter}
                        >
                            {filter.name}
                        </button>
                    </div>
                )
            })}
            <div className={css['container_button']}>
                <button className={css['button_load_more_filters']} onClick={onClickFunctionLoadMore}>{button ? "Show All" : "hide"} </button>
            </div>
        </div>
    )
}