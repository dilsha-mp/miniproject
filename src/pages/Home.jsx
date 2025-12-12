import HeroSlider from "../components/HeroSlider";
import MenuPreview from "./MenuPreview";
import { useSelector } from "react-redux";

export default function Home() {
  const dark = useSelector((s) => s.theme.dark);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* HERO SECTION */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* POPULAR NEAR YOU */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-orange-500">
          Explore our Menu
          </h2>
          
        </div>

        <MenuPreview limit={15} />
      </section>
    </div>
  );
}
