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

    filterProducer = () => {
        return this.props.beats.filter( (producer) => {
            return producer.producer.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }

    // componentDidMount() {
    //     console.log("TESTING DID MOUNT, FROM_BEATLIST")
    // }


    makeBeats(){
        return this.filterProducer().map(beat => <BeatCard key={beat.id} beat={beat} />)
}
// makeBeats(){
//     return this.props.beats.length > 0 ? this.filterProducer().map(beat => <BeatCard key={beat.id} beat={beat} />) : <ScaleLoader />
// }

    render() {

        // console.log("loading from BeatsList", this.props.loading)
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
    // console.log("test", state)
    return {
        beats: state.beats,
        loading: state.loading
}
    
}
export default connect(mapStateToProps)(BeatsList);