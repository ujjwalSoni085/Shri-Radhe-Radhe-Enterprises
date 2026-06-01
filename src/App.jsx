import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products, { GlassDecor } from './components/Products';
import Sidebar from './components/Sidebar';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background-alt font-body">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-20">
            <Products>
              <Features />
            </Products>
          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3 space-y-8">
            <Sidebar />
          </div>
        </section>

        {/* Exclusive Glass Decor Section */}
        <GlassDecor />

        <Testimonials />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
