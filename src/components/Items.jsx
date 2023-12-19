import React, { useContext } from "react";
import Orders from "./Orders";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import ItemSkeleton from "./skeleton/ItemSkeleton";
import ProductDetails from "./orders/pizza/ProductDetails";
import CalzonesDetails from "./orders/calzones/CalzonesDetails";
import PastaDetails from "./orders/pasta/PastaDetails";
import SidesDetails from "./orders/sides/SidesDetails";
import SaladsDetails from "./orders/salads/SaladsDetails";
const Items = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const text = pathParts[1]; // This will be 'PIZZA' in your case

  const [h,setH]=useState()
  const [p,setP]=useState()
  const [data, setData] = useState(null);
  // Declare a state variable to store the loading status
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { proDetails, setProDetails } = useContext(UserContext);
const [proId,setProId]=useState()
  // const [pizzaRt,setPizzaRt]=useState(text==='PIZZA')
  // const [calzonesRt,setCalzonesRt]=useState(text==='CALZONES')
  // const [classicPouRt,setClassicPouRt]=useState(text==='CLASSIC%20POUTINE')
  // const [pastaRt,setPastaRt]=useState(text==='PASTA')
  // const [sidesRt,setSidesRt]=useState(text==='SIDES')
  // const [saladsRt,setSaladsRt]=useState(text==='SALADS')
  
  const fetchData = async () => {
    try {
      // Make a GET request to the API
      const response = await fetch(
        `https://onlinefoodordering.ca/RangerAPI/testorder/api/Product/ByCategoryId?categoryId=${id}`
        
      );

      // Check if the response is ok
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Set the data state
        setData(data);
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
  }, [id]);

  return (
    <>
    {/* <UserContext.Provider value={{setPizzaRt}}> */}
      <div className="py-4 sm:ml-64 flex justify-between items-start">
        <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14  lg:w-2/3 cursor-pointer">
          <div className=" flex justify-between flex-wrap gap-3">
            {loading ? (
              <ItemSkeleton />
            ) : (
              data &&
              data.map(({ productName, productDescription, pricedesc,productId }) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        setH(productName)
                        setP(productDescription)
                        setProDetails(true);
                        setProId(productId)
                      }}
                      className=" bg-gray-300 flex text-black justify-between items-center p-4 rounded-md  lg:w-custom w-full "
                    >
                      <div className="flex flex-col gap-6 ml-2">
                        <div>
                          <p className="text-lg font-bold">{productName}</p>
                          <p className="text-sm lowercase">
                            {productDescription}
                          </p>
                        </div>

                        <p>{pricedesc}</p>
                      </div>

                      <img
                        src="https://i.pinimg.com/1200x/f4/77/3e/f4773e68cf3c8b68f804c8dce6a4d901.jpg"
                        alt="..."
                        className="lg:w-1/6 w-1/4 rounded-md lg:h-full"
                      />
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>
        <Orders />
      </div>
      {proDetails?<ProductDetails proId={proId}  h={h} p={p} /> : null}
      {/* {proDetails && pizzaRt ? <ProductDetails h={h} p={p} /> : null}
      {proDetails && calzonesRt ? <CalzonesDetails  h={h}  /> : null}
      {proDetails && classicPouRt ? <CalzonesDetails med={'1.25'} lrg={'2.00'} h={h}  /> : null}
      {proDetails && pastaRt ? <PastaDetails h={h}  /> : null}
      {proDetails && sidesRt ? <SidesDetails h={h}  /> : null}
      {proDetails && saladsRt ? <SaladsDetails h={h}  /> : null} */}
      

      {/* </UserContext.Provider> */}
    </>
  );
};

export default Items;
