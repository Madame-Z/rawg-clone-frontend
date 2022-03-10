import React, { useEffect, useState } from "react";

export const FilterOption = (props) => {
    const { value, title} = props
    return (
        <option value={value}>{title}</option>
    )
}