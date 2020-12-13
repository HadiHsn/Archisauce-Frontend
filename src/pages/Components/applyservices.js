
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class applyservices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            loggedIn: this.props.user.loggedIn
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="servicesapply">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Apply to our Services Here!</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle font-secondary text-muted text-center padding-t-30">We work hard to provide the best services that enhances our clients lives in both physical and psychological perspectives!</p>
                            </div>
                        </div>
                        <div className="row margin-t-50">
                            <div className="col-lg-4">
                                <div className="text-center servicesapply-box">
                                    <div className="ribbon-box"><span>Archisauce</span></div>
                                    <h2>Data Collection and Adaptation</h2>
                                    <div className="plan-features margin-t-50">
                                        <p className="text-muted"><b>Qualitative Research</b></p>
                                        <p className="text-muted"><b>Research Analysis</b></p>
                                        <p className="text-muted"><b>Priority Grading</b></p>
                                        <p className="text-muted"><b>Customers’ planning And Design</b></p>
                                    </div>
                                    <Link to={this.state.loggedIn ? "/formdatacollection" : {pathname: "/signin", state: {fromApplyServices: true, to: "/formdatacollection"}}} className="btn btn-custom waves-effect waves-light margin-t-30">Apply Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-center servicesapply-box bg-white price-active">
                                    <div className="ribbon-box"><span>Archisauce</span></div>
                                    <h1>Design</h1>
                                    <div className="plan-features margin-t-50 margin-b-89">
                                        <p className="text-muted"><b>Architect Matching</b></p>
                                        <p className="text-muted"><b>Architectural Analysis</b></p>
                                        <p className="text-muted"><b>Architectural Design </b></p>
                                    </div>
                                    <Link to={this.state.loggedIn ? "/formdesign" : {pathname: "/signin", state: {fromApplyServices: true, to: "/formdesign"}}} className="btn btn-custom waves-effect waves-light margin-t-30">Apply Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-center servicesapply-box">
                                    <div className="ribbon-box"><span>Archisauce</span></div>
                                    <div className="ribbon-box"><span>Archisauce</span></div>
                                    <h1>Construction</h1>
                                    <div className="plan-features margin-t-50">
                                        <p className="text-muted"><b>Our execution strategy incorporates</b></p>
                                        <p className="text-muted"><b>Proven Methodologies</b></p>
                                        <p className="text-muted"><b>Extremely Qualified Personnel</b></p>
                                        <p className="text-muted"><b>Highly Responsive Approach To Managing Deliverables</b></p>
                                    </div>
                                    <Link to={this.state.loggedIn ? "/formconstruction" : {pathname: "/signin", state: {fromApplyServices: true, to: "/formconstruction"}}} className="btn btn-custom waves-effect waves-light margin-t-30">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default applyservices;