import { products } from "../data/product";
import CategoryChip from "../components/CategoryChip";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuPreview({ limit = 999, showCategoriesOnly = false }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((p) => category === "All" || p.category === category)
    .slice(0, limit);

  /* ------------------ CATEGORY-ONLY PREVIEW (Homepage) ------------------- */
  if (showCategoriesOnly) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto scrollbar-hide">
        {categories.map((c) => (
          <CategoryChip
            key={c}
            name={c}
            active={c === category}
            onClick={setCategory}
          />
        ))}

        <Link
          to="/menu"
          className="ml-auto text-orange-600 font-semibold hover:underline whitespace-nowrap"
        >
          See All →
        </Link>
      </div>
    );
  }

  /* --------------------- FULL MENU PREVIEW (Menu Page) --------------------- */
  return (
    <div className="w-full py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Category Chips */}
        <div className="flex gap-3 mb-6 overflow-x-auto py-2 scrollbar-hide">
          {categories.map((c) => (
            <CategoryChip
              key={c}
              name={c}
              active={c === category}
              onClick={setCategory}
            />
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                className="transition-transform hover:scale-[1.03] hover:shadow-lg duration-300"
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10 text-lg">
              No items found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
