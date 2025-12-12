import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const s = search.trim().toLowerCase();
    const okSearch = s === "" || p.name.toLowerCase().includes(s);
    const okCategory = category === "All" || p.category === category;
    return okSearch && okCategory;
  });

  return (
    <div className="w-full py-10">
      {/* ---------- Page Header ---------- */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Menu
        </h1>
        <p className="text-gray-500 mt-1">
          Discover delicious meals crafted fresh for you.
        </p>
      </div>

      {/* ---------- Search + Filter Section ---------- */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search food, dishes or restaurants..."
            className="w-full md:flex-1 border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Category Chips */}
        <div className="flex gap-3 mt-4 overflow-x-auto py-2">
          {categories.map((c) => (
            <CategoryChip
              key={c}
              name={c}
              active={c === category}
              onClick={setCategory}
            />
          ))}
        </div>
      </div>

      {/* ---------- Product Grid ---------- */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                className="transition-transform hover:scale-[1.03] hover:shadow-lg duration-300"
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg mt-10">
              No matching items. Try another search!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
