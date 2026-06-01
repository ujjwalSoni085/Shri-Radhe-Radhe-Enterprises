import { Search, Building, Phone } from 'lucide-react';

const Sidebar = () => {
  return (
    <>
      {/* Search Widget */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-lg font-extrabold font-heading text-text-main mb-4 flex items-center gap-3">
          <Search size={20} className="text-primary" /> Find Products
        </h4>
        <div className="relative">
          <input type="text" placeholder="Search Ceramic products..." className="w-full bg-slate-50 border border-slate-200 rounded-md py-3.5 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium" />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary bg-white p-1.5 rounded-md shadow-sm border border-slate-100">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Categories List */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-lg font-extrabold font-heading text-text-main mb-6 border-b border-slate-100 pb-4">All Categories</h4>
        <ul className="space-y-4">
          {[
             'Decorative Ceramic Flower Vases',
             'Modern Ceramic Vases',
             'Hollow Design Vases',
             'Geometric Ceramic Vases',
             'Abstract Art Vases',
             'Tabletop Flower Vases',
             'Decorative Showpieces',
             'Ceramic Pots & Planters',
             'Home Decor Accessories',
             'Artificial Flower Vases'
          ].map((cat, idx) => (
            <li key={idx}>
              <a href="#" className="flex items-start justify-between group text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                <span className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors mt-1.5 shrink-0"></div>
                  <span className="leading-tight">{cat}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Contact Card */}
      <div className="bg-slate-900 p-8 rounded-xl shadow-xl text-white relative overflow-hidden group">
        <div className="absolute -bottom-10 -right-10 text-primary opacity-20 group-hover:scale-110 transition-transform duration-700">
          <Building size={180} strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">Decor Styling</span>
          <h4 className="text-2xl font-extrabold font-heading mb-3">Space Consultation</h4>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">Need help choosing the perfect ceramic vases, decorative pots, or showpieces for your space? Connect with our interior decor consultants.</p>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/10">
            <div className="bg-primary text-white p-2.5 rounded-md shadow-lg shadow-primary/20">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Direct Sales Line</div>
              <div className="font-bold text-lg tracking-wide">+91 98765-43210</div>
            </div>
          </div>
          <button className="w-full bg-white text-slate-900 hover:bg-primary hover:text-white py-3.5 rounded-md font-bold transition-colors shadow-lg">
            Request Callback
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
