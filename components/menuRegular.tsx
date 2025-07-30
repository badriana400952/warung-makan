import Image from "next/image";

const StarIcon = () => (
  <svg
    className="w-4 h-4 fill-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.122 3.45a1 1 0 00.95.69h3.631c.969 0 1.371 1.24.588 1.81l-2.938 2.135a1 1 0 00-.364 1.118l1.123 3.451c.3.922-.755 1.688-1.54 1.118l-2.938-2.135a1 1 0 00-1.176 0l-2.938 2.135c-.784.57-1.838-.196-1.539-1.118l1.122-3.451a1 1 0 00-.364-1.118L2.76 8.877c-.783-.57-.38-1.81.588-1.81h3.631a1 1 0 00.951-.69l1.12-3.45z" />
  </svg>
);

export default function FoodCard() {
  const menus = [
    {
      image: "/reg/f.png",
      title: "South Indian",
      name: "Masala Dosa",
    },
    {
      image: "/reg/a.png",
      title: "Roti Pratan",
      name: "Masala Do",
    },
    {
      image: "/reg/b.png",
      title: "Roti Masala",
      name: "Butter Chicken",
    },
    {
      image: "/reg/c.png",
      title: "Indian Gorengan",
      name: "Gorengan",
    },
    {
      image: "/reg/d.png",
      title: "Kentang Nasi",
      name: "Nasi Goreng Kentang",
    },
    {
      image: "/reg/e.png",
      title: "Odading Bakar",
      name: "Odading Bakar Khas Bandung",
    },
  ];

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {menus.map((menu, index) => (
          <div
            key={index}
            className=" bg-[#fff4ee] mt-12 rounded-xl p-5 w-64 shadow-md flex flex-col items-center relative"
          >
            {/* Gambar Makanan */}
            <div className="w-32 h-32 rounded-full overflow-hidden  -mt-16 mb-4">
              <Image
                src={menu.image}
                alt={menu.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Judul */}
            <h3 className="text-orange-600 font-bold text-sm">{menu.title}</h3>
            <p className="text-gray-800 font-semibold text-base mb-2">
              {menu.name}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
              <span className="text-gray-500 text-xs ml-1">(120)</span>
            </div>

            {/* Harga dan Tombol */}
            <div className="w-full mt-2 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">₹150</span>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
