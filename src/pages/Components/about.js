
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import objectiveImage from '../../images/objective.png';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="features">
                    <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Our Objective</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Ever experience tension and frustration with an architecture design?</p>
                            </Col>
                        </Row>
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="features-box mt-5 mt-lg-0">
                                    <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                        <li className="text-justify">Reduce the conflict between designers and architectural project owners.</li>
                                        <li className="text-justify">Reduce the community, eco-social problems that affects the general situation or circumstances for human relationship in static presence for a definite space.</li>
                                        <li className="text-justify">Create an accurate concept design of all building up to owner’s needs and benefits in a feasible context and environment.</li>
                                        <li className="text-justify">Reduce the performance gap between the predicted performance of the building and that as-built.</li>
                                        <li className="text-justify">Create a community data base regarding the urban social and economic status of architecture the dramatic needs through historical and present era.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="features-img mx-auto mr-lg-0">
                                    <img src={objectiveImage} alt="Objective" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default About;