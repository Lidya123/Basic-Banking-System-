import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const textclr ={
    color: 'whitesmoke'
}
const Footer = () => {
    
    return (
        <div>
         <footer class="footer bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 ">
                    <p style={textclr}>Sparks Task 1: Basic Banking System</p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h3 style={textclr}>Useful Links</h3>
                    <ul class="list-unstyled link-list">
                        <li><a style={textclr} ui-sref="contact" href="#/contact">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h3>Contact</h3>
                    <address class="md-margin-bottom-40" style={textclr}>
                        <SiGmail /> <a href="mailto:lidyajuliet@gmail.com" class="">lidyajuliet@gmail.com</a><br/>
                       <FaGithub /> <a href="" class="">www.bluedart.in</a><br/>
                       <FaLinkedin /> <a href="" class="">www.bluedart.in</a>

                    </address>
                </div>
            </div>
        </div>

    </footer>
     </div>
    );
}

export default Footer
