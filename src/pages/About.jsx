import myPhoto from '../assets/PasFotoNoBackground.png'
import { FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const About = () => {
  return (
    <section className="min-h-screen pt-44 pb-20 flex flex-col items-center overflow-x-hidden relative bg-[#1E1E1E]">
      
      <div className="absolute top-40 -left-20 w-96 h-96 bg-[#FF9F00]/10 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-white/5 blur-[130px] rounded-full -z-10"></div>

      <div data-aos="fade-down" className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-[0.4em] italic mb-4">
          PRO<span className="text-[#FF9F00]">FILE</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#FF9F00] mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mb-32">

        <div className="relative group" data-aos="zoom-in" data-aos-duration="1000">
          <div className="w-72 h-80 md:w-85 md:h-105 bg-linear-to-b from-[#FF9F00] to-[#b37000] rounded-4xl overflow-hidden relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src={myPhoto} 
              alt="Muhammad Fahmi" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -inset-6 border border-white/10 rounded-5xl z-0 group-hover:border-[#FF9F00]/40 transition-all duration-700 scale-95 group-hover:scale-100 opacity-50 group-hover:opacity-100"></div>
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-1/2" data-aos="fade-left">
          <div className="space-y-6 bg-[#25252b]/40 backdrop-blur-xl p-10 rounded-4xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9F00]/5 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col">
                <span className="text-[#FF9F00] text-sm font-black uppercase tracking-[0.3em] mb-1 italic">Full Name</span>
                <p className="text-2xl md:text-3xl font-black text-white uppercase italic leading-tight">
                  Muhammad Fahmi Baithurrohman
                </p>
              </div>

              {/* Grid Info: Phone, Email, Domicile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-3 rounded-xl text-[#FF9F00]"><FaPhoneAlt /></div>
                  <div>
                    <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest italic">Phone</span>
                    <p className="text-white font-bold italic text-sm">0878-8407-3268</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-3 rounded-xl text-[#FF9F00]"><FaEnvelope /></div>
                  <div>
                    <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest italic">Email</span>
                    <p className="text-white font-bold italic text-[11px] sm:text-sm">fahmibaiturahmanf@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-3 rounded-xl text-[#FF9F00]"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest italic">Domicile</span>
                    <p className="text-white font-bold text-sm italic">Bogor City, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="bg-white/5 p-3 rounded-xl text-[#FF9F00] mt-1"><FaGraduationCap /></div>
                <div>
                  <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest italic">Education</span>
                  <p className="text-white font-bold leading-relaxed italic">
                    S1 Information Systems at <span className="text-[#FF9F00]">IBI Kesatuan</span> <br />
                    <span className="text-sm italic text-gray-400 font-medium">( GPA : 3.57 / 4.00 )</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a 
              href="/CV_Muhammad%20Fahmi.pdf" 
              download="CV_Muhammad_Fahmi.pdf"
              className="px-10 py-4 bg-[#FF9F00] text-black rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-lg shadow-[#FF9F00]/20 transform hover:-translate-y-2 flex items-center gap-3"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mb-40" data-aos="fade-up">
        <div className="bg-linear-to-br from-[#25252b] to-[#1e1e1e] rounded-4xl p-10 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FF9F00]/5 blur-3xl rounded-full transition-all group-hover:bg-[#FF9F00]/10"></div>
          
          <p className="relative z-10 text-white text-lg md:text-xl leading-[1.8] text-justify font-medium opacity-90 italic">
            "Lulusan <span className="text-[#FF9F00]">Sistem Informasi</span> dari IBI Kesatuan Bogor yang memiliki gairah besar dalam dunia 
            <span className="text-[#FF9F00]"> Web Development</span>. Saya berfokus pada pembuatan aplikasi web yang fungsional, 
            estetik, dan bermanfaat bagi pengguna menggunakan ekosistem JavaScript. Dengan kedisiplinan dan kemampuan adaptasi 
            teknologi AI, saya siap berkontribusi secara nyata dalam inovasi digital masa depan."
          </p>
        </div>
      </div>

      <div data-aos="fade-down" className="text-center mb-20">
        <h2 className="text-3xl font-black text-white uppercase tracking-[0.4em] italic mb-4">
          TECHNICAL <span className="text-[#FF9F00]">SKILLS</span>
        </h2>
        <div className="h-1 w-16 bg-[#FF9F00] mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl space-y-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right" className="bg-[#25252b] rounded-4xl p-10 border border-white/5 hover:border-[#FF9F00]/30 transition-all duration-500 shadow-2xl group">
            <h3 className="text-[#FF9F00] text-2xl font-black mb-8 uppercase italic tracking-widest border-b border-white/5 pb-4">Web Developer</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-300 font-bold uppercase text-[10px] tracking-tighter italic">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'RESTful API', 'MongoDB', 'MySQL', 'Git / GitHub', 'Vite', 'Postman'].map((skill) => (
                <li key={skill} className="flex items-center gap-2 group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-[#FF9F00] rounded-full"></span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-left" className="bg-[#25252b] rounded-4xl p-10 border border-white/5 hover:border-[#FF9F00]/30 transition-all duration-500 shadow-2xl group">
            <h3 className="text-[#FF9F00] text-2xl font-black mb-8 uppercase italic tracking-widest border-b border-white/5 pb-4">UI/UX Design</h3>
            <ul className="grid grid-cols-1 gap-4 text-gray-300 font-bold uppercase text-[10px] tracking-widest italic">
              {['Wireframing', 'UI Design', 'Prototyping', 'Design System', 'Responsive Design', 'Usability Testing', 'Figma', 'Canva'].map((skill) => (
                <li key={skill} className="flex items-center gap-2 group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-[#FF9F00] rounded-full"></span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="flex justify-center">
          <div className="bg-[#25252b] rounded-4xl p-10 border border-white/5 hover:border-[#FF9F00]/30 transition-all duration-500 shadow-2xl w-full md:w-2/3 group text-center">
            <h3 className="text-[#FF9F00] text-2xl font-black mb-8 uppercase italic tracking-widest">Soft Skill</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solving', 'Attention to Detail', 'Team Collaboration', 'Time Management', 'Communication Skill', 'Adaptability'].map((skill) => (
                <span key={skill} className="px-5 py-2 bg-white/5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/5 group-hover:border-[#FF9F00]/30 transition-all italic">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About