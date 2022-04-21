import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
const UpdatePassword = () => {
    const { id } = useParams();
    let history=useHistory();
    const [newPass,setnewPass]=useState("");
    const [DisplayId,setDisplayId]=useState([]);

    useEffect(() => {
    axios.get("http://localhost:3001/register").then((response) => {
        // console.log(response.data);
        setDisplayId(response.data);
      });
    }, []);


    const updateQuery=()=>{
        // e.preventDefault()
            axios.put(`http://localhost:3001/update`,{
            id:localStorage.getItem("id"),
                password:newPass 
            }).then((response)=>{
                alert("Update Successfully");
               
    


                history.push('/component/UserDashboard')

            })
        // alert(id);
};
    return (
        <>
            <div className='container'>

                <div>
                    <h1>Change Your Password</h1>
                   
                   
                    <div className='form_group'>
                        <label htmlFor="password"> Create new Password</label>
                        <input type="text" placeholder='Create password'  onChange={(e)=>{
                            setnewPass(e.target.value)
                        }} />
                    </div>
                    <div className='form_group'>
                        <label htmlFor="cpassword">Confirm password</label>
                        <input type="text" placeholder='Enter confirm password'  />
                    </div>
                        {/* {
                            DisplayId.map((val,key)=>{
                                return(
                                    <>
                                        {val.id}
                                    </>
                                )
                            })
                        } */}
                        
 <input type="submit" className='button'  /*onClick={()=>{updateQuery(val.id)}}*/ onClick={updateQuery}  value="Update" />

{/* 
{
          DisplayId.map((val) => {
            return (
              <>


                <tbody >
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                  </tr>
                </tbody>

              </>
            )
          })
        } */}
                    
                </div>




            </div>  

        </>
    );
};

export default UpdatePassword;
