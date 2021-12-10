import React from 'react';
import database from './firebase';
import { Link } from "react-router-dom";
import {FcMoneyTransfer} from 'react-icons/fc'

 class ViewCustomers extends React.Component {
  state = {
    Users : []
 }
 componentDidMount = () => {
    database.ref('Users').on('value', snapshot => {
       let user = [];
       snapshot.forEach((childsnapshot) => {
          user.push(childsnapshot.val())
       });
       this.setState({ Users : user })
    });
 };
 //
 render() {
    return (
       <div className="content">
          <table className="content-table">
             <thead>
                <tr>
                   <th>First Name</th>
                   <th>Account no</th>
                   <th>Balance</th>
                   <th><FcMoneyTransfer 
                   style={{marginLeft:"25px", fontSize:"35px"}}
                   /></th>
                </tr>
             </thead>
             <tbody >
                {
                   this.state.Users.map((data) => {
                      return (
                         <tr>
                            <td>{data.name}</td>
                            <td>{data.accountno}</td>
                            <td>₹{data.balance}</td>
                            <td><Link to="./Transfer">Transfer Money</Link></td>
                         </tr>
                      )
                   })
                }
             </tbody>
          </table>

       </div>


    )
 }
}

export default ViewCustomers

           