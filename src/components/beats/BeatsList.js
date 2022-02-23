import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeatCard from './BeatCard';
import FilterField from './FilterField';
import { ScaleLoader } from 'react-spinners';
import "../../css/beats/beatslist.css"


class BeatsList extends Component {

    state = {
        search: ""
    } 

    inputChange = (event) => {
        this.setState({search: event.target.value})
    }

    makeBeats = () => {
        let filterBeatsField = []
        // console.log("filterBeatsField", this.props.search)
        if(this.props.beats){
            filterBeatsField = this.props.beats.filter((p) =>  
            p.producer.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return filterBeatsField.map(beat => <BeatCard key={beat.id} beat={beat} />)
    }

    render() {
        return (
            <div className="beats-list">
                <FilterField handleChange={this.inputChange}/>
                {this.props.loading ? <h1><ScaleLoader
                    color="#F7F706"
                    height={75}
                    width={75}
                /></h1> : this.makeBeats()}
            </div>
    );
        }
};

const mapStateToProps = state => {
    return {
        beats: state.beatsReducer.beats,
        // loading: state.loading
}
    
}
export default connect(mapStateToProps)(BeatsList);