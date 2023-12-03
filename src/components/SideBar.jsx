import { MdOutlineMapsHomeWork, MdOutlineFastfood } from "react-icons/md";

import {
  IoFastFoodOutline,
  IoCreateSharp,
  IoIceCream,
  IoFastFood,
} from "react-icons/io5";
import { PiBowlFoodFill } from "react-icons/pi";
import {
  GiOpenedFoodCan,
  GiFruitBowl,
  GiMilkCarton,
  GiFullPizza,
} from "react-icons/gi";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { navShow } = useContext(UserContext);
  return (
    <>
      <aside
        id="logo-sidebar"
        className={navShow?"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700":"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              {" "}
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GiFullPizza />
                <span className="ms-3">Pizza</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoFastFoodOutline />
                <span className="flex-1 ms-3 whitespace-nowrap">Calzones</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PiBowlFoodFill />
                <span className="flex-1 ms-3 whitespace-nowrap">Pasta</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GiOpenedFoodCan />
                <span className="flex-1 ms-3 whitespace-nowrap">Sides</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoFastFood />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Classic Poutine
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GiFruitBowl />
                <span className="flex-1 ms-3 whitespace-nowrap">Salads</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoIceCream />
                <span className="flex-1 ms-3 whitespace-nowrap">Desserts</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GiMilkCarton />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Dips/Drinks
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoCreateSharp />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Create Your Own
                </span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
