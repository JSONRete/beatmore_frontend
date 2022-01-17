import React from 'react';
import "../css/beats/filterfield.css"

const PlusField = (test) => {
    console.log(test)
    return (
        <div id="filter-field">
            <label htmlFor="filter">Add to Plus</label>
            <input type="number" placeholder="enter starting count" onChange={test.handleChange}/>
        </div>
    );
};

export default PlusField;