import React from 'react';
import { Fade } from "react-awesome-reveal";

const HomeBanner = () => {
    return (
        <section className="hosting_banner_area">
            <Fade cascade>
                <ul className="list-unstyled b_line">
                    <li className="wow fadeInUp" data-wow-delay="0.4s"><img src={require("../../img/hosting/line_01.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="0.7s"><img src={require("../../img/hosting/line_02.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="0.9s"><img src={require("../../img/hosting/line_03.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="1.2s"><img src={require("../../img/hosting/line_04.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s"><img src={require("../../img/hosting/line_05.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="1s"><img src={require("../../img/hosting/line_06.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="1s"><img src={require("../../img/hosting/line_07.png")} alt="" /></li>
                    <li className="wow fadeInUp" data-wow-delay="1.3s"><img src={require("../../img/hosting/line_08.png")} alt="" /></li>
                </ul>
            </Fade>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 d-flex align-items-center">
                        <div className="hosting_content">
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">Cardano Athletics Modern Solution !</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.5s">Billie Jean King: "Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose—it teaches you about life."
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <img className="img-fluid wow fadeInRight" data-wow-delay="0.7s" src={require("../../img/hosting/hosting-image.png")} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeBanner;