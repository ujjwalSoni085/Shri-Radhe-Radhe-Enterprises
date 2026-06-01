import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 px-4 py-3 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="flex-shrink-0">
          <h1 className="text-xl md:text-2xl font-bold font-heading text-text-main leading-tight tracking-tight">
            Shri Radhe Radhe<br/><span className="text-sm md:text-base text-primary font-medium tracking-wide">Enterprises</span>
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">New Arrivals</a>
          <a href="#" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">Decorative Items</a>
          <a href="#" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">Gallery</a>
          <a href="#" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">Blog</a>
        </nav>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <button aria-label="Search" className="p-2 text-text-main hover:text-primary transition-colors rounded-full hover:bg-gray-100">
            <Search size={20} />
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-bold text-text-main hover:text-primary transition-colors">
              Dealer Login
            </button>
            <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-md hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
