
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
  const [ListUser, setListUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/register").then((response) => {
      // console.log(response.data);
      setListUser(response.data);
    });
  }, []);


  return (
    <>
      <h1>Display Databse User</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {
          ListUser.map((val) => {
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
        }
      </table>
    </>
  );
};



export default Home;
