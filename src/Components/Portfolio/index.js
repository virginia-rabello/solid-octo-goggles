import React, {useState} from 'react';
import WorkCard from './WorkCard';
import works from '../../portfolio.json';

function Portfolio () {
    const [worksList] = useState(works);

    return (
        <section>
        <div className="container">
       <div className="contact-form about-intro">
        <h4>My works</h4>
        <div className="wrapper">
        {worksList.map(work => (
            <WorkCard
            name={work.name}
            image={work.image}
            repo={work.repo}
            deployment={work.deployment}
            de
            ></WorkCard>
        ))}
        </div> 
        </div>
        </div>
        </section>
    );
}

export default Portfolio;