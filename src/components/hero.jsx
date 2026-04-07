import { Link } from 'react-router-dom' 
import myPhoto from '../assets/PasFotoNoBackground.png' 

const Hero = () => {
  return (
    <section id="home" className="min-h-fit flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-20 py-12 md:py-20 scroll-mt-32 px-6 md:px-12">

      <div className="w-full md:w-[60%] order-2 md:order-1 text-center md:text-left">
        <h4 className="text-white text-lg md:text-xl font-medium mb-4 opacity-80">
          Hello World,
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase italic text-white tracking-tighter">
          Saya <span className="text-[#FF9F00] block md:inline-block mt-2 md:mt-0">Muhammad Fahmi Baithurrohman</span>
        </h1>
        
        <p className="text-gray-400 mt-6 text-base md:text-lg max-w-xl font-medium mx-auto md:mx-0">
          A Passionate <span className="text-white border-b border-[#FF9F00]">Web Enthusiast</span> & Developer
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-10">
          <a 
            href="/CV_Muhammad%20Fahmi.pdf" 
            download="CV_Muhammad_Fahmi.pdf"
            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-[#FF9F00] hover:text-white transition-all duration-300 shadow-lg active:scale-95"
          >
            Download CV
          </a>
          <Link 
            to="/contact" 
            className="px-8 py-3 border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[40%] flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-10 bg-[#FF9F00] opacity-10 blur-[80px] group-hover:opacity-20 transition-all duration-700"></div>
          
          <div className="relative bg-[#1E1E1E] rounded-4xl md:rounded-5xl overflow-hidden border border-white/10 shadow-2xl z-10 
                        w-70 h-95 sm:w-80 sm:h-105 lg:w-100 lg:h-125 flex items-end justify-center">
            <div className="absolute inset-0 bg-linear-to-t from-[#FF9F00]/20 to-transparent z-0"></div>

            <img 
              src={myPhoto} 
              alt="Muhammad Fahmi" 
              className="relative z-10 w-full h-full object-contain object-bottom scale-110 translate-y-4 group-hover:scale-115 transition-all duration-700"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#FF9F00] rounded-tr-xl z-20"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-xl z-20"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero