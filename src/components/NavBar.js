import React from 'react';
import logo from '../bank.jpg';
import {BrowserRouter, Link} from 'react-router-dom'
//react fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
      <a class="navbar-brand" href=" /# "><img src={logo} alt="logo here..." className="logo" /> </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <FontAwesomeIcon icon={faBars} style={{color:"white"}} /> 
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ml-auto">
        <BrowserRouter>
        <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link" href="/components/AddCustomers">Add Customer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/ViewCustomers">All Customers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/TransHistory">Transcation History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">Guide</a>
          </li>
          </BrowserRouter>
        </ul>
        
      </div>
      </div>
    </nav>
    
        );
}

export default NavBar
