import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../Common/Card'

import '../../Css/profile.css'

// localhost:4000/todo/users

function ProfileList ()  {

    const [data,setData] =useState('');

        

    useEffect(() => {
        axios
          .get("http://localhost:4000/todo/users") // Fix the URL
          .then((res) => {

            setData(res.data)
            console.log("response", res.data); // Log the response
            // Update the state with the fetched data
          })
          .catch((err) => {
            console.error("Error fetching users:", err); // Handle errors
          });
      }, []);


    return(

        <div className='card-container'>
            {data?data.users.map((item, key)=>{
                     return <Card title={item.name} image={item.image} description={item.description} email={item.email} location={item.location} Phone={item.phone}/>
            }):<p>Wait Loading</p>}
              
        </div>
    )
}

export default ProfileList



