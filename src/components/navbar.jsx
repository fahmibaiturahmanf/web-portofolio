import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logonavbar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 md:py-6 px-6 md:px-12 bg-[#1E1E1E]/90 backdrop-blur-xl z-50 border-b border-white/5 h-20 md:h-24">
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="logonavbar" className="h-12 md:h-18 w-auto object-contain" />
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-120 relative"
        >
          <span className={`h-1 w-8 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5 bg-[#FF9F00]' : 'bg-white'}`}></span>
          <span className={`h-1 w-8 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-[#FF9F00]'}`}></span>
          <span className={`h-1 w-8 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5 bg-[#FF9F00]' : 'bg-white'}`}></span>
        </button>

        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-10 text-base font-semibold tracking-wide uppercase">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-300 hover:text-[#FF9F00] transition-all">{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/about" className="px-8 py-2.5 border-2 border-[#FF9F00] text-[#FF9F00] rounded-full text-sm font-bold uppercase hover:bg-[#FF9F00] hover:text-black transition-all">
            About Me
          </Link>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-[#1E1E1E] z-110 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-6 text-gray-400 hover:text-[#FF9F00] flex items-center gap-2 group transition-all"
        >
          <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Back</span>
          <div className="relative w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-white/5">
             <span className="absolute h-0.5 w-5 bg-white rotate-45"></span>
             <span className="absolute h-0.5 w-5 bg-white -rotate-45"></span>
          </div>
        </button>

        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white uppercase italic hover:text-[#FF9F00] transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
          
          <li className="mt-4">
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="px-12 py-4 border-2 border-[#FF9F00] text-[#FF9F00] rounded-full text-xl font-black uppercase italic active:bg-[#FF9F00] active:text-black transition-all"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar