import { Link } from 'react-router-dom'
import logoImg from '../assets/logofooter.png' 

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] border-t border-white/5 py-16 px-6 md:px-20 mt-20 relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-[#FF9F00]/50 to-transparent"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">

        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/">
            <img 
              src={logoImg} 
              alt="logofooter" 
              className="h-14 md:h-16 w-auto object-contain brightness-90 hover:brightness-110 hover:scale-105 transition-all duration-500" 
            />
          </Link>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-8 md:gap-12 text-[13px] font-black tracking-[0.2em] uppercase italic">
            <li>
              <Link to="/" className="text-white/60 hover:text-[#FF9F00] transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FF9F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-white/60 hover:text-[#FF9F00] transition-all duration-300 relative group">
                Project
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FF9F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/60 hover:text-[#FF9F00] transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FF9F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container mx-auto border-t border-white/5 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.4em] italic font-bold">
          © {new Date().getFullYear()} <span className="text-[#FF9F00]">Muhammad Fahmi</span>.
        </p>
      </div>
    </footer>
  )
}

export default Footer