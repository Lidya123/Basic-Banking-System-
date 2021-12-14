import React from 'react';
import logo from '../bank.jpg';
//react fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <img src={logo} className="navbar brand logo" alt="logo here..." />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon" ><faBars/></span> */}
    <FontAwesomeIcon icon={faBars} style={{color:"white"}} /> 
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/components/AddCustomers">Add Customers</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/components/ViewCustomers">View Customers</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/components/Transfer">Transfer Amount</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/components/TransHistory">View Transactions</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/components/About">About</a>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default NavBar


// const NavBar = () => {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//       <div className="container">
//       <a className="navbar-brand" href=" /# "><img src={logo} alt="logo here..." className="logo" /> </a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//          <FontAwesomeIcon icon={faBars} style={{color:"white"}} /> 
//       </button>
    
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">

//         <ul className="navbar-nav ml-auto">
//         <BrowserRouter>
//         <li className="nav-item">
//             <a className="nav-link" href="/">Home</a>
//           </li>
        
//           <li className="nav-item">
//             <a className="nav-link" href="/components/AddCustomers">Add Customer</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/components/ViewCustomers">All Customers</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/components/TransHistory">Transcation History</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/components/About">About</a>
//           </li>
//           </BrowserRouter>
//         </ul>
        
//       </div>
//       </div>
//     </nav>
    
//         );
// }

// export default NavBar
