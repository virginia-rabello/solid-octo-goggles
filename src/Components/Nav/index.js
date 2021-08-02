import React from 'react';

function Nav (props){
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                <a className="brand-logo left logo-indent" href="/">
                    Virginia Rabello
                </a>
                <ul className="right hide-on-med-and-down">
                    {tabs.map(tab => (
                        <li key={tab}>
                            <a
                            href={'#'+ tab.toLocaleLowerCase()}
                            onClick={()=> props.setCurrentNavItem(tab)}
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;