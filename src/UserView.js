import axios from 'axios';
import React, {  useState,useEffect } from 'react'
import { useParams } from "react-router-dom";


function UserView() {

 

    let params= useParams()
    // const userContext = useContext(UserContext)

const [users,setUsers]=useState([])
    useEffect(() => {

      async function fetchData(){
     let user = await axios.get(`https://62283fa09fd6174ca81e7895.mockapi.io/Users/${params.id}`)
    
   setUsers(user.data);
 
  
  }  fetchData();
    }, [])
    
  return (
    <><h1>User details</h1>

<ul class="list-group">
  <li class="list-group-item active">Name - {users.name} </li>
  <li class="list-group-item">Office - {users.office}</li>
  <li class="list-group-item">age - {users.age}</li>
  <li class="list-group-item">Position - {users.position}</li>
  <li class="list-group-item">Salary - {users.salary}</li>
  <li class="list-group-item">Startdate - {users.startdate}</li>
</ul></>
  )
}

export default UserView