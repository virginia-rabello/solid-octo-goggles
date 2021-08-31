import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';
import M from 'materialize-css';

class About extends Component {
    componentDidMount(){
        M.AutoInit();
    }
render(){
return (
    
        <section>
            <div className="container">
            <div className="about row">
                <div className="about-intro col z-depth-4">
                <h4 className="typewriter">Who am I?</h4>
                <p>I am a Web Developer with a business driven mindset. I have recently earned my Full Stack Web Developer certification from University of Texas, where I worked to develop skills in JavaScript, HTML5, CSS, React and more tools to develop web applications concerning responsiveness and performance.</p>
                <p>I am a natural problem solver and passionate about developing apps from the scratch, thinking not only in the design but also in what kind of features makes sense for each type of business. I have the ability to lead, exploring each team member's strength and solving conflicts, but I also love being led to learn, to deliver awesome features and develop and improve my skill set.</p>
                <p>After the Boot Camp I have being working independently to learn about AWS , C# and Games development. </p>
                <p>I strive to bring to each project:</p>
                <li>Creativity and a design dressed to each public.</li>
                <li>Problem solving skills, debugging and researching new technologies according to the necessities.</li>
                <li>Team work, collaboration and good communication</li>
                <li> Punctuality, I'm very committed to deadlines.</li>
                <p><Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(20)
                        typewriter.typeString("I am excited to be part of a developers team where I can learn and grow as a professional and person.")
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .start();
                    }}
                    />
                 </p>    
                </div>
            </div>
            </div>
        </section>
    )
            }
}

export default About;