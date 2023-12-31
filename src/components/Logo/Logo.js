import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import reac from './reac.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma3 mt0 '>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa1">
          <img style={{paddingTop: '2px'}} alt='logo' src={reac}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;