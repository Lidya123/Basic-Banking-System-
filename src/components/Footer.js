import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsBoxArrowLeft} from 'react-icons/bs'

const textclr ={
    color: 'whitesmoke'
}
const Footer = () => {
    
    return (
        <div >
         <footer className="footer bg-dark" >
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 ">
                    <p style={textclr}>Sparks Task 1:</p>
                    <p style={textclr}> Basic Banking System</p>
                </div>
                <div className="col-md-4 col-sm-12 map-img">
                    <address className="md-margin-bottom-40" style={textclr}>
                        <SiGmail /> <a href="mailto:lidyajuliet@gmail.com" >lidyajuliet@gmail.com</a><br/>
                       <FaGithub /> <a href="https://github.com/Lidya123" >github.com/Lidya123</a><br/>
                       <FaLinkedin /> <a href="https://www.linkedin.com/in/lidya-simon-b083081ab" >linkedin.com/in/lidya-simon</a>

                    </address>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h3 style={textclr}>Useful Links</h3>
                    <ul className="list-unstyled link-list">
                        <li><a style={textclr}><BsBoxArrowLeft style={{fontSize:"30px",marginLeft:"60px"}}/></a><i className="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                
            </div>
        </div>

    </footer>
     </div>
    );
}

export default Footer
