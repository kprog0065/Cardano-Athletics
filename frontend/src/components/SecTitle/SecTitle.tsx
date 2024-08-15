import React, { Component } from 'react';
import Reveal from "react-awesome-reveal";

// Define an interface for the props
interface SectitleProps {
    Title: string;
    TitleP: string;
    tClass?: string;
    sClass?: string;
}

class Sectitle extends Component<SectitleProps> {
    render() {
        // Destructure the props
        const { Title, TitleP, tClass, sClass } = this.props;
        return (
            <div className={`${sClass}`}>
                <Reveal  duration={1300}>
                    <h2 className={`f_p f_size_30 l_height50 f_600 ${tClass}`}>{Title}</h2>
                </Reveal>
                <Reveal  duration={1600}>
                    <p className="f_400 f_size_16 mb-0">{TitleP}</p>
                </Reveal>
            </div>
        );
    }
}

export default Sectitle;
