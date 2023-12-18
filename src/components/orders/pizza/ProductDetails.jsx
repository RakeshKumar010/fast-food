import { useContext, useEffect, useState } from "react";
import UserContext from "../../../context/UserContext";
import { ImCancelCircle } from "react-icons/im";
import CustomizeItem from "./CustomizeItem";

const ProductDetails = ({ h, p, proId }) => {
  const [count, setCount] = useState(1);
  const { setProDetails, customize, setCustomize, setPizzaRt } =
    useContext(UserContext);
  const [size, setSize] = useState();
  const [crust, setCrust] = useState();
  const [pasta, setPasta] = useState();
  const getPasta =async()=>{
  
    try {
      // Make a GET request to the API
      const response = await fetch(
        `https://onlinefoodordering.ca/RangerAPI/testorder/api/Variation/ByProductId?productId=${proId}`
      );

      // Check if the response is ok
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Set the data state
        setPasta(data);
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Set the error state
      console.log(error);
    }
  }
  const getCrust = async () => {
    try {
      // Make a GET request to the API
      const response = await fetch(
        `https://onlinefoodordering.ca/RangerAPI/testorder/api/Modifier/Crusts?sizeId=1&crustId=0&productId=${proId}`
      );

      // Check if the response is ok
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Set the data state
        setCrust(data);
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Set the error state
      console.log(error);
    }
  };
  const getSize = async () => {
    try {
      // Make a GET request to the API
      const response = await fetch(
        `https://onlinefoodordering.ca/RangerAPI/testorder/api/PizzaSize/ByProductId?productId=${proId}`
      );

      // Check if the response is ok
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Set the data state
        setSize(data);
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Set the error state
      console.log(error);
    }
  };
  useEffect(() => {
    getPasta()
    getCrust();
    getSize();
  }, [proId]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full fixed right-0 top-0  backdrop-blur-md  z-50">
        {customize ? (
          <>
            <CustomizeItem />
          </>
        ) : (
          <>
            {
              <div className="lg:w-1/2 w-full lg:h-3/4 bg-gray-50 rounded-lg shadow-sm-light lg:p-4 shadow-gray-500 relative">
                <ImCancelCircle
                  size={25}
                  className="absolute right-0 top-0"
                  onClick={() => {
                    setProDetails(false);
                  }}
                />
                <div className=" flex gap-7 flex-col justify-between h-full">
                  <div>
                    <h1 className="text-2xl font-bold">{h}</h1>
                    <p>{p}</p>
                  </div>
                  <div className="flex justify-between lg:gap-7 gap-1 ">
                    {size?<fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                      <legend>Size</legend>
                      <select
                        className="w-full p-0 focus:border-none border-none focus:outline-none"
                        name="cars"
                        id="cars"
                        style={{ border: "none" }} // Add this line
                      >
                        {size &&
                          size.map(({ sizeName, sizePriceX1 }) => {
                            return (
                              <>
                                <option value="saab">
                                  {sizeName} {sizePriceX1}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </fieldset>:null}
                    {pasta?<fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                      <legend>DEMO</legend>
                      <select
                        className="w-full p-0 focus:border-none border-none focus:outline-none"
                        name="cars"
                        id="cars"
                        style={{ border: "none" }} // Add this line
                      >
                        {pasta &&
                          pasta.map(({ name, price }) => {
                            return (
                              <>
                            
                                <option value="saab" className={price==0?'hidden':'block'}>
                                  {name} {price}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </fieldset>:null}
                    {pasta?<fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                      <legend>DEMO</legend>
                      <select
                        className="w-full p-0 focus:border-none border-none focus:outline-none"
                        name="cars"
                        id="cars"
                        style={{ border: "none" }} // Add this line
                      >
                        {pasta &&
                          pasta.map(({ name, price }) => {
                            return (
                              <>
                             
                                <option value="saab" className={price==0?'block':'hidden'}>
                                  {name} {price}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </fieldset>:null}
                    {crust?<fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                      <legend>Crust</legend>
                      <select
                        className="w-full p-0 border-0 "
                        name="cars"
                        id="cars"
                      >
                        {crust &&
                          crust.map(({ modifierName, modifierCost }) => {
                            return (
                              <>
                                <option value="volvo">
                                  {modifierName} (${modifierCost})
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </fieldset>:null}
                  </div>
                {size?  <textarea
                    className="w-full resize-none h-32 border-2 rounded-md focus:border-0 "
                    name="note"
                    placeholder="Note"
                  ></textarea>:null}

                  {size?<div className="flex border-2 border-black w-min mx-auto rounded-md">
                    <p
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                      className="p-3 rounded-l-sm text-xl font-bold bg-green-500 text-white cursor-pointer select-none "
                    >
                      -
                    </p>
                    <p className="p-3">{count}</p>

                    <p
                      className="p-3 rounded-r-sm text-xl font-bold bg-green-500 text-white cursor-pointer select-none"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </p>
                  </div>:null}
                  <div className=" border-t-2 w-full flex justify-between lg:p-3">
                    <button
                      className="bg-green-500 text-white p-2 rounded-md"
                      onClick={() => {
                        setProDetails(false);
                      }}
                    >
                      CANCEL
                    </button>
                   { size?<button
                      className="bg-yellow-400 text-white p-2 rounded-md"
                      onClick={() => {
                        setCustomize(true);
                      }}
                    >
                      CUSTOMIZE
                    </button>:null}
                    <button className="bg-green-500 text-white p-2 rounded-md">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            }
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
