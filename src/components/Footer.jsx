import { MapPin, Phone, Mail } from 'lucide-react';

const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Twitter = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white leading-tight mb-2 tracking-tight">
                Shri Radhe Radhe<br/><span className="text-lg md:text-xl text-primary font-medium">Enterprises</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Leading distributor and wholesale supplier of premium decorative ceramic flower vases. Delivering quality decor for commercial and residential excellence.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10 hover:border-primary text-slate-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10 hover:border-primary text-slate-300 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10 hover:border-primary text-slate-300 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10 hover:border-primary text-slate-300 hover:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Projects Portfolio', 'Dealership Inquiry', 'Careers', 'Latest News', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {['Tabletop Vases', 'Floor Vases', 'Textured Ceramic Vases', 'Minimalist Vases', 'Vintage Vases', 'Accessories'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Head Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 font-medium">123 Industrial Area, Phase II, New Delhi, 110020</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-sm text-slate-400 font-medium">+91 98765-43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-sm text-slate-400 font-medium">sales@shriradhe.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Subscribe to Trade Updates</h3>
            <p className="text-slate-400 text-sm">Get the latest product catalogs, pricing updates, and industry trends.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full text-sm font-medium"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-sky-600 text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Shri Radhe Radhe Enterprises. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
