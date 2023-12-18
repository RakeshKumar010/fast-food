import React, { useContext } from 'react'
import { ImCancelCircle } from 'react-icons/im';
import UserContext from '../../../context/UserContext';

const SidesDetails = ({h}) => {
  const { setProDetails } = useContext(UserContext);

  return (
    <>
    <div className="flex justify-center items-center w-full h-full fixed right-0 top-0  backdrop-blur-md  z-50">
        <div className="lg:w-1/2 w-full bg-gray-50 rounded-lg shadow-sm-light lg:p-4 shadow-gray-500 relative">
          <ImCancelCircle
            size={25}
            className="absolute right-0 top-0"
            onClick={() => {
              setProDetails(false);
            }}
          />
          <div className=" flex gap-9 flex-col justify-between h-full">
            <div className="">
              <h1 className="text-2xl font-bold">{h}</h1>
            </div>
            <div className="flex justify-between lg:gap-7 gap-1 ">
                <fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                  <legend>Size</legend>
                  <select
                    className="w-full p-0 focus:border-none border-none focus:outline-none"
                    name="cars"
                    id="cars"
                  >
                    <option value="saab">1LB ($18.99)</option>
                    <option value="opel">2LB ($22.99)</option>
                  </select>
                </fieldset>
                <fieldset className="border-2 px-3 w-1/2 border-black rounded-md">
                  <legend>Crust</legend>
                  <select
                    className="w-full p-0 border-0 "
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">HONEY HOT</option>
                    <option value="saab">SWEET CHILLI THAI</option>
                    <option value="opel">BBQ</option>
                    <option value="opel">BOLD BBQ</option>
                    <option value="opel">BUFFALO</option>
                    <option value="opel">GREEK WINGS</option>
                    <option value="opel">HONEY GARLIC</option>
                    <option value="opel">HOT</option>
                    <option value="opel">LEMON PEPPER</option>
                    <option value="opel">MED</option>
                    <option value="opel">MILD</option>
                    <option value="opel">SALT PEPPER</option>
                  </select>
                </fieldset>
              </div>
            <div className=" border-t-2 w-full flex justify-between lg:py-2">
              <button
                className="bg-green-500 text-white p-2 rounded-md"
                onClick={() => {
                  setProDetails(false);
                }}
              >
                CANCEL
              </button>

              <button className="bg-green-500 text-white p-2 rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidesDetails