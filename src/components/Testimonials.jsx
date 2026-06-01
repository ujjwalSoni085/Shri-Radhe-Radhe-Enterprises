import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Vikram Ahuja",
      role: "Lead Interior Designer",
      text: "Shri Radhe Radhe Enterprises is our go-to supplier for premium ceramic vases and custom decor items. The quality of finish on the abstract art vases we sourced for our tech-office lobby.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Vikram+Ahuja&background=0f172a&color=fff"
    },
    {
      name: "Rajesh Singh",
      role: "Decor & Styling Contractor",
      text: "Their stock of modern ceramic pots and tabletop decor items is always reliable and beautifully finished. Fast delivery and excellent wholesale project pricing make them our preferred supplier partner.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Rajesh+Singh&background=0ea5e9&color=fff"
    },
    {
      name: "Meera Reddy",
      role: "Luxury Project Manager",
      text: "We used their premium ceramic flower vases and geometric pots for a premium luxury hotel lobby build. The craftsmanship, texture, and visual impact exceeded our client's expectations.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Meera+Reddy&background=0f172a&color=fff"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">Trusted by Designers</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-6 tracking-tight">Client Testimonials</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Hear from the interior designers, architects, and luxury project managers who style spaces with our creations.</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
          {testimonialsList.map((testimonial, idx) => (
            <div key={idx} className="group bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-500 border border-slate-200/60 relative flex flex-col break-inside-avoid mb-8 sm:mb-8 overflow-hidden">
              
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                <Quote size={48} className="rotate-180" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < testimonial.rating ? "fill-current" : "text-slate-100"} />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 font-medium text-[1.05rem] leading-relaxed">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-4 ring-slate-50 group-hover:ring-primary/10 transition-all duration-500">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
