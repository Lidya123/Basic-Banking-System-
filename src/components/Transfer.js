import { React, useState } from 'react'
// import { Type } from 'tsparticles';
import moment from 'moment';

const Transfer = () => {

  const [transfer, setTransfer] = useState({
    sender : "",
    receiver : "",
    amount : "",
    time:moment().format('lll').toString(),
    }
  );
    let name, value;
    const getTransferData = (event) =>{
      name = event.target.name;
      value = event.target.value;

      setTransfer({...transfer, [name]:value});
    };

    const postData = async(e) =>{
      e.preventDefault();

      const {sender,receiver,amount,time} = transfer;

      if (sender && receiver && amount){
        const res = await fetch("https://basic-banking-system-72d68-default-rtdb.firebaseio.com/Transfers.json",
        {method : "POST",
         headers : {
           "Content-Type" : "application/json",
         },
         body: JSON.stringify({
         sender,
         receiver,
         amount,
         time,
         })
      })
  
      if (res){
        setTransfer({
          sender : "",
          receiver : "",
          amount : "",
          time: "",
        }
        )
        alert("Amount Tranferred Successfully!!");
      }
      }
      else{
        alert("Make sure you've filled in all the details!!");
      }
    
    };

  return (
    <div className="container" >
    <form className='add-form' method = "POST">
    <div className='form-control' >
        <label htmlFor="name">Tranfer from: </label>
        <input 
        type="number"
        name="sender"
        placeholder='Enter senders account no'
        value = {transfer.sender} 
        onChange = {getTransferData}
        autoComplete="off"
        min={100000}
        max={999999}
         />
    </div>
    <div className='form-control'>
        <label htmlFor="account-no">Transfer to:</label>
        <input 
        type="number" 
        placeholder='Enter receivers account no'
        value = {transfer.receiver}
        name="receiver" 
        min={100000}
        max={999999}
        onChange = {getTransferData}  />
    </div>
        <div className='form-control form-control-check'>
        <label htmlFor="balance">Amount</label>
        <input 
        type="number"
        placeholder="Enter amt to transfer"
        min={0}
        name="amount"
        value={transfer.amount}
        onChange = {getTransferData}    
        />
    </div>
    <div>
        <input type='submit' value='Tranfer' className='btn btn-primary' 
        onClick = {postData}
        />
    </div>
</form>
</div>
  )
}

export default Transfer;




// const Transfer = () => {

//     return (
          
//     <div class="container" css={CSS}>
//     <img src='/images/img-2.jpg' />
//     <div id='login-form'class='login-page'>
//       <div class="form-box">
//       <h1>Transfer Money</h1>
      
       
    
//       <form id="login" class="input-group-login" onSubmit={handleSubmit}>
        
//           <b><label htmlFor="sender" className="label">
//             Transfer from:
//           </label></b>
//           <input
//             type="number"
            
//             name="sender"
//             class="input-field"
           
//             value={state.sender}
//             onChange={(e) => setState({ ...state, sender: e.target.value })}
//           />
        
        
//           <b><label htmlFor="receiver" className="label">
//             Transfer to:
//           </label></b><br/>
//           <input
//             type="number"
            
//             name="receiver"
//             class="input-field"
            
//             value={state.receiver}
//             onChange={(e) => setState({ ...state, receiver: e.target.value })}
//           />
        
        
//           <b><label htmlFor="from" className="label">
//             Enter Amount:
//           </label></b> <br></br>
//           <input
//             type="number"
//             min={1}
//             name="sender"
//             class="input-field"
            
//             value={state.amount}
//             onChange={(e) => setState({ ...state, amount: e.target.value })}
//           /><br/>
//          <br/>
//           <button type="submit" class='submit-btn'><b>
//             Transfer </b>
//           </button>
        
//       </form>
//     </div>
//     </div>
//     </div>
//   );
//     )
// }

// export default Transfer
