import Image from "next/image";

const menush = [
  {
    image: "/lima.png",
    name: "Indonesian Nasi Goreng",
  },
  {
    image: "/enam.png",
    name: "Tahu Balado",
  },
  { image: "/tujuh.png", name: "Nasi Kuning" },
];

const MenuBast = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-12">
        {menush.map((menu, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <Image
              alt={menu.name}
              className="rounded-lg object-cover w-full h-auto max-w-[250px]"
              src={menu.image}
              width={250}
              height={250}
            />
            <span className="font-sans text-base font-semibold">
              {menu.name}
            </span>
            <span className="font-sans text-sm font-semibold text-orange-600 hover:underline cursor-pointer">
              Order Now &gt;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBast;
