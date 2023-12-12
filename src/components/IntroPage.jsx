import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Orders from "./Orders";

const IntroPage = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="p-4 sm:ml-64 flex justify-between items-start">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14  lg:w-2/3">
          <div className=" flex justify-between flex-wrap gap-3">
            <h1 className="lg:text-4xl text-xl font-bold">Welcome to Ranger Pos</h1>
            <p className="text-lg">Enjoy the best fast food in town at your fingertips.</p>
            <p className="text-lg">We offer a wide range of delicious and fresh fast food items, from burgers and fries to pizzas and shakes. Our menu is designed to cater to all taste buds.</p>
            <p className="text-lg">Order now and get your food delivered hot and fast right at your doorstep. Experience the joy of eating without the hassle of cooking.</p>
            <p className="text-lg">Join us on this gastronomic journey and let's make life tastier together!</p>
            <h2 className="text-lg lg:text-2xl font-bold mt-4">Our Menu</h2>
            <p className="text-lg">We offer a variety of food items to choose from:</p>
            <ul className="list-disc list-inside">
              <li><span className="font-bold">Pizza</span>: Our pizzas are made with fresh ingredients and baked to perfection.</li>
              <li><span className="font-bold">Calzones</span> : Enjoy our delicious and filling calzones, a perfect meal for any time of the day.</li>
              <li><span className="font-bold">Pasta</span> : Choose from a variety of pasta dishes, each with its unique flavor profile.</li>
              <li><span className="font-bold">Sides</span>: Complement your meal with our selection of sides.</li>
              <li><span className="font-bold">Classic Poutine</span>: A Canadian classic, our poutine is made with crispy fries, cheese curds, and rich gravy.</li>
              <li><span className="font-bold">Salads</span>: For a lighter option, try our fresh and crisp salads.</li>
              <li><span className="font-bold">Desserts</span>: End your meal on a sweet note with our selection of desserts.</li>
              <li><span className="font-bold">Dips/Drinks</span>: Enhance your meal with our selection of dips and refreshing drinks.</li>
              <li><span className="font-bold">Create Your Own</span>: Customize your meal to your liking with our 'Create Your Own' option.</li>
            </ul>
          </div>
        </div>
        <Orders />
      </div>
    </>
  );
};

export default IntroPage;
