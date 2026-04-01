import { toast } from "react-toastify";
import { useState } from "react";

// Import all your product icons
import aiWriting from "../assets/products/writing_2327400_1.png";
import designTool from "../assets/products/design-tool.png";
import socialMedia from "../assets/products/social-media.png";
import portfolio from "../assets/products/portfolio.png";
import automation from "../assets/products/operation.png";

const Products = ({ products, addToCart }) => {
  const [purchasedIds, setPurchasedIds] = useState([]);

  // Map product id to image
  const iconMap = {
    1: aiWriting,      // AI Writing Pro
    2: designTool,     // Design Templates Pack
    3: portfolio,      // Premium Stock Assets / Portfolio
    4: automation,     // Automation Toolkit
    5: socialMedia,    // Social Media Content Kit
    // Add more if you have more images
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    setPurchasedIds([...purchasedIds, product.id]);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Premium Digital Tools
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => {
          const isPurchased = purchasedIds.includes(p.id);
          const iconSrc = iconMap[p.id] || null;

          return (
            <div
              key={p.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Icon Circle + Tag */}
              <div className="relative flex justify-between items-start mb-6">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100">
                  {iconSrc ? (
                    <img 
                      src={iconSrc} 
                      alt={p.name} 
                      className="w-14 h-14 object-contain"
                    />
                  ) : (
                    <span className="text-5xl">{p.icon}</span>
                  )}
                </div>

                {/* Tag */}
                {p.tag && (
                  <span
                    className={`px-5 py-1.5 text-xs font-medium rounded-full shadow-sm ${
                      p.tag === "Best Seller"
                        ? "bg-amber-100 text-amber-700"
                        : p.tag === "Popular"
                        ? "bg-violet-100 text-violet-700"
                        : p.tag === "New"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{p.name}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 grow leading-relaxed">
                {p.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">${p.price}</span>
                <span className="text-gray-500">/{p.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 text-sm">
                {p.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5 text-base">✔</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buy Now Button */}
              <button
                onClick={() => handleBuyNow(p)}
                disabled={isPurchased}
                className={`w-full py-4 rounded-2xl text-lg font-semibold transition-all ${
                  isPurchased
                    ? "bg-emerald-500 text-white cursor-default"
                    : "bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-md"
                }`}
              >
                {isPurchased ? "Added to Cart" : "Buy Now"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;