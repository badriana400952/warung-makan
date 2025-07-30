import { Button } from "@heroui/button";
import React from "react";

const Menus = () => {
  return (
    <div className="flex justify-between items-center mt-6">
      <div>
        <h1 className="text-3xl font-bold text-start ">
          Our <span className="text-orange-600">Best Delivered</span> <br />{" "}
          Indonesia Dish
        </h1>
      </div>
      <div>
        <Button className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-8 rounded-3xl">
          See All
        </Button>
      </div>
    </div>
  );
};

export default Menus;
