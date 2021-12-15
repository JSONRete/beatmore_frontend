import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

class ProducerCard extends Component {
    render() {
        console.log("this.props.producer", this.props.producer)
        const {id ,name, gender, beginArea, area, lifeSpan} = this.props.producer
       
        return (
            <div className='producer-card' id={`producer-${id}`}>
            <h4><Link to="/producers">Producer: {name}</Link></h4>  
                <h4>Producer: {gender}</h4>
                <h4>Start: {beginArea}</h4>
                <h4>Current: {area}</h4>
                <h4>Life Span: {lifeSpan}</h4>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        producer: state.producersReducer.artists
    }
    
}
export default withRouter(connect(mapStateToProps) (ProducerCard));

