import React, { Component } from 'react';
import max from './pics/max.JPG';

class About extends Component {
    constructor(props) {
        super(props);

        // Reference to DOM node
        this.myElement = null;

        // Reference to animation
        this.myTween = null;
    }

    render() {
        return (

            <div className="about" ref={div => this.myElement = div}>

                <div>
        
                    <h1>ABOUT</h1>

                </div>
    
                <div className="sub-about">

                    <div id="item1">
    
                        <img src={max} alt="Max" width="200" height="200" />

                    </div>

                    <div id="item2">

                        <p>My name is Maxime Camille and I'm a self-taught programmer 
                        and web developer with a passion for it. I've been a programmer for about 
                        3 years now and am happy with it. I aim to create efficient, beautiful and engaging 
                        web pages and applications and provide the best service. I'm always up 
                        for a challenge, and enjoy learning new skills as a programmer.</p>

                    </div>
    
                </div>
    
            </div>
    
        );
    }
}

export default About;