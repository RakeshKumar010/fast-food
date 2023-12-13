import React, { useContext } from "react";
import Orders from "./Orders";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderType from "./OrderType";
import UserContext from "../context/UserContext";
const Items = () => {
  const [data, setData] = useState(null);
  // Declare a state variable to store the loading status
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const {ordType , setOrdType} = useContext(UserContext)

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
      <div className="p-4 sm:ml-64 flex justify-between items-start">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14  lg:w-2/3 cursor-pointer">
          <div className=" flex justify-between flex-wrap gap-3">
            {data &&
              data.map(({ productName, productDescription, pricedesc }) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        setOrdType(true);
                      }}
                      className=" bg-gray-300 flex text-black justify-between items-center p-4 rounded-md lg:w-96 w-full "
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
              })}
          </div>
        </div>
        <Orders />
      </div>
      {ordType ? <OrderType /> : null}
    </>
  );
};

export default Items;
