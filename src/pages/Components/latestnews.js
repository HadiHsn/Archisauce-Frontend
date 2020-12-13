
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import blog1 from '../../images/latestnews/youtubethumbnail1.jpg';
import blog2 from '../../images/latestnews/youtubethumbnail2.jpg';
import blog3 from '../../images/latestnews/youtubethumbnail3.jpg';
import blog4 from '../../images/latestnews/youtubethumbnail4.jpg';
import blog5 from '../../images/latestnews/youtubethumbnail5.jpg';
import blog6 from '../../images/latestnews/youtubethumbnail6.jpg';

class LatestNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="latestnews">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Latest News</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Find the latest breaking news and information on the top latest videos, stories, features, and analysis about Archisauce</p>
                            </div>
                        </div>
                        <div className="row margin-t-30">
                            <div className="col-lg-4">
                                <div className="latestnews-box margin-t-30">
                                    <img src={blog6} className="img-fluid rounded" alt="" />
                                    <div>
                                        <h5 className="mt-4 text-muted">Archisauce</h5>
                                        <h4 className="mt-3"><Link to="#" onClick={evt => { evt.preventDefault(); }} className="latestnews-title">Architecture and Entrepreneurship</Link></h4>
                                        <div className="mt-3">
                                            <a href="https://www.youtube.com/watch?v=41FFXLL7Tpo" target="_blank" rel="noopener noreferrer" className="read-btn">See More <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="latestnews-box margin-t-30">
                                    <img src={blog5} className="img-fluid rounded" alt="" />
                                    <div>
                                        <h5 className="mt-4 text-muted">Archisauce</h5>
                                        <h4 className="mt-3"><Link to="#" onClick={evt => { evt.preventDefault(); }} className="latestnews-title">Architecture and Crime</Link></h4>
                                        <div className="mt-3">
                                            <a href="https://www.youtube.com/watch?v=-J5BhlmpCb8" target="_blank" rel="noopener noreferrer" className="read-btn">See More <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="latestnews-box margin-t-30">
                                    <img src={blog4} className="img-fluid rounded" alt="" />
                                    <div>
                                        <h5 className="mt-4 text-muted">Archisauce</h5>
                                        <h4 className="mt-3"><Link to="#" onClick={evt => { evt.preventDefault(); }} className="latestnews-title">Architecture and Agriculture</Link></h4>
                                        <div className="mt-3">
                                            <a href="https://www.youtube.com/watch?v=8FVR14FU3LE" target="_blank" rel="noopener noreferrer" className="read-btn">See More <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row margin-t-30">
                            <div className="col-lg-4">
                                <div className="latestnews-box margin-t-30">
                                    <img src={blog3} className="img-fluid rounded" alt="" />
                                    <div>
                                        <h5 className="mt-4 text-muted">Archisauce</h5>
                                        <h4 className="mt-3"><Link to="#" onClick={evt => { evt.preventDefault(); }} className="latestnews-title">Architecture and Engineers Syndicate</Link></h4>
                                        <div className="mt-3">
                                            <a href="https://www.youtube.com/watch?v=wTCjbrzQ9ds" target="_blank" rel="noopener noreferrer" className="read-btn">See More <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="latestnews-box margin-t-30">
                                    <img src={blog2} className="img-fluid rounded" alt="" />
                                    <div>
                                        <h5 className="mt-4 text-muted">Archisauce</h5>
                                        <h4 className="mt-3"><Link to="#" onClick={evt => { evt.preventDefault(); }} className="latestnews-title">Architecture and Lebanese University</Link></h4>
                                        <div className="mt-3">
                                            <a href="https://www.youtube.com/watch?v=CPOwvRujVX4" target="_blank" rel="noopener noreferrer" className="read-btn">See More <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="latestnews-box margin-t-30">
                                    <img src={blog1} className="img-fluid rounded" alt="" />
                                    <div>
                                        <h5 className="mt-4 text-muted">Archisauce</h5>
                                        <h4 className="mt-3"><Link to="#" onClick={evt => { evt.preventDefault(); }} className="latestnews-title">Architecture and Society.</Link></h4>
                                        <div className="mt-3">
                                            <a href="https://www.youtube.com/watch?v=GPwFiaajmG4" target="_blank" rel="noopener noreferrer" className="read-btn">See More <i className="mdi mdi-arrow-right"></i></a>
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

export default LatestNews;