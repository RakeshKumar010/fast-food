import React, { useState } from "react";
import { Link } from "react-router-dom";
import Veggie from "./Customize/Veggie";

const CustomizeItem = () => {
  const [veggie, setVeggie] = useState(true);
  const [meat, setMeat] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [sauce, setSauce] = useState(false);

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
      <div className="lg:w-1/2 w-full lg:h-3/4 overflow-y-scroll bg-gray-50 rounded-lg shadow-sm-light shadow-gray-500 relative">
        <div className="flex p-4 gap-6 border-b-2 border-black">
          <Link
            onClick={() => {
              setVeggie(true);
              setMeat(false);
              
              setCheese(false);
            setSauce(false)
            }}
          >
            VEGGIE
          </Link>
          <Link
            onClick={() => {
              setMeat(true);
              setVeggie(false);
              setCheese(false);
            setSauce(false)

            }}
          >
            MEAT
          </Link>
          <Link
            onClick={() => {
              setCheese(true);
              setVeggie(false);
              setMeat(false);
            setSauce(false)

            }}
          >
            CHEESE
          </Link>
          <Link onClick={()=>{
            setSauce(true)
            setCheese(false);
            setVeggie(false);
            setMeat(false);
          }}>SAUCE</Link>
        </div>
        <div className="p-2">
          {veggie ? <Veggie items={veggieItems} /> : null}
          {meat ? <Veggie items={meatItems} /> : null}
          {cheese ? <Veggie items={cheeseItem} /> : null}
          {sauce ? <Veggie items={sauceItem } /> : null}
        </div>
      </div>
    </>
  );
};

export default CustomizeItem;
