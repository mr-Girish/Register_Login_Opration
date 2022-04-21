import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [ListUser,setListUser]=useState([]);




    // useEffect(()=>{
    //     axios.get("http://localhost:3001/register").then((response)=>{
    //         console.log(response.data);
    //         // setListUser(response.data);
    //     });
    // },[]);

    const submitData=()=>{
            axios.post("http://localhost:3001/register",{
                name:name,
                email:email,
                password:password
            }).then((response)=>{
                // console.log(response);
                alert('successfully inserted');
            })
    };


    return (
        <>
            <div className='container'>

                <div>
                    <h1>Register page</h1>
                    <div className='form_group'>
                        <label htmlFor="name"> Name</label>
                        <input type="text" placeholder='Enter  Name'  onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='form_group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className='form_group'>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder='Create password' onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div className='form_group'>
                        <label htmlFor="cpassword">Confirm password</label>
                        <input type="text" placeholder='Enter confirm password'  />
                    </div>
                   
                    <input type="submit" className='button'  onClick={submitData} value="
                    Register" />
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

export default Register;
