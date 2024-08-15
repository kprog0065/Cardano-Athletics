import React, { Component } from 'react';
// import FooterData from '../Footer/FooterData';
import { FooterData } from '../../constants/constants';

interface TeamItemProps {
    teamImage?: string;
    memberN?: string;
    memberd?: string;
    role?: string;
    link?: string
}

class Teamitem extends Component<TeamItemProps> {

    render() {
        var { teamImage, memberN, memberd, role, link } = this.props;
        return (
            <div className="ex_team_item">
                <img src={require("../../img/team/" + teamImage)} alt="team" />
                <div className="team_content">
                    <a href=".#">
                        <h3 className="f_p f_size_16 f_600 t_color3">{memberN}</h3>
                    </a>
                    <h5>{role}</h5>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content">
                        {/* <div className="br"></div> */}
                        <a href={link} target='blank'>
                            <h3 className="f_p f_size_16 f_600 w_color">{memberN}</h3>
                        </a>
                        <h5>{memberd}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default Teamitem;