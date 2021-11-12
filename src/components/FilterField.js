import React from 'react';
import "../css/filterfield.css"

const FilterField = () => {
    return (
        <div id="filter-field">
            <label htmlFor="filter">Filter by Producer</label>
            <input type="text" placeholder="enter producer name"/>
        </div>
    );
};

export default FilterField;