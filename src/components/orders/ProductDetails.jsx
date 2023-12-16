import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { ImCancelCircle } from "react-icons/im";
import CustomizeItem from "./CustomizeItem";

const ProductDetails = ({ h, p }) => {
  const { setProDetails } = useContext(UserContext);
  const [count, setCount] = useState(1);
  const [customize, setCustomize] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center w-full h-full fixed right-0 top-0  backdrop-blur-md  z-50">
        {customize ? (
          <>
            <CustomizeItem />
          </>
        ) : (
          <div className="lg:w-1/2 w-full lg:h-3/4 bg-gray-50 rounded-lg shadow-sm-light shadow-gray-500 relative">
            <ImCancelCircle
              size={25}
              className="absolute right-0 top-0"
              onClick={() => {
                setProDetails(false);
              }}
            />
            <div className="p-5 flex flex-col justify-between gap-7">
              <div>
                <h1 className="text-2xl font-bold">{h}</h1>
                <p>{p}</p>
              </div>
              <div className="flex justify-between gap-7 ">
                <fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                  <legend>Size</legend>
                  <select
                    className="w-full p-0 focus:border-none border-none focus:outline-none"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">SMALL ($14.99)</option>
                    <option value="saab">MED ($18.99)</option>
                    <option value="opel">LRG ($22.99)</option>
                    <option value="audi">XL ($24.99)</option>
                  </select>
                </fieldset>
                <fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                  <legend>Crust</legend>
                  <select
                    className="w-full p-0 border-0 "
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">REGULAR (S) ($0.00)</option>
                    <option value="saab">THIN (S) ($0.00)</option>
                    <option value="opel">SESAME SEED (S) ($0.00)</option>
                  </select>
                </fieldset>
              </div>
              <textarea
                className="w-full resize-none h-32 border-2 rounded-md focus:border-0 "
                name="note"
                placeholder="Note"
              ></textarea>

              <div className="flex border-2 border-black w-min m-auto rounded-md">
                <p
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                  className="p-3 rounded-l-md text-xl font-bold bg-green-500 text-white cursor-pointer select-none "
                >
                  -
                </p>
                <p className="p-3">{count}</p>

                <p
                  className="p-3 rounded-r-md text-xl font-bold bg-green-500 text-white cursor-pointer select-none"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </p>
              </div>
              <div className="absolute bottom-0 border-t-2 w-full flex justify-between right-0 p-3">
                <button
                  className="bg-green-500 text-white p-2 rounded-md"
                  onClick={() => {
                    setProDetails(false);
                  }}
                >
                  CANCEL
                </button>
                <button
                  className="bg-yellow-400 text-white p-2 rounded-md"
                  onClick={() => {
                    setCustomize(true);
                  }}
                >
                  CUSTOMIZE
                </button>
                <button className="bg-green-500 text-white p-2 rounded-md">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
