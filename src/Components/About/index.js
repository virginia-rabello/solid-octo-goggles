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
                <p><Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(10)
                        typewriter.typeString("My full name is Virginia Regina Ferreira da Costa Rabello, I'm married and mother of two beautiful boys. I was born in the South-east of Brazil in 1983, back there it was very hard to have a degree and the unemployment rate was very high, after some temporary jobs I was 19 when I decided to open my own business, it was a successful Hair Stylist Salon where I worked for 9 years learning, teaching and growing as a person. In 2014 my family and I had to move to another state, it was a great career oportunity for my husband and, since I had to close my business, I decided that it was time to change my path. I've always been a passionate about technology, games, computers, etc... but I've never had an opportunity to study before. In 2016 I could finally start studying in the University where I started my Computers Engineering classes, where I studied for 3 years learning computers architecture and coding in low level languages, which makes easier for me learn other languages. In 2019 I was working as an Undergraduate Research Fellow in a microelectronics project for the University, where I used to generate logical synthesis for hardware projects and analyze the reports. By the end of 2019, another great opportunity for my husband came out and another big move was necessary, this time we moved to United States and since then, my new challenge is to get back on the game and start a new career. I recenttly dicovered a new passion for Web Development and I'm investing a lot of my time improving my skills.")
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