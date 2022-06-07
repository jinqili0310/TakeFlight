import React, { Component } from 'react';
import "./Programs.css"

class Programs extends Component {
    render() {
        return (
            <div id="programs_div">
                <h1 className="div_heading light">About Us</h1>
                <p className="div_paragraph light">
                    TAKE FLIGHT, founded in 2019, is an innovative technology company headquartered in Arcadia, California, which focuses on e-cigarette technology research and development.
                </p>
                <p className="div_paragraph light">
                    Our upcoming exclusive application, which is an intelligent vaporizer management and social platform, delivers an exceptional user experience designed for adult smokers to manage their vaporizers as well as share their vaping experience, and make friends with other vapers all around the world. We will continue introduing more features to enhance the user experience and are commited to making it an excellent vertical e-cigarette community.
                </p>
                <p className="div_paragraph light">
                    By doing so, TAKE FLIGHT seeks to help and inspire our users to live a healthier life and enjoy a healthier alternative to tobacco. Our mission is to assist in reducing the world's dependency on cigarettes and encourage others to find alternatives.
                </p>
                {/* <p className="div_subheading light">This is some text inside a div block.</p> */}
                {/* <div id="programs_list_div">

                    {this.props.programs.map((item, i) => {
                        return (
                            <div key={i} className="programs_item_div">
                                <img src={item.image} alt={item.heading} />
                                <h1 className="div_heading light">{item.heading}</h1>
                                <p className="div_subheading light left">{item.paragraph}</p>
                                <a className="button" href={item.href}>Learn more</a>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        )
    }
}

export default Programs;