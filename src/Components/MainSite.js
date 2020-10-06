import React from 'react'
import Canvas from './Canvas'
import './Styles/MainSite.css'
import UnderlinedTitle from './UnderlinedTitle'

const MainSite = () => {

    return (
        <main className="container main-site" id="start">
            <UnderlinedTitle text="Start" />
            <div className="clearfix">
                <div className="canvas-div">
                    <Canvas name="mainsite"/>
                </div>
                <div className="start-information">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium risus sed pharetra tempus. Aliquam quis lectus ut odio iaculis vestibulum sed non nisi.</p>
                </div> 
            </div>
        </main>
    )
}

export default MainSite