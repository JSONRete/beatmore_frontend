import React from 'react';
import { connect } from 'react-redux';
import BeatCard from './BeatCard';
import FilterField from './FilterField';


class BeatsList extends React.Component{

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
    render() {

        
        return (
            <div className="beats">
                <FilterField handleChange={this.inputChange}/>
                {this.props.loading ? <h1>LOADING....</h1> : this.makeBeats()}
            </div>
    );
        }
};

const mapStateToProps = state => {
    // console.log("test", state)
    return {beats: state.beats }
}


export default connect(mapStateToProps)(BeatsList);