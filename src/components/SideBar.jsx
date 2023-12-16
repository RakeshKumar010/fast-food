import { MdOutlineMapsHomeWork, MdOutlineFastfood } from "react-icons/md";
import { IoCreateSharp, IoIceCream, IoFastFood } from "react-icons/io5";
import { FaCreativeCommonsRemix } from "react-icons/fa";
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

import SideBarSkeleton from "./skeleton/SideBarSkeleton";
const SideBar = () => {
  const { navShow, data, loading } = useContext(UserContext);
  const arr = [
    GiFullPizza,
    IoIceCream,
    FaCreativeCommonsRemix,
    IoFastFood,
    GiOpenedFoodCan,
    GiFruitBowl,
    PiBowlFoodFill,
    GiMilkCarton,
    IoCreateSharp,
  ];
  let iconIndex = 0;

  return (
    <>
      <aside
        id="logo-sidebar"
        className={
          navShow
            ? "fixed top-0 left-0 z-40 w-64 h-screen  pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            : "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        }
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {loading ? (
              <SideBarSkeleton/>
            ) : (
              data &&
              data.map(({ categoryDescription, id }) => {
                const Icon = arr[iconIndex];
                iconIndex = (iconIndex + 1) % arr.length;
                return (
                  <>
                    <li>
                      <Link
                        to={"/" + categoryDescription + "/" + id}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <Icon />
                        <span className="ms-3 capitalize ">
                          {categoryDescription}
                        </span>
                      </Link>
                    </li>
                  </>
                );
              })
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
