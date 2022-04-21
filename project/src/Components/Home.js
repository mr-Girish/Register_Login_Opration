
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
 const [name,setName]=useState({
   name:'',
   email:'',
   password:''
 });

  const ClearAll=()=>{
            setName({
              name:'',
              password:''
            })
          };

  return (
    <>
      {/* <h1>All Users</h1> */}
      <div className='container'>

<div>
    <h1>Register page</h1>
    <div className='form_group'>
        <label htmlFor="name"> Name</label>
        <input type="text" placeholder='Enter  Name' name='name'  value={name.name} />
    </div>
    <div className='form_group'>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter email' name='email' value={name.email} />
    </div>
    <div className='form_group'>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder='Create password' name='password' value={name.password}/>
    </div>
    <div className='form_group'>
        <label htmlFor="cpassword">Confirm password</label>
        <input type="text" placeholder='Enter confirm password' name='cpassword'  />
    </div>
   
    <input type="submit" className='button'  onClick={ClearAll} value="Register" />
</div>

{/* <div>{ListUser}</div>

{
    ListUser.map((val)=>{
        return <h1>Username:{val.name}| email:{val.email}</h1>
    })
} */}


</div>

    </>
  );
};



export default Home;
