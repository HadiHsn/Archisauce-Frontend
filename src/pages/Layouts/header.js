import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from './Scrollspy';
import ArchisauceLogo from '../../images/ArchisauceLogoWhite.png';
import ReactTooltip from 'react-tooltip';

class Header extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            Tab: '',
            isOpen: false,
            fname: props.user.fname,
            email: props.user.email,
            loggedIn: props.user.loggedIn
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }


    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        console.log("fname", this.state.fname, "email", this.state.email, "loggedIn", this.state.loggedIn)
        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img alt="" src={ArchisauceLogo} className="img-fluid rounded Archisaucelogo" />
                            </Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <ScrollspyNav
                                    scrollTargetIds={["home", "features", "services", "about", "servicesapply", "latestnews", "contact"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"
                                    className={this.state.isOpen ? "navbar-nav ml-0 float-left" : "navbar-nav navbar-center"} >

                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item active"><a href="#home" className="nav-link">Home</a></li>
                                        <li className="nav-item"><a href="#features" className="nav-link">Objective</a></li>
                                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                                        <li className="nav-item"><a href="#servicesapply" className="nav-link">Apply</a> </li>
                                        <li className="nav-item"><a href="#latestnews" className="nav-link">Latest News</a></li>
                                        <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a> </li>
                                    </ul>

                                </ScrollspyNav>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button ml-auto"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        {console.log(this.loggedIn)}
                                        {!this.state.loggedIn && <li><Link to="/signin"><button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Sign In</button></Link></li>}
                                        {this.state.loggedIn && <li className="nav-item active"><p className="btn btn-custom navbar-btn btn-rounded" data-tip="Sign Out!" onClick={this.refreshPage}>Welcome, {this.state.fname}</p></li>}
                                        {this.state.loggedIn && <ReactTooltip place="bottom" effect="solid" />}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;