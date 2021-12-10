import React from 'react'
import Typed from 'react-typed'
import Sliders from './Sliders'

const Header = () => {
    return (
        <>
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
        </>
    )
}

export default Header
