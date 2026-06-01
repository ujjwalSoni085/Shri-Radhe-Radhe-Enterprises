import { Building, Award, Truck } from 'lucide-react';
import showroomHero from '../assets/showroom_hero.png';

const Hero = () => {
  return (
    <section className="relative min-h-[650px] flex items-center justify-center py-24 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={showroomHero} alt="Premium Home Decor Showroom" className="w-full h-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-3/4">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Premium Decorative Items
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight tracking-tight text-white">
            Timeless Ceramic Art <br /> <span className="text-primary">For Every Space</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-10 text-slate-300 font-normal leading-relaxed">
            Your trusted supplier of Decorative Items, Flower Vases, Ceramic Pots, and premium Decorative Items for commercial and residential projects.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button className="bg-primary text-white px-8 py-4 rounded-md text-base font-bold hover:bg-sky-600 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-1">
              View Product Catalog
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md text-base font-bold hover:bg-white/20 transition-all transform hover:-translate-y-1">
              Contact Sales Team
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 md:gap-12 items-center border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <Building className="text-primary" size={28} />
              </div>
              <div>
                <div className="font-bold text-2xl md:text-3xl tracking-tight">5,000+</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Items Supplied</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <Award className="text-primary" size={28} />
              </div>
              <div>
                <div className="font-bold text-2xl md:text-3xl tracking-tight">50+</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Premium Items</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <Truck className="text-primary" size={28} />
              </div>
              <div>
                <div className="font-bold text-2xl md:text-3xl tracking-tight">Pan-India</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
