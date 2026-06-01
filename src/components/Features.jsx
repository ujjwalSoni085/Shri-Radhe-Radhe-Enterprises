import { ShieldCheck, Layers } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-6">
      <div className="mb-14 relative pb-5">
        <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
          Our Values
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
          Why Choose Our Ceramics
        </h3>
        <p className="text-slate-500 mt-3 text-base font-medium max-w-xl">
          Handcrafted elegance designed for modern, luxurious spaces.
        </p>
        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-sky-300 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { 
            title: "Premium Handcrafted Quality", 
            desc: "Each piece is meticulously crafted using high-grade ceramic clay and finished with elegant, durable glazes.", 
            icon: <ShieldCheck size={28} className="text-primary group-hover:text-white transition-colors duration-500" /> 
          },
          { 
            title: "Modern & Timeless Designs", 
            desc: "Curated collections featuring sleek hollow donut designs, organic ribbed textures, and minimalist Nordic styles.", 
            icon: <Layers size={28} className="text-primary group-hover:text-white transition-colors duration-500" /> 
          }
        ].map((feature, i) => (
          <div key={i} className="group relative flex flex-col bg-white rounded-3xl border border-slate-100 hover:border-primary/20 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.06)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
            {/* Soft decorative background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Left accent border line that grows on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-slate-100 group-hover:bg-primary transition-colors duration-500"></div>

            <div className="mb-6 relative z-10">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_20px_rgba(14,165,233,0.25)]">
                {feature.icon}
              </div>
            </div>
            <div className="flex flex-col relative z-10">
              <h4 className="text-xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors duration-500">
                {feature.title}
              </h4>
              <p className="text-slate-500 text-[0.95rem] leading-relaxed font-normal">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;


