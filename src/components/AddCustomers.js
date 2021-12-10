import { React, useState } from 'react'

const AddCustomers = () => {

  const [user, setUser] = useState({
    name : "",
    accountno : "",
    balance : "",
    }
  );
    let name, value;
    const getUserData = (event) =>{
      name = event.target.name;
      value = event.target.value;

      setUser({...user, [name]:value});
    };

    const postData = async(e) =>{
      e.preventDefault();

      const {name,accountno,balance} = user;

      if (name && accountno && balance){
        const res = await fetch("https://basic-banking-system-72d68-default-rtdb.firebaseio.com/Users.json",
        {method : "POST",
         headers : {
           "Content-Type" : "application/json",
         },
         body: JSON.stringify({
          name,
          accountno,
          balance,
         })
      })
  
      if (res){
        setUser({
          name : "",
          accountno : "",
          balance : "",
        }
        )
        alert("Customer data added successfully!!");
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
        <label htmlFor="name">Customer Name</label>
        <input 
        type="text"
        name="name"
        placeholder='Enter Customer Name'
        value = {user.name} 
        onChange = {getUserData}
        autoComplete="off"
        required
         />
    </div>
    <div className='form-control'>
        <label htmlFor="account-no">Account no</label>
        <input 
        type="number" 
        placeholder='Enter 6 digit number'
        value={user.accountno}
        name="accountno" 
        min={100000}
        max={999999}
        onChange = {getUserData}  />
    </div>
        <div className='form-control form-control-check'>
        <label htmlFor="balance">Balance Amount</label>
        <input 
        type="number"
        placeholder="Enter balance amt"
        min={0}
        name="balance"
        value={user.balance}
        onChange = {getUserData}    
        />
    </div>
    <div>
        <input type='submit' value='Add Customer' className='btn btn-primary' 
        onClick = {postData}
        />
    </div>
</form>
</div>
  )
}

export default AddCustomers;
