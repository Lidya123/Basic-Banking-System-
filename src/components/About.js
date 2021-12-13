import React from 'react';
import {GrDocumentPpt, GrGithub } from 'react-icons/gr';
const About = () => {
    return (
        <>
        <div className="header-wrapper">
            <div className="main-info" >
                <h1> About Section </h1>
                <h3 id="name"> Name - Lidya Simon </h3><hr/>
                 <h3 id="sparks">Sparks Internship Task 1 : BASIC BANKING SYSTEM</h3><br/>
                 <p>Basic Banking System Website for The Sparks Foundation Internship this is a simple credit management system given in sparks foundation internship program. 
                     There are few dummy users which are used to transfer credits between them and show the transaction history between the users.</p>
                 <div className='count'>
                 <p>  <GrGithub 
                      style={{ fontSize:"35px"}} />
                     <a  href="git@github.com:Lidya123/Basic-Banking-System-.git"> GitHub basic-banking-system</a>
                 </p>
                 <p>  <GrDocumentPpt 
                     style={{ fontSize:"35px"}} />
                     <a  href="https://www.canva.com/design/DAEyI2AFxIY/mzAllr7pKnKhI-sH6YRmgw/view?utm_content=DAEyI2AFxIY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"> PPT on basic-banking-system</a>
                 </p>
            
            </div>
        </div>
       </div> </>
        // <div className='container'>
        //     <div className = ".col-sm-12 contentabt">
        //         <h1 id="about">About Section</h1><hr/>
        //         <h3 id="name"> Name - Lidya Simon </h3><hr/>
        //         <h3 id="sparks">Sparks Internship Task 1 : BASIC BANKING SYSTEM</h3><br/>
        //         <p>Basic Banking System Website for The Sparks Foundation Internship this is a simple credit management system given in sparks foundation internship program. 
        //             There are few dummy users which are used to transfer credits between them and show the transaction history between the users.</p>
        //         <div className='count'>
        //         <p>  <GrGithub 
        //             style={{ fontSize:"35px"}} />
        //             <a  href="git@github.com:Lidya123/Basic-Banking-System-.git"> GitHub basic-banking-system</a>
        //         </p>
        //         <p>  <GrDocumentPpt 
        //             style={{ fontSize:"35px"}} />
        //             <a  href="https://www.canva.com/design/DAEyI2AFxIY/mzAllr7pKnKhI-sH6YRmgw/view?utm_content=DAEyI2AFxIY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"> PPT on basic-banking-system</a>
        //         </p></div>
        //     </div>
        // </div>
    
    )
}

export default About
