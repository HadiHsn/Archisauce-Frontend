import React, { Component } from 'react';

import testimonial1 from '../../images/testimonials/Brice.jpg';
import testimonial2 from '../../images/testimonials/Bertina.jpg';
import testimonial3 from '../../images/testimonials/Muire.jpg';

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="testi">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">What they've said</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Archisauce used their model to create a unique and compelling way to display their customer testimonials!</p>
                            </div>
                        </div>
                        <div className="row margin-t-50">
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="testi-icon">
                                            <i className="mdi mdi-format-quote-open display-2"></i>
                                        </div>
                                        <img src={testimonial1} alt="" className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4" />
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Brice Y.</h5>
                                            <p className="text-muted text-center mb-0">“It's really wonderful. It's really wonderful. Archisauce's architecture impressed me on multiple levels.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="testi-icon">
                                            <i className="mdi mdi-format-quote-open display-2"></i>
                                        </div>
                                        <img src={testimonial2} alt="" className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4" />
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Bertina H.</h5>
                                            <p className="text-muted text-center mb-0">“We've seen amazing results already. Archisauce's architecture is both attractive and highly adaptable. Archisauce's architecture was the best investment I ever made. I would gladly pay over 600 dollars for Archisauce's architecture.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="testi-icon">
                                            <i className="mdi mdi-format-quote-open display-2"></i>
                                        </div>
                                        <img src={testimonial3} alt="" className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4" />
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Muire Y.</h5>
                                            <p className="text-muted text-center mb-0">“I love architecture. I was amazed at the quality of architecture. Wow what great service, I love it!” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Testimonial;