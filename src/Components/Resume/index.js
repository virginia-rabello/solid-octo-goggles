import React from'react';

function Resume () {
    return(
        <section>
        <div className="container">
            <div className="about-intro hero-background contact-form">
                <h4>My Resume</h4><a className="download" href={require('../../assets/documents/resume.pdf').default} download>Download here ⬇️</a>
                <ul className="resume-list">Front-end Skills
                    <li>○ HTML</li>
                    <li>○ CSS</li>
                    <li>○ JavaScript</li>
                    <li>○ JQuery</li>
                    <li>○ Responsive Design</li>
                    <li>○ React</li>
                    <li>○ Bootstrap</li>
                    <li>○ Materialize</li>
                    <li>○ Handlebars</li>
                </ul>
                <ul className="resume-list">Back-end Skills
                    <li>○ APIs</li>
                    <li>○ Node</li>
                    <li>○ Express</li>
                    <li>○ MySQL, Sequelize</li>
                    <li>○ MongoDB, Mongoose</li>
                    <li>○ REST</li>
                    <li>○ GraphQL</li>
                </ul>
            </div>
        </div>
        </section>
    );
}

export default Resume;