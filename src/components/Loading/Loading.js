import React from "react";
import ReactLoading from 'react-loading';

import './Loading.css';

export const Loading = (props) => {
    const {type, color, height, width} = props
    return (
        <div className='loading_logo'>
            <ReactLoading
                type={type}
                color={color}
                height={height}
                width={width}
            />
        </div>  
    )
}