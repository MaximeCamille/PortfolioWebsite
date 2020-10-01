import React, { Component } from 'react';
import java from './pics/java.jpg';
import c from './pics/c.jpg';
import sql from './pics/postgresql.png';
import html from './pics/html.png';
import css from './pics/css3.jpg';
import js from './pics/javascript.png';
import react from './pics/react.png';
import node from './pics/nodejs.png';

class Skills extends Component {

    render() {

        return (

            <div className="about">
    
                <div>
        
                    <h1>SKILLS</h1>

                </div>

                <div className="skills-grid">

                    <img src={java} alt="Max" width="175" height="175" />

                    <img src={c} alt="Max" width="175" height="175" />

                    <img src={sql} alt="Max" width="175" height="175" />

                    <img src={html} alt="Max" width="175" height="175" />

                    <img src={css} alt="Max" width="175" height="175" />

                    <img src={js} alt="Max" width="175" height="175" />

                    <img src={react} alt="Max" width="175" height="175" />

                    <img src={node} alt="Max" width="175" height="175" />

                </div>

            </div>

        );

    }

}

export default Skills;