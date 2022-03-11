import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

import css from './Filter.module.css';

export const FilterButton = (props) => {
    const { title, arrayFilter, onClickFunctionLoadMore, onClickFunctionChangeFilter, button} = props
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
                <button className={css['button_load_more_filters']} onClick={onClickFunctionLoadMore}>
                    {button ? <FontAwesomeIcon icon={faCircleChevronDown} /> : <FontAwesomeIcon icon={faCircleChevronUp} /> } </button>
            </div>
        </div>
    )
}