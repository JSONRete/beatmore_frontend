import React from 'react';
import background from '../images/test.png'
import "../css/home.css"

const Home = () => {
    return (
        <div>
       
        <img
        className="home"
        src={background}
        alt="home"
      />
    </div>
    );
};

export default Home;

// <img className="home" src={background} style={{ backgroundImage: `url(${background})` }}/>
        

