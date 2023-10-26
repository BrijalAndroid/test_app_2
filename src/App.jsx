import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios';

const App = () => {

  // const person = {
  //   name: "Akshay",
  //   age: 26,
  //   gender : 'Male'
  // }

  const[users,setUsers] = useState();

  useEffect(()=>{
axios.get('https://6538e172a543859d1bb21e35.mockapi.io/user').then((res)=> setUsers(res.data))
  },[])


  return (
    <div className='container my-5'>
      {/* <Card user={user} /> */}
      
      <div className="row">

      {
          users?.map((user,userIndex) => 
          
          <div className='col-4'>
            <Card user={user} key={userIndex}/>
          </div>
          
          )
      }
      </div>
    </div>
  )
}

export default App
