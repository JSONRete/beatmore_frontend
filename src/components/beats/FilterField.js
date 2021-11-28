import React from 'react';
import "../../css/beats/filterfield.css"

const FilterField = (producer) => {
    return (
        <div id="filter-field">
            <label htmlFor="filter">Filter by Producer</label>
            <input type="text" placeholder="enter producer name" onChange={producer.handleChange}/>
        </div>
    );
};

export default FilterField;