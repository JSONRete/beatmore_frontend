import React from 'react';
import ReactPlayer from "react-player";


const BeatCard = (props) => {

    const {id ,artist, song, producer, media} = props.beat
    // console.log("BeatCardLog", props)

    return (
        <div>
            <div className='beat-card' id={`beat-${id}`}>
                <h4>Producer: {producer}</h4>  
            </div>
            <div style={{ width: "15rem", height: "10rem" }}>
                <ReactPlayer
                className='react-player'
                url={media}
                width='100%'
                height='100%'
                />
                <h4>Artist: {artist}</h4>
                <h4>Song: {song}</h4>
            </div> 
        </div>
    );
};

export default BeatCard;