import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import Menus from "./hooks/menu";
import MenuBast from "@/components/menuBast";
import CategoryMenu from "@/components/CategoryMenu";
import FoodCard from "@/components/menuRegular";
import Promo from "@/components/promo";
import MenuMobile from "@/components/menuMobile";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="w-full bg-[#ffefe6] py-10 md:py-20" id="home">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Kiri - Teks */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Quiq and <span className="text-orange-600">Tasty</span>
                <br />
                <span className="text-orange-600">Food Delivered</span> with
                <br />
                <span className="text-orange-600">a dash of</span> Speed
                Delivery
              </h1>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
                <button className="bg-orange-600 text-white px-10 py-3 rounded-3xl hover:bg-orange-500 transition">
                  Order Now
                </button>
                <button className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-10 py-3 rounded-3xl transition">
                  Truck Order
                </button>
              </div>
            </div>

            {/* Kanan - Gambar */}
            <div className="flex mb-4 justify-center">
              <Image
                alt="food image"
                height={400}
                width={400}
                src="/satu.png"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <Card className="max-w-6xl mx-auto -mt-24 bg-white shadow-lg px-4 md:px-8">
          <CardBody>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Fast Delivery */}
              <div className="flex items-center gap-4">
                <Image
                  alt="Fast Delivery"
                  height={80}
                  width={80}
                  src="/dua.png"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold">Fast Delivery</h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit <br /> amet consectetur adipisicing
                    elit
                  </p>
                </div>
              </div>

              {/* Fresh Food */}
              <div className="flex items-center gap-4">
                <Image
                  alt="Fresh Food"
                  height={80}
                  width={80}
                  src="/tiga.png"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold">Fresh Food</h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit <br /> amet consectetur adipisicing
                    elit
                  </p>
                </div>
              </div>

              {/* Free Delivery */}
              <div className="flex items-center gap-4">
                <Image
                  alt="Free Delivery"
                  height={80}
                  width={80}
                  src="/empat.png"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold">Free Delivery</h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                    elit
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section id="bast-menu" className="py-10">
        <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
            {/* Title */}
            <div className="md:w-1/2">
              <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-start">
                Our <span className="text-orange-600">Best Delivered</span>{" "}
                <br />
                Indonesia Dish
              </h1>
            </div>

            {/* Description */}
            <div className="md:w-1/2">
              <p className="text-gray-600 text-sm leading-relaxed text-start">
                It`s not just about bringing you good food <br />
                from restaurants, we deliver you experience.
              </p>
            </div>
          </div>

          {/* Menu Component */}
          <MenuBast />
        </div>
      </section>

      <CategoryMenu />

      <section className="mt-12" id="regular-menu">
        <div className="container  max-w-7xl px-6 ">
          <Menus />
          <FoodCard />
        </div>
      </section>

      <section className="mt-12">
        <Promo />
      </section>
      <MenuMobile />
    </DefaultLayout>
  );
}
