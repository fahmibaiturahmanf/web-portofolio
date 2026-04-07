import { useNavigate } from 'react-router-dom' 
import project1 from '../assets/projeksip.png' 
import project2 from '../assets/projekwordpress.png'

const Projects = () => {
  const navigate = useNavigate(); 
  
  const projectData = [
    {
      title: "Sistem Informasi Pemesanan",
      img: project1,
      description: "Projek digitalisasi dari sebuah sistem pemesanan",
      tools: "Vscode, Figma, Postman, Github, Mongo Compass, React.js, Node.js, Express.js, MongoDB, Adobe Photoshop"
    },
    {
      title: "Wordpress Company Profile",
      img: project2,
      description: "Rancangan website company profile dengan menggunakan wordpress",
      tools: "Wordpress.org and Xampp"
    }
  ]

  const handleNavigate = () => {
    navigate('/project');
    window.scrollTo(0, 0);
  };

  return (
    <section id="project" className="py-24 flex flex-col items-center scroll-mt-32">
      <h2 className="text-4xl font-black text-[#FF9F00] uppercase tracking-[0.3em] mb-16 italic" data-aos="fade-up">
        PROJECT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        {projectData.map((item, index) => (
          <div 
            key={index}
            onClick={handleNavigate} 
            data-aos={index === 0 ? "fade-right" : "fade-left"}
            className="group relative bg-[#25252b]/50 backdrop-blur-sm border border-white/5 rounded-4xl p-8 transition-all duration-500 hover:border-[#FF9F00]/30 hover:-translate-y-3 cursor-pointer"
          >
            <div className="absolute -inset-2 bg-[#FF9F00] opacity-0 blur-2xl group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>

            <h3 className="text-white text-xl font-bold text-center mb-6 uppercase tracking-wide italic">
              {item.title}
            </h3>
            <div className="relative overflow-hidden rounded-2xl aspect-video mb-8 border border-white/10">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-[#FF9F00] text-sm font-black tracking-widest uppercase italic">Click to View Details</span>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <p className="text-gray-300 leading-relaxed italic text-sm">
                {item.description}
              </p>
              
              <div className="pt-4 border-t border-white/5">
                <p className="text-[11px] text-white/80 leading-relaxed"> 
                  <span className="text-[#FF9F00] font-bold uppercase mr-2 text-xs tracking-widest italic">Tools :</span>
                  {item.tools}
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 right-8 w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-[#FF9F00] transition-all duration-500"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex justify-center w-full" data-aos="zoom-in">
        <button 
          onClick={handleNavigate}
          className="group relative flex items-center gap-4 px-12 py-5 bg-[#25252b] text-white rounded-2xl border border-white/10 hover:border-[#FF9F00] transition-all duration-500 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#FF9F00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <span className="relative z-10 text-sm font-black uppercase italic tracking-[0.3em] group-hover:text-[#FF9F00] transition-colors duration-300">
            View All Projects
          </span>
          
          <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#FF9F00] transition-all duration-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-[#FF9F00] group-hover:text-black transition-colors duration-300 transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </div>

    </section>
  )
}

export default Projects