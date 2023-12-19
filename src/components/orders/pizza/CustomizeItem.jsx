import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import UserContext from "../../../context/UserContext";

const CustomizeItem = () => {
  const [veggie, setVeggie] = useState(true);
  const [meat, setMeat] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [sauce, setSauce] = useState(false);
  const { customize, setCustomize } = useContext(UserContext);

  const [selectedItems, setSelectedItems] = useState({
    veggie: [],
    meat: [],
    cheese: [],
    sauce: [],
  });

  const handleCheckboxChange = (category, item) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = { ...prevSelectedItems };
      if (updatedItems[category].includes(item)) {
        updatedItems[category] = updatedItems[category].filter(
          (selectedItem) => selectedItem !== item
        );
      } else {
        updatedItems[category] = [...updatedItems[category], item];
      }
      return updatedItems;
    });
  };

  const handleAddToCartClick = () => {
    console.log("Selected items:", selectedItems);
    // Add logic to update cart or perform other actions with selected items
  };
    const veggieItems = [
    "ALMONDS $(0.99)",
    "BANANA PEPPER $(0.99)",

    "BLACK OLIVE",
    "GARLIC $(0.99)",
    "GREEN PEPPER $(0.99)",
    "HONEY HOT SAUCE $(0.99)",
    "JALAPENO PEPPER $(0.99)",
    "LETTUCE $(0.99)",
    "MUSHROOM $(0.99)",
    "OLIVES $(0.99)",
    "ONION",
    "OREGANO",
    "PESTO SAUCE",
    "PICKLE $(0.99)",
    "PINEAPPLE $(0.99)",
    "RED ONION $(0.99)",
    "RED PEPPERS $(0.99)",
    "ROASTED RED PEPPER $(0.99)",
    "SLICED TOMATO $(0.99)",
    "SOUR CREAM $(0.99)",
    "SPINACH",
    "TOMATO $(0.99)",
  ];
  const meatItems = [
    "BACON $(1.50)",
    "BEEF $(1.50)",
    "BEEF CRUMBLE $(1.50)",
    "CHICKEN $(1.50)",
    "DONAIR BEEF $(1.50)",
    "DONAIR SAUCE $(1.50)",
    "GROUND BEEF $(1.50)",
    "HAM $(1.50)",
    "ITALIAN CRUMBLE $(1.50)",
    "ITALIAN SAUSAGE $(1.50)",
    "LEAN BEEF $(1.50)",
    "MEATBALL $(1.50)",
    "PEPPERONI $(1.50)",
    "PULLED PORK $(1.50)",
    "SALAMI $(1.50)",
    "SHAVED STEAK $(1.50)",
  ];
  const cheeseItem = [
    "CHEDDAR CHEESE $(1.50)",
    "CHEESE",
    "FETA CHEESE $(1.50)",
    "GREEK FETA $(1.50)",
    "MOZZA $(1.50)",
    "PARMESAN CHEESE $(1.50)",
  ];
  const sauceItem = [
    "BBQ SAUCE $(0.99)",
    "BUFFALO SAUCE $(0.99)",
    "GARLIC SAUCE $(0.99)",
    "HONEY GARLIC SAUCE $(0.99)",
    "RANCH SAUCE $(0.99)",
  ];
  return (
    <>
      <div className="lg:w-1/2 flex flex-col w-full lg:h-3/4 h-full overflow-y-scroll bg-gray-50 rounded-lg shadow-sm-light shadow-gray-500 relative">
        <div className="flex p-4 gap-6 border-b-2 border-black sticky top-0 bg-white">
          {["VEGGIE", "MEAT", "CHEESE", "SAUCE"].map((item) => (
            <Link
              key={item}
              className="select-none"
              onClick={() => {
                setVeggie(item === "VEGGIE");
                setMeat(item === "MEAT");
                setCheese(item === "CHEESE");
                setSauce(item === "SAUCE");
              }}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="p-2">
          {veggie && (
            <div className="space-y-2">
              {veggieItems.map((item, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={() =>  handleCheckboxChange("veggie", item)}
                  />
                  <span className="text-gray-900 text-sm">{item}</span>
                </label>
              ))}
            </div>
          )}
     
          {meat && (
            <div className="space-y-2">
              {meatItems.map((item, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={() =>  handleCheckboxChange("meat", item)}
                  />
                  <span className="text-gray-900 text-sm">{item}</span>
                </label>
              ))}
            </div>
          )}
     
          {cheese && (
            <div className="space-y-2">
              {cheeseItem.map((item, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={() =>  handleCheckboxChange("cheese", item)}
                  />
                  <span className="text-gray-900 text-sm">{item}</span>
                </label>
              ))}
            </div>
          )}

          {sauce && (
            <div className="space-y-2">
              {sauceItem.map((item, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={() =>  handleCheckboxChange("sauce", item)}
                  />
                  <span className="text-gray-900 text-sm">{item}</span>
                </label>
              ))}
            </div>
          )}
      
        </div>
        <div className="border-t-2 w-full flex justify-between lg:p-3 sticky  bottom-0 bg-white">
          <button
            className="bg-green-500 text-white p-2 px-6 rounded-md  hover:bg-green-700 transition duration-500 ease-in-out"
            onClick={() => {
              setCustomize(false);
            }}
          >
            BACK
          </button>
          <button
            className="bg-green-500 text-white p-2 rounded-md  hover:bg-green-700 transition duration-500 ease-in-out"
            onClick={handleAddToCartClick}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomizeItem;

