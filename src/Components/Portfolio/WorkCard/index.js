import React from 'react';

function WorkCard(props) {
  return (
    <div className="row">
    <div className="col s12 m5 work">
      <div className="work-img">
        <img   src={props.image} alt={props.name}/>
          <a className="link" href={props.deployment} target="_blank">{props.name}</a>
          <a className="icon-circle" href={props.repo} target="_blank"><img className="icon-gif" src="https://ucarecdn.com/5e0cf608-6a82-4549-a506-9ab9c98e8934/githubicon.png"></img></a>
        </div>
    </div>
  </div>
  );
}

export default WorkCard;
