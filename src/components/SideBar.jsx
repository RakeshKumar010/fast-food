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
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { navShow, data } = useContext(UserContext);

  return (
    <>
      <aside
        id="logo-sidebar"
        className={
          navShow
            ? "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            : "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        }
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {data &&
              data.map(({ categoryDescription, id }) => {
                // console.log(value.categoryDescription);
                return (
                  <>
                    <li>
                      <Link
                        to={"/" + categoryDescription + "/" + id}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <GiFullPizza />
                        <span className="ms-3 capitalize ">
                          {categoryDescription}
                        </span>
                      </Link>
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
