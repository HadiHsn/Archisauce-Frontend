
import React, { Component } from 'react';

import DanielPic from '../../images/team/Daniel.jpg';
import RanaPic from '../../images/team/Rana.jpg';
import FidaaPic from '../../images/team/Fidaa.jpg';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="about-title mx-auto text-center">
                                    <h2 className="font-weight-bold">Archisauce journey has started as a small idea that sparkled in an inspiring young youth</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row margin-t-50">
                            <div className="col-lg-4 col-sm-6">
                                <div className="team-box text-center">
                                    <div className="team-wrapper">
                                        <div className="team-member team-img-effect">
                                            <img alt="" src={DanielPic} className="img-fluid rounded" />
                                            <div className="work-text-content">
                                                <p>Daniel Bou Dargham, founder of Archisauce, Architect from 2014, dramaturge and social activist. Worked in several NGO's... Entrepreneur and a social researcher, worked in adolescent and youth development programs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="team-name">Daniel Bou Dargham</h4>
                                    <p className="text-uppercase team-designation">Architect</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="team-box text-center">
                                    <div className="team-wrapper">
                                        <div className="team-member team-img-effect">
                                            <img alt="" src={RanaPic} className="img-fluid rounded" />
                                            <div className="work-text-content">
                                                <p>Rana Bou Jaber cofounder and an MA Law graduate, a social and humanitarian activist for more than 10 years. She is a volunteer in several NGOs, a  researcher, and research developer in archisauce</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="team-name">Rana Bou Jaber</h4>
                                    <p className="text-uppercase team-designation">Research Developer</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="team-box text-center">
                                    <div className="team-wrapper">
                                        <div className="team-member team-img-effect">
                                            <img alt="" src={FidaaPic} className="img-fluid rounded" />
                                            <div className="work-text-content">
                                                <p>Fidaa Safi, cofounder of Archisauce.He's a Civil engineer,a social researcher, and a volunteer in several NGO's who wanted to use his knowledge and experience in research development and methodology in architecture domain</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="team-name">Fidaa Safi</h4>
                                    <p className="text-uppercase team-designation">Civil Engineer</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Team;