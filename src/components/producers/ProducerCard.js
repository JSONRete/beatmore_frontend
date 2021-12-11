import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

class ProducerCard extends Component {
    render() {
        const {id ,name, gender, beginArea, area, lifeSpan} = this.props.producer
        return (
            <div className='artist-card' id={`artist-${id}`}>
            <h4><Link to="/producers">Producer: {name}</Link></h4>  

                <h4>Producer: {name}</h4>
                <h4>Producer: {name}</h4>
                <h4>Producer: {name}</h4>
         
        
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