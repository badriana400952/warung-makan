import Image from "next/image";
import React from "react";

const Promo = () => {
  return (
    <div className="w-full  px-4 md:px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Gambar Kiri */}
        <div className="w-full">
          <Image
            src="/special/e1.png"
            alt="Promo A"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Gambar Kanan (b1 dan c1 bertumpuk) */}
        <div className="flex flex-col gap-6 w-full">
          <Image
            src="/special/d1.png"
            alt="Promo B"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
          <Image
            src="/special/c1.png"
            alt="Promo C"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
