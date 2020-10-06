import React, {useState} from 'react'
import Links from './Links'
import MainTitle from './MainTitle'
import './Styles/Header.css'

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false)

    const displayNav = () => {
        setDisplayMenu(!displayMenu)

        if(displayMenu)
            document.getElementById('navbar').style.display = 'block'
        else
            document.getElementById('navbar').style.display = 'none'

    }

    return (
        <header className="site-header">
            <div className="larger-container">
                <button className="burger-button" onClick={displayNav}>
                    <i className="fas fa-bars"></i>
                </button>
                <nav id="navbar" className="navigation-bar">
                    <Links title="start" />
                    <Links title="setup" />
                    <Links title="examples" />
                </nav>
                <MainTitle title="JoyStick" annotation="Easy to implement video game joystick" />
            </div>
        </header>
    )
}

export default Header