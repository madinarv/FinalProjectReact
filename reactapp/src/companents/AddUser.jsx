import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
    let navigate=useNavigate();
    const [lastname, setlastName] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
  
    const UserNamHandler = (e) => {
        setlastName(e.target.value)
    }
    const NameHandler = (e) => {
        setName(e.target.value)
    }
    const emailHandler = (e) => {
        setUsername(e.target.value)
    }
    const UserHandler = (e) => {
        e.preventDefault()
        const addUser = async () => {
            const newUser = {
                lname:lastname,
                fname: name,
                username: username
            }
            await axios.post('http://localhost:3015/posts', newUser)
            navigate("/adminpanel")

        }
     addUser();
    }
    return (
        <div className='container '>
            <div className="row mt-5 w-50 mx-auto ">
                <div className='text-center'>
                    <h1> Add User Form</h1>
                </div>
                <form  >
                <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label ">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control my-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder='Name'
                            onChange={UserNamHandler}
                        />
                    </div>
            
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label ">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control my-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder='UserName'
                            onChange={NameHandler}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            onChange={emailHandler}
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-success"
                            onClick={UserHandler} >Add User</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddUser