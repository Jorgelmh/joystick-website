import React, {Fragment} from 'react'
import Header from '../Components/Header'
import MainSite from '../Components/MainSite'
import SetUpSite from '../Components/SetUpSite'
import Demonstration from '../Components/Demonstration'
import Footer from '../Components/Footer'

const Landing = () => {
    return(
        <Fragment>
            <Header />
            <MainSite />
            <SetUpSite />
            <Demonstration />
            <Footer />
        </Fragment>
    )
}
/* 
    TODO: add new components
    
    <SetupSite />
    <Footer />

*/

export default Landing