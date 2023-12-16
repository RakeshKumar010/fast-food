import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  const [navShow,setNavShow]=useState(true)
   // Declare a state variable to store the data
   const [data, setData] = useState(null);

   // Declare a state variable to store the loading status
   const [loading, setLoading] = useState(true);
 
   const [ordType, setOrdType] = useState(false);
 
 
   const fetchData = async () => {
     try {
       // Make a GET request to the API
       const response = await fetch(
         "https://onlinefoodordering.ca/RangerAPI/testorder/api/initialData"
       );
 
       // Check if the response is ok
       if (response.ok) {
         // Parse the response as JSON
         const data = await response.json();
 
         // Set the data state
         setData(data.categories);
       } else {
         // Throw an error with the status text
         throw new Error(response.statusText);
       }
     } catch (error) {
       // Set the error state
       console.log(error);
     } finally {
       // Set the loading state to false
       setLoading(false);
     }
   };
   useEffect(() => {
    setTimeout(() => {
      
      fetchData();
    }, 3000);
   }, []);

  return (
    <UserContext.Provider value={{navShow,setNavShow,data,ordType, setOrdType,loading}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider