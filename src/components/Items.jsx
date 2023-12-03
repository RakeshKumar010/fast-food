import React from "react";
import Orders from "./Orders";

const Items = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 flex justify-between items-start">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14  lg:w-2/3">
          <div className=" flex justify-between flex-wrap gap-3">
            <div className=" bg-gray-600 flex text-white justify-between items-center p-4 rounded-md  ">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xl">1. CHEESE PIZZA</p>
                  <p className="text-sm">Cheese</p>
                </div>

                <p>S: $11.99 M: $14.99 L: $17.99 XL: $21.99 P: $9.99</p>
              </div>

              <img
                src="https://media.self.com/photos/622912847b959736301bfb91/master/pass/GettyImages-1301412050.jpg"
                alt="..."
                className="w-1/6 rounded-md"
              />
            </div>
            <div className=" bg-gray-600 flex text-white justify-between items-center p-4 rounded-md  ">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xl">1. CHEESE PIZZA</p>
                  <p className="text-sm">Cheese</p>
                </div>

                <p>S: $11.99 M: $14.99 L: $17.99 XL: $21.99 P: $9.99</p>
              </div>

              <img
                src="https://media.self.com/photos/622912847b959736301bfb91/master/pass/GettyImages-1301412050.jpg"
                alt="..."
                className="w-1/6 rounded-md"
              />
            </div>
            <div className=" bg-gray-600 flex text-white justify-between items-center p-4 rounded-md  ">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xl">1. CHEESE PIZZA</p>
                  <p className="text-sm">Cheese</p>
                </div>

                <p>S: $11.99 M: $14.99 L: $17.99 XL: $21.99 P: $9.99</p>
              </div>

              <img
                src="https://media.self.com/photos/622912847b959736301bfb91/master/pass/GettyImages-1301412050.jpg"
                alt="..."
                className="w-1/6 rounded-md"
              />
            </div>
            <div className=" bg-gray-600 flex text-white justify-between items-center p-4 rounded-md  ">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xl">1. CHEESE PIZZA</p>
                  <p className="text-sm">Cheese</p>
                </div>

                <p>S: $11.99 M: $14.99 L: $17.99 XL: $21.99 P: $9.99</p>
              </div>

              <img
                src="https://media.self.com/photos/622912847b959736301bfb91/master/pass/GettyImages-1301412050.jpg"
                alt="..."
                className="w-1/6 rounded-md"
              />
            </div>
            <div className=" bg-gray-600 flex text-white justify-between items-center p-4 rounded-md  ">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xl">1. CHEESE PIZZA</p>
                  <p className="text-sm">Cheese</p>
                </div>

                <p>S: $11.99 M: $14.99 L: $17.99 XL: $21.99 P: $9.99</p>
              </div>

              <img
                src="https://media.self.com/photos/622912847b959736301bfb91/master/pass/GettyImages-1301412050.jpg"
                alt="..."
                className="w-1/6 rounded-md"
              />
            </div>
          </div>
        </div>
        <Orders />
      </div>
    </>
  );
};

export default Items;
