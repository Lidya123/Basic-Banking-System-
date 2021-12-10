import React from 'react';
import {GrDocumentPpt, GrGithub } from 'react-icons/gr';
const About = () => {
    return (
        <div className='container'>
            <div className = ".col-sm-12 contentabt">
                <h1 id="about">About Section</h1><hr/>
                <h3 id="name"> Name - Lidya Simon </h3><hr/>
                <h3 id="sparks">Sparks Internship Task 1 : BASIC BANKING SYSTEM</h3><br/>
                <p>Basic Banking System Website for The Sparks Foundation Internship this is a simple credit management system given in sparks foundation internship program. 
                    There are few dummy users which are used to transfer credits between them and show the transaction history between the users.</p>
                <div className='count'>
                <p>  <GrGithub 
                    style={{ fontSize:"35px"}} />
                    <a  href="https://github.com/Lidya123"> GitHub basic-banking-system</a>
                </p>
                <p>  <GrDocumentPpt 
                    style={{ fontSize:"35px"}} />
                    <a  href=""> PPT on basic-banking-system</a>
                </p></div>
            </div>
        </div>
    
    )
}

export default About
