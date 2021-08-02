import React from 'react';

function Nav (){
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                <a className="brand-logo left logo-indent" href="/">
                    Virginia Rabello
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#about">About me</a></li>
                    <li><a>Portifolio</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Resume</a></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;