import ReactPlayer from "react-player";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../css/beats/beatcard.css"
import { connect } from "react-redux";
import { removeBeat } from "../../actions/beatActions";


class BeatCard extends Component {




    handleClick = (event) => {
              console.log("beatid", this)
                this.props.removeBeat(this.props.beat.id)
                this.props.history.push("/");
    }
            
    render() {
        const {id ,artist, song, producer, media} = this.props.beat
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
                src="https://www.youtube.com/player_api"
                />
                </div> 
                </div>
                <h4>Artist: {artist}</h4>
                <h4>Song: {song}</h4>
            <button className="deleteButton" onClick={this.handleClick}>
                Delete Beat
            </button>
        </div>
    );
}

}



// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeBeat: (beat) => dispatch(removeBeat(beat))
//     }
// }


// export default connect (null, mapDispatchToProps)(BeatCard)
export default withRouter(connect (null, { removeBeat } )(BeatCard))

// export default BeatCard;
