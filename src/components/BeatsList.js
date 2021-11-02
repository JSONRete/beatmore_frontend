import React from 'react';
import { connect } from 'react-redux';

const BeatsList = ({ beats }) => {
    return (
        <div>
            {beats.map( beat => <ul  key={beat.id}><li>{beat.artist} - {beat.song} - {beat.producer} - {beat.media}</li></ul> )}
        </div>
    );
};

const mapStateToProps = state => {
    console.log("test", state)
    return {beats: state.beats }
}

export default connect(mapStateToProps)(BeatsList);