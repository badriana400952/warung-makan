const categories = [
  "Nasi Goreng",
  "Nasi Kuning",
  "Nasi Uduk",
  "Nasi Padang",
  "Soto Ayam",
  "Sate Ayam",
  "Rendang",
];

export default function CategoryMenu() {
  const Sparkle = () => (
    <svg viewBox="0 0 8 8" className="w-4 h-4 fill-[#111d0f]">
      <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3L4 0Z" />
    </svg>
  );

  return (
    <div className="container max-w-6xl bg-[#fff4ee] py-3 px-4 overflow-x-auto">
      <div className="flex gap-6 justify-between min-w-max">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-[#111d0f] font-semibold text-sm flex-shrink-0"
          >
            <Sparkle />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
