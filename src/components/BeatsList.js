import React from 'react';
import { connect } from 'react-redux';
import BeatCard from './BeatCard';


class BeatsList extends React.Component{

// const BeatsList = ({ beats }) => {



    makeBeats(){
        return this.props.beats.map(beat => <BeatCard key={beat.id} beat={beat} />)
}
    render() {
    return (
        // <div>
        //     {beats.map( beat => <ul  key={beat.id}><li>{beat.artist} - {beat.song} - {beat.producer} - {beat.media}</li></ul> )}
        // </div>
        <div className="beats">
            {this.props.loading ? <h1>LOADING....</h1> : this.makeBeats()}
        </div>

//     <div className="beats">
//     {this.makeBeats()}
//   </div>
    );
        }
};

const mapStateToProps = state => {
    // console.log("test", state)
    return {beats: state.beats }
}


export default connect(mapStateToProps)(BeatsList);