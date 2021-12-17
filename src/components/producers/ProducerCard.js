import React, { Component } from 'react';
import { withRouter, } from "react-router-dom";
import { connect } from "react-redux"
import "../../css/producers/producercard.css"

class ProducerCard extends Component {
    render() {
         console.log("tttt", this)
        const {id ,name, legal_name, begin_area, birthday} = this.props.producer
    
        return (
            <div className='producer-card' id={`producer-${id}`}>
                <h4>Producer Name: {name}</h4>
                <h4>Legal Name: {legal_name}</h4>
                <h4>Origin: {begin_area}</h4>
                <h4>Birthday: {birthday}</h4>
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         producer: state.producersReducer.artists
//     }
    
// }
export default withRouter(connect(null, ) (ProducerCard));