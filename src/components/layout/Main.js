import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Main extends Component {
    

    render() {
        return (
            <div className="container">
                <div className="photo-container">
                    <img src="assets/Profile Photo.png" alt="Laeticia's Profile Picture" className="card-img bio-image"/>
                </div>
                <h5 className="title-name">Laeticia Ndutiye</h5>
            <p className="short-bio">
                         software engineer through the Full-Stack bootcamp at the University of Richmond.
                </p>
                <div className="row justify-content-center short-bio links-row">
                    <div className="col-auto">
                        {/* change to redirect to new component */}
                        <Link className="highlight-me" to="/projects">Portfolio</Link>
                    </div>
                    <div className="col-auto">
                        <a className="highlight-me" href="assets/MelanieHallResume.pdf" download="Laeticia_Ndutiye_Resume">Resume</a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p className="descrp-text"><i className="fas fa-envelope"></i> ndutilae@gmail.com</p> 
                    </div>
                    <div className="col-auto">
                        <p className="descrp-text"><i className="fas fa-phone"></i> (804) 496-0139</p>
                    </div>
                </div>         
            </div>
        )
    }
}

export default Main