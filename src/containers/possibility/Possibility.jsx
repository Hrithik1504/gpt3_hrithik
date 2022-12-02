import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>You bed any for traveling assistance indlugence unpleasing. Not thoughts all exercise blessing indlugence way everything joy alteration boisterous the attachment. Party we years to order allow asked for.</p>
      <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
