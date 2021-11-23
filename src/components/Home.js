import React from 'react';
import background from '../images/home.png'
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

