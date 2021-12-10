
import React from 'react';
import database from './firebase';
// import { Link } from "react-router-dom";

 class TransferHistory extends React.Component {
  state = {
    Transfers : []
 }
 componentDidMount = () => {
    database.ref('Transfers').on('value', snapshot => {
       let transfer = [];
       snapshot.forEach((childsnapshot) => {
          transfer.push(childsnapshot.val())
       });
       this.setState({ Transfers : transfer })
    });
 };

  
 //
 render() {
    return (
       <div className="content">
          <table className="content-table">
             <thead>
                <tr>
                   <th>Payer</th>
                   <th>Receiver</th>
                   <th>Amount</th>
                   <th>Tranfer Time</th>
                </tr>
             </thead>
             <tbody >
                {
                   this.state.Transfers.map((data) => {
                      return (
                         <tr>
                            <td>{data.sender}</td>
                            <td>{data.receiver}</td>
                            <td>₹{data.amount}</td>
                            <td>{data.time}</td>
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

export default TransferHistory;

