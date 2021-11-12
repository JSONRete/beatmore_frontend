import React from 'react';
import { connect } from 'react-redux';
import BeatCard from './BeatCard';
import FilterField from './FilterField';


class BeatsList extends React.Component{

    state = {
        search: ""
    }


   filterBeats = () => {
    return this.props.beats
   }



    makeBeats(){
        return this.filterBeats().map(beat => <BeatCard key={beat.id} beat={beat} />)
}
    render() {

        
        return (
            <div className="beats">
                <FilterField />
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