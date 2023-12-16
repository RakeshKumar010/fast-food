import { ImCancelCircle } from "react-icons/im";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const OrderType = () => {
  const {setProDetails} = useContext(UserContext)

  return (
    <div className='flex justify-center items-center w-full h-full fixed right-0 top-0  backdrop-blur-md  z-50'>
        <div className='lg:w-1/3 w-full bg-gray-50 rounded-lg shadow-2xl shadow-black relative'>

            <h1 className='text-xl p-2'>Order Type:</h1>
            <ImCancelCircle size={25} className="absolute right-0 top-0" onClick={()=>{
                setProDetails(false)
            }}/>
            <hr />
            <div className='flex justify-center'>
                <button className='py-2 px-3 m-4 rounded-md text-white shadow-md bg-green-500'>Take Out</button>
                <button className='py-2 px-3 m-4 rounded-md text-white shadow-md bg-green-500'>Delivery</button>

            </div>

        </div>
        
    </div>
  )
}

export default OrderType