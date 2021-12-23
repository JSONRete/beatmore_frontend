import ReactPlayer from "react-player";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../css/beats/beatcard.css"
import { connect } from "react-redux";
import { removeBeat } from "../../actions/beatActions";
import { Link } from "react-router-dom";


class BeatCard extends Component {


state = {
    plus: ""
}

inputChange = (event) => {
    this.setState({plus: event.target.value})
}

plusClick = () => {
    this.setState({plus: this.state.plus + 1})
    
}
// state = {
//     plus: ""
// }

// inputChange = (event) => {
//     this.setState({plus: event.target.value})
// }

// plusClick = () => {
//     this.setState({plus: this.state.plus + this.state.plus})
    
// }


    handleClick = (event) => {
            //   console.log("beatid", this)
                this.props.removeBeat(this.props.beat.id)
                this.props.history.push("/");
    }
    render() {
        const {id ,artist, song, producer, media} = this.props.beat
        // console.log("BeatCardLog", props)
    return (
        <div className='beat-card' id={`beat-${id}`}>
            <h4>Producer: <Link to="/producers">{producer}</Link></h4>
            <div style={{ width: "15rem", height: "10rem" }}>
                <ReactPlayer
                className='react-player'
                url={media}
                width='100%'
                height='100%'
                src="https://www.youtube.com/player_api"
                />
                </div> 
                <h4>Artist: {artist}</h4>
                <h4>Song: {song}</h4>

                <button className="plus-button" onClick={this.plusClick}>{this.state.plus}</button>
                <br/>

            <button className="delete-button" onClick={this.handleClick}>
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

