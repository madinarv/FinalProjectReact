import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function AdminPanel() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    DeleteUsers();
  }, []);

  const DeleteUsers = async () => {
    const result = await axios.get("https://www.melivecode.com/api/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    const deleteUser = async () =>{
    await axios.delete(`https://www.melivecode.com/api/users/${id}`);
    }
    deleteUser();
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
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
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

