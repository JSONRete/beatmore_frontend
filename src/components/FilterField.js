import React from 'react';
import "../css/filterfield.css"

const FilterField = (p) => {
    return (
        <div id="filter-field">
            <label htmlFor="filter">Filter by Producer</label>
            <input type="text" placeholder="enter producer name" onChange={p.handleChange}/>
        </div>
    );
};

export default FilterField;