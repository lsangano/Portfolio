import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <div>
                {/* NiN */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/RVAiMG.PNG" className="RVA" alt="RVA"/>
                    </div>
                </div> 
                <div className="row justify-content-md-center">
                <div className="col-xs-auto">
                    <a className="descrp-text RVA-app highlight-me" href="rva.herokuapp.com/">
                        <i className="far fa-window-restore"></i>
                        RVA
                    </a>
                </div>
                <div className="col-xs-auto">
                    <a className="descrp-text NIN-repo highlight-me" href="https://">
                        <i className="fab fa-github"></i>
                        RVA
                    </a>
                </div>
            </div>       

                {/* Burger Project */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/n-.png" className="" alt=""/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-auto">
                        <a className="descrp-text  highlight-me" href="https:///">
                            <i className="far fa-window-restore"></i>
                            
                        </a>
                    </div>
                    <div className="col-xs-auto">
                        <a className="descrp-text  highlight-me" href="https://github.com/">
                            <i className="fab fa-github"></i>
                            
                        </a>
                    </div>
                </div>

                {/* Bandmates */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/.PNG" className="" alt=""/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-auto">
                        <a className="descrp-text  highlight-me" href="https:///">
                            <i className="far fa-window-restore"></i>
                            
                        </a> 
                    </div>
                    <div className="col-xs-auto">
                        <a className="descrp-text  highlight-me" href="https://">
                            <i className="fab fa-github"></i>
                            
                        </a> 
                    </div>
                </div>

                {/* Weather App */}
                <div class="row justify-content-md-center project">
                    <div class="col-xs-auto">
                        <img src="assets/.PNG" class="" alt=""/>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-xs-auto">
                        <a class="descrp-text  highlight-me" href="https:///">
                            <i class="far fa-window-restore"></i>
                            
                        </a>
                    </div>
                    <div class="col-md-auto">
                        <a class="descrp-text  highlight-me" href="https://github.co">
                            <i class="fab fa-github"></i>
                            
                        </a>
                    </div>
                </div>

                {/* Coding Quiz */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="" className="" alt=""/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-auto">
                        <a className="descrp-text  highlight-me" href="https:///">
                            <i className="far fa-window-restore"></i>
                            
                        </a>
                    </div>
                    <div className="col-xs-auto">
                        <a className="descrp-text  highlight-me" href="https://">
                            <i className="fab fa-github"></i>
                            
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects