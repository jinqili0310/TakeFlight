import React, { Component } from 'react';
import Nav from '../Nav'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero_div">
                <Nav navItems={this.props.navItems}/>
                <div id="hero_text_div">
                    <h1>Innovation-driven & Mission-driven Technology</h1>
                    {/* <p>This is some text inside a div block.</p> */}
                </div>
                <div id="buttons_div">
                    <a href="#showcase_div" className="button button_main">The Upcoming App</a>
                    <a href="#programs_div" className="button">Learn more</a>
                </div>
            </div>
        )
    }
}

export default Hero;