import React from 'react'
import '../../Styles/css/home.css'
import { Button } from '@material-ui/core'
// import BG3 from '../../Assets/images/bg/bg3.png'
import YOUR from '../../Assets/images/text/YOUR.png'
import LOGO from '../../Assets/images/text/LOGO.png'
import HERE from '../../Assets/images/text/HERE.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="row">
                <div className="col-md-6 home-first">
                    <div className="full-container">
                        <div className="landing-card-container">
                            <div className="landing-chip"></div>
                            <div className="landing-logo"> 
                                <span><img src={YOUR}/></span> 
                                <span><img src={LOGO} className="LOGO"/></span>  
                                <span><img src={HERE} className="HERE"/></span>
                            </div>
                            <div className="landing-card-number">
                                <span>7777 7777 7777 7777</span>
                                <span className="landing-valid">Valid SAT 77/77</span>
                            </div>
                        </div>
                        <div className="home-button">
                            <Button component={ Link } to="/order" size="large" variant="outlined" color="default" >
                                Customize Your Own Card
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

