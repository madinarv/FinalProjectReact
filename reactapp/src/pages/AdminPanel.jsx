import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Register from "../companents/Register";
import AddUser from "../companents/AddUser";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    GetUsers();
  }, []);

  const GetUsers = async () => {
    const result = await axios.get("http://localhost:3015/posts");
    setUsers(result.data);
  };



  return (
    <div className="container">
      <div className="py-4">
        <Link to='/adduser'><button className="btn btn-primary">ADD</button> </Link>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Settings</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row " key={index}>
                  {index + 1}
                </th>
                <td>{user.lname}  </td>
                <td>{user.fname} </td>
                <td>{user.username}</td>
                <td>
                <button onClick={async()=>{
             await axios.delete (`http://localhost:3015/posts/${user.id}`)
             GetUsers();}}
           className='btn btn-danger' >Delete</button>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminPanel