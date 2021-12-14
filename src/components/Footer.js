import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const textclr ={
    color: 'whitesmoke'
}
const Footer = () => {
    
    return (
        <div >
         <footer className="footer bg-dark" >
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 ">
                    <p style={textclr}>Sparks Task 1:</p>
                    <p style={textclr}> Basic Banking System</p>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <address className="md-margin-bottom-40" style={textclr}>
                        <SiGmail /> <a href="mailto:lidyajuliet@gmail.com" >lidyajuliet@gmail.com</a><br/>
                       <FaGithub /> <a href="git@github.com:Lidya123/Basic-Banking-System-.git" >github.com/Lidya123</a><br/>
                       <FaLinkedin /> <a href="https://www.linkedin.com/in/lidya-simon-b083081ab" >linkedin.com/in/lidya-simon</a>

                    </address>
                </div>
                
            </div>
        </div>

    </footer>
     </div>
    );
}

export default Footer
