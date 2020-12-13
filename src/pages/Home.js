import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/orange.css';

import Header from './Layouts/header';
import Footer from './Layouts/footer';
import FooterAlt from './Layouts/footer-alt';
import Client from './Components/client';
import CarouselImages from './Components/carousel';
import About from './Components/about';
import Services from './Components/services';
import Team from './Components/team';
import Applyservices from './Components/applyservices';
import Testimonial from './Components/testimonial';
import GetStart from './Components/getstart';
import LatestNews from './Components/latestnews';
import ContactUs from './Components/contact-us';

import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';



class Home extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {

        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        document.body.classList = "";
        window.removeEventListener("scroll", this.scrollNavigation, true)
    }


    scrollNavigation = () => {
        var doc = document.documentElement;

        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }

    render() {
        return (
            <React.Fragment>

                {/*  Header */}
                <Header user={this.props.usr} />

                {/* Home Section */}
                <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <Row>
                                    <Col lg="8" className="offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Archisauce</h1>
                                        <h1 className="home-title">We Design the Sauce, You Taste</h1>
                                        <p className="padding-t-15 home-desc mx-auto">What makes us special is the matching program, in which each user will choose the design based on his desire and passion, and have the opportunity to collaborate with architects to design the structure from his own perspective.</p>
                                        <Link to="#" onClick={this.openModal} className="play-btn"><i className="mdi mdi-play text-center"></i></Link>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OQHLVMrHGLI' onClose={() => this.setState({ isOpen: false })} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client */}
                <Client />

                {/* CarouselImages */}
                <CarouselImages />

                {/* About */}
                <About />

                {/* Services */}
                <Services />

                {/* GetStart */}
                <GetStart />

                {/* About Us */}
                <Team />

                {/* Apply Services */}
                <Applyservices user={this.props.usr} />

                {/* Testimonial */}
                <Testimonial />

                {/* LatestNews */}
                <LatestNews />

                {/* ContactUs */}
                <ContactUs />

                {/* Footer */}
                <Footer />

                {/* Footer Alt */}
                <FooterAlt />

            </React.Fragment >
        );
    }
}

export default Home;