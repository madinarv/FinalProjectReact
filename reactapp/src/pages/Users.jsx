import axios from 'axios'
import { useEffect,useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import UserList from './UserList';
const Users = () => {

    const [users,setUsers]=useState([])
   
    useEffect(()=>{
        const getUsers=async()=>{
            const response=await axios.get('http://localhost:3015/posts')
            console.log(response.data);   
            setUsers(response.data)
       
        }
        getUsers();
    },[])
  return (
   <UserList ulist={users}/>  

)
}

export default Users;