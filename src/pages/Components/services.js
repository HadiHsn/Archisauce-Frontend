import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Our Services</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We serve digital, graphic and dimensional thinking, to create best services of leading brand experiences that adds value to our clients life</p>
                            </Col>
                        </Row>
                        <div className="row margin-t-30">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-diamond text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Data Collection and Adaptation</h4>
                                            <p className="pt-2 text-muted text-justify">Research “is just part of the job”. This is the main service provided by Archisauce. After the material implementation Archisauce will offer the designer a full report that requires</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-news-paper text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Full Report</h4>
                                            <p className="pt-2 text-muted text-justify">Qualitative Research, Research Analysis, Priority Grading, Site Analysis, Law requirements, Project Economic Range, Social Status, Customers’ needs and benefits, and Customers’ planning and design</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-display2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Design</h4>
                                            <p className="pt-2 text-muted text-justify">In this service Archisauce plays the role of the designer also, in other words Archisauce continues the process with the customer to design all the data in architectural perspective</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <Row>
                            <Col lg="4" className="margin-t-20 offset-lg-2">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-timer text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Pixel Perfect Design</h4>
                                            <p className="pt-2 text-muted text-justify">The team will give the architectural company a completed design deducted from the research analysis, mapping through all plans and layouts, conceptual orientation and agreement of the customer on the full design process</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-tools text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Construction Consultancy and Execution</h4>
                                            <p className="pt-2 text-muted text-justify">For a later stage, Archisauce will supervise the execution of the product. More details related to this service is to be discussed case by case</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Services;