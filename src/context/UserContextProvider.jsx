import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  const [navShow,setNavShow]=useState(true)
   // Declare a state variable to store the data
   const [data, setData] = useState(null);

   // Declare a state variable to store the loading status
   const [loading, setLoading] = useState(true);
 
   const [proDetails, setProDetails] = useState(false);
   const [customize, setCustomize] = useState(false);
 
 
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
  
      
      fetchData();
 
   }, []);

  return (
    <UserContext.Provider value={{navShow,setNavShow,data,proDetails, setProDetails,loading,customize, setCustomize}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider