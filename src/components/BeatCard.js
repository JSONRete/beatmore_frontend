import ReactPlayer from "react-player";
import React from 'react';
import { Link } from "react-router-dom";
import "../css/beatcard.css"


const BeatCard = (props) => {

    const {id ,artist, song, producer, media} = props.beat
    // console.log("BeatCardLog", props)

    return (
        <div className='beat-card' id={`beat-${id}`}>
            <h4>Producer: {producer}</h4>  
            <div>
            <div style={{ width: "15rem", height: "10rem" }}>
                <ReactPlayer
                className='react-player'
                url={media}
                width='100%'
                height='100%'
                />
                </div> 
                </div>
                <h4>Artist: {artist}</h4>
                <h4>Song: {song}</h4>
      
              <button className="deleteButton" >
                Delete
              </button>
        </div>
    );
};

export default BeatCard;