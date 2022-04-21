import React, { useState, redirect,  } from 'react';
import axios from 'axios';

import App from '../App';
import { useHistory, useParams } from 'react-router-dom';
const Login = () => {
    const { id } = useParams();
    let history=useHistory();
    const [emailLog,setEmailLog]=useState('');
    const [passwordLog,setPasswordLog]=useState('');


    const [loginStatus,setLoginStatus]=useState('');


    
    const Login=()=>{
        axios.post("http://localhost:3001/login",{
            id:id,
            email:emailLog,
            password:passwordLog,
            
           
        }).then((response)=>{

            // console.log(response.data[0].status);

            if(response.data.message)
            {
                
            }
            else if(response.data[0].status==0 )
            {
                let id=response.data[0].id;
                alert(id);
                // alert(response.data[0].id);
                // console.log("go i new page");
                
                history.push(`/component/UserDashboard`);
                // response.render("/component/UserDashboard");
               
            }
            else if(response.data[0].status==1)
            {
                let id=response.data[0].id;
                localStorage.setItem("id", id);  
                alert(id);
                // alert(response.data[0].id);
                // console.log("first you have to change your paassgewor");
                history.push(`/component/UpdatePassword`);
                
            }




            // if(response.data.message)
            // {
            //     setLoginStatus(response.data.message);
            //     console.log(response.data.message)
            // }
            // else{
            //     setLoginStatus(response.data[0].name);
            //     console.log(response.data[0].name);
            //  history.push('/component/UpdatePassword');
                
            // }
            // console.log(response.data);
            // alert('successfully inserted');
        });
};
    return (
        <>
            <div className='container'>

                <div>
                    <h1>Login page</h1>
                  
                    <div className='form_group'>
                        <label htmlFor="fname">Email</label>
                        <input type="text" placeholder='Enter your Email' onChange={(e)=>{setEmailLog(e.target.value)}} />
                    </div>
                    <div className='form_group'>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder='Enter your Password' onChange={(e)=>{setPasswordLog(e.target.value)}} />
                    </div>
                    <input type="submit" onClick={Login} className='button' value="Log in" />
                </div> 

                <h1>{loginStatus}</h1>

            </div>
        </>
    );
};

export default Login;
