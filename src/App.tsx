import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Purpose } from './components/Purpose';
import { Impact } from './components/Impact';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0b1d3a] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Impact />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
