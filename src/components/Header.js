import React from 'react'
import Typed from 'react-typed'
import Footer from './Footer'
import NavBar from './NavBar'
import Sliders from './Sliders'


const Header = () => {
    return (
        <>
        <NavBar/>
        <div className="header-wrapper">
            <div className="main-info" >
                <h1> Basic Banking System </h1>
                <Typed 
                    style={{color:'rgb(38, 7, 150)'}}
                    strings={['ADD CUSTOMERS','VIEW THEM ALL','UR TRANSACTION HISTORY']}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                />
                <Sliders />
            </div>   
        </div>
        <Footer/>
        </>
    )
}

export default Header
