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

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCrust, setSelectedCrust] = useState("");
  const [note, setNote] = useState("");

  const handleAddToCart = () => {
    // Collect all the selected values
    const cartItem = {                   
      size: selectedSize,
      crust: selectedCrust,
      note: note,
      count: count,
    };

    // You can now do something with the cartItem, such as adding it to the cart state
    console.log("Add to cart:", cartItem);

    // Reset the customization state
    setCustomize(false);
  };

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
              <div className="lg:w-1/2 w-full lg:h-3/4 bg-gray-50 rounded-lg shadow-sm-light lg:p-4 p-3 shadow-gray-500 relative">
                <ImCancelCircle
                  size={25}
                  className="absolute right-0 top-0 cursor-pointer hover:text-red-500"
                  onClick={() => {
                    setProDetails(false);
                  }}
                  aria-label="Close"
                />
                <div className=" flex gap-7 flex-col justify-between h-full">
                  <div className="p-4 bg-white rounded shadow-lg">
                    <h1 className="text-2xl font-bold text-blue-700 mb-2">
                      {h}
                    </h1>
                    <p className="text-gray-700">{p}</p>
                  </div>

                  <div className="flex justify-between lg:gap-7 gap-1">
                    <fieldset className="border-2  w-1/2 border-black rounded-md shadow-lg transition-all duration-500 ease-in-out">
                      <legend className="text-lg font-semibold transition-colors duration-500 ease-in-out hover:text-blue-500">
                        Size
                      </legend>
                      <select
                        className="w-full p-2 focus:border-none border-none focus:outline-none rounded-md focus:ring-0"
                        name="size"
                        id="size"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      >
                        {size?.map(({ sizeName, sizePriceX1 }) => (
                          <option
                            value={sizeName}
                            className="p-1 transition-all duration-500 ease-in-out hover:text-blue-500"
                          >
                            {sizeName} {sizePriceX1}
                          </option>
                        ))}
                      </select>
                    </fieldset>

                    <fieldset className="border-2  w-1/2 border-black rounded-md shadow-lg transition-all duration-500 ease-in-out">
                      <legend className="text-lg font-semibold transition-colors duration-500 ease-in-out hover:text-blue-500">
                        Crust
                      </legend>
                      <select
                        className="w-full p-2 focus:border-none border-none focus:outline-none rounded-md focus:ring-0"
                        name="crust"
                        id="crust"
                        value={selectedCrust}
                        onChange={(e) => setSelectedCrust(e.target.value)}
                      >
                        {crust?.map(({ modifierName, modifierCost }) => (
                          <option value={modifierName}>
                            {modifierName} (${modifierCost})
                          </option>
                        ))}
                      </select>
                    </fieldset>
                  </div>

                  <textarea
                    className="w-full resize-none h-32 border-2 rounded-md focus:border-gray-400 focus:outline-none transition-all duration-500 ease-in-out"
                    name="note"
                    placeholder="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  ></textarea>

                  <div className="flex border-2 border-black w-min mx-auto rounded-md">
                    <button
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                      className="p-3 rounded-l-sm text-xl font-bold bg-green-500 text-white cursor-pointer select-none hover:bg-green-700 transition duration-500 ease-in-out"
                    >
                      -
                    </button>
                    <p className="p-3">{count}</p>
                    <button
                      className="p-3 rounded-r-sm text-xl font-bold bg-green-500 text-white cursor-pointer select-none hover:bg-green-700 transition duration-500 ease-in-out"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div className="border-t-2 w-full flex flex-wrap-reverse gap-3 lg:gap-0   justify-between lg:p-3">
                    <button
                      className="bg-green-500 w-full lg:w-auto text-white p-2 rounded-md hover:bg-green-700 transition duration-500 ease-in-out"
                      onClick={() => {
                        setProDetails(false);
                      }}
                    >
                      CANCEL
                    </button>
                    <button
                      className="bg-yellow-400 w-full lg:w-auto text-white p-2 rounded-md hover:bg-yellow-600 transition duration-500 ease-in-out"
                      onClick={() => {
                        setCustomize(true);
                      }}
                    >
                      CUSTOMIZE
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="bg-green-500 w-full lg:w-auto text-white p-2 rounded-md hover:bg-green-700 transition duration-500 ease-in-out"
                    >
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
