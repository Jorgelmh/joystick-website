import React from 'react'
import UnderlinedTitle from './UnderlinedTitle'
import Console from './Console'
import './Styles/SetUpSite.css'

const SetUpSite = () => {
    return (
        <section className="setup-site container">
            <UnderlinedTitle text="SetUp and Use" />
            <p className="download-latest-release">Get the latest release on <a className="links-source-code" target="_blank" href="https://github.com/Jorgelmh/TouchJoystick">Github</a></p>
            <Console />
        </section>
    )
}

export default SetUpSite