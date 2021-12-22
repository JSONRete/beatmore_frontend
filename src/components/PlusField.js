import React from 'react';
import "../css/beats/filterfield.css"

const PlusField = (count) => {
    console.log(count)
    return (
        <div id="filter-field">
            <label htmlFor="filter">Add to Plus</label>
            <input type="number" placeholder="enter starting count" onChange={count.handleChange}/>
        </div>
    );
};

export default PlusField;