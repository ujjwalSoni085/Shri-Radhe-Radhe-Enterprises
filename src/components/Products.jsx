import React from 'react';
import { ShoppingCart, Heart, Eye, ArrowRight, Sparkles } from 'lucide-react';

// Import images
import img1 from '../assets/img 1.webp';
import img2 from '../assets/img 2.webp';
import img3 from '../assets/img 3.webp';
import img4 from '../assets/img 4.webp';
import img5 from '../assets/img 5.webp';
import img6 from '../assets/img 6.webp';
import img7 from '../assets/img 7.webp';
import img8 from '../assets/img 8.webp';
import img9 from '../assets/img 9.webp';
import img10 from '../assets/img 10.webp';
import img11 from '../assets/img 11.webp';
import img12 from '../assets/img 12.webp';
import img13 from '../assets/img 13.webp';

const productsData = [
  { id: 1, name: "Minimalist Nordic White Vase", category: "Modern Ceramic Vases", price: "₹2,499", image: img1, badge: "New" },
  { id: 2, name: "Ribbed Terracotta Pot", category: "Ceramic Pots & Planters", price: "₹1,899", image: img2, badge: "Popular" },
  { id: 3, name: "Matte Black Geometric Vase", category: "Geometric Ceramic Vases", price: "₹3,299", image: img3, badge: "" },
  { id: 4, name: "Hollow Donut Ceramic Vase", category: "Hollow Design Vases", price: "₹2,199", image: img4, badge: "Trending" },
  { id: 5, name: "Luxury Tabletop Decor Set", category: "Tabletop Flower Vases", price: "₹5,499", image: img5, badge: "Premium" },
  { id: 6, name: "Abstract Sculptural Vase", category: "Abstract Art Vases", price: "₹4,199", image: img6, badge: "" },
  { id: 7, name: "Pastel Earth Flower Pot", category: "Ceramic Pots & Planters", price: "₹1,599", image: img7, badge: "" },
  { id: 8, name: "Tall Fluted Floor Vase", category: "Decorative Showpieces", price: "₹6,899", image: img8, badge: "Best Seller" },
  { id: 9, name: "Glossy Celadon Glazed Vase", category: "Decorative Ceramic Flower Vases", price: "₹2,799", image: img9, badge: "" },
];

export default function Products({ children }) {
  return (
    <div className="space-y-16">
      <div>
        <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-5">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Our Curated Collection</span>
            <h3 className="text-3xl font-heading font-extrabold text-text-main tracking-tight">Premium Decorative Items</h3>
            <p className="text-slate-500 mt-2 text-base">Handcrafted elegance to elevate your living and workspace interiors.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-slate-900 text-white text-xxs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg" aria-label="Add to wishlist">
                    <Heart size={18} />
                  </button>
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg" aria-label="Quick view">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">{product.category}</span>
                <h4 className="font-heading font-bold text-text-main text-lg group-hover:text-primary transition-colors mb-2 leading-snug">{product.name}</h4>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <span className="text-lg font-bold text-slate-900">{product.price}</span>
                  <button className="flex items-center gap-2 text-xs font-bold text-primary group-hover:text-sky-600 transition-colors uppercase tracking-wider">
                    Inquire <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}

export function GlassDecor() {
  const exclusiveItems = [
    { id: 10, name: "Ribbed Textured Amber Vase", category: "Modern Glassware", price: "₹2,199", image: img10 },
    { id: 11, name: "Contemporary Smoked Grey Vase", category: "Modern Glassware", price: "₹3,499", image: img11 },
    { id: 12, name: "Vintage Emerald Glass Jar", category: "Home Decor Accessories", price: "₹1,799", image: img12 },
    { id: 13, name: "Minimalist Clear Solo Vase", category: "Artificial Flower Vases", price: "₹1,299", image: img13 },
  ];

  return (
    <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> Limited Edition
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">The Art of Glass Decor</h2>
          <p className="text-slate-400 text-lg">Discover our exclusive collection of luxury hand-blown glass vases, designed to create stunning refractions and add a modern touch of sophistication to any room.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exclusiveItems.map((item) => (
            <div key={item.id} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-850">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg" aria-label="Add to wishlist">
                    <Heart size={18} />
                  </button>
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg" aria-label="Quick view">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs text-primary font-bold mb-1 uppercase tracking-wider">{item.category}</span>
                <h4 className="font-heading font-bold text-white text-base group-hover:text-primary transition-colors mb-3 leading-snug">{item.name}</h4>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-base font-bold text-white">{item.price}</span>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-sky-400 transition-colors uppercase tracking-wider">
                    Inquire <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
