import React from 'react';

function WorkCard(props) {
  return (
    <div className="row work-flip">
    <div className="col work">
      <div className="work-front">
        <img   src={props.image} alt={props.name}/>
      </div>
      <div className="work-back">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <p>This app technologies are: {props.technologies}</p>
        <a className="link" href={props.repo} target="_blank">Code</a>
        <a className="link" href={props.deployment} target="_blank">Demo</a>
      </div>
    </div>
  </div>
  );
}

export default WorkCard;
