import { FaWhatsapp, FaRegEnvelope, FaPaperPlane } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <section className="min-h-screen pt-44 pb-20 flex flex-col items-center overflow-x-hidden relative bg-[#1E1E1E]">

      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FF9F00]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-white/5 blur-[120px] rounded-full -z-10"></div>

      <div data-aos="fade-down" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-[0.4em] italic mb-4">
          PERSONAL <span className="text-[#FF9F00]">CONTACT</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#FF9F00] mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div className="space-y-8" data-aos="fade-right">
          <div className="space-y-6">
            <a 
              href="https://wa.me/6287884073268" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-6 bg-[#25252b] p-6 rounded-3xl border border-white/5 hover:border-[#FF9F00]/50 transition-all duration-500 shadow-xl"
            >
              <div className="bg-white p-4 rounded-2xl group-hover:bg-[#FF9F00] transition-colors duration-500">
                <FaWhatsapp className="text-black text-4xl group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest italic">WhatsApp</p>
                <p className="text-white text-2xl font-black tracking-tight italic">0878-8407-3268</p>
              </div>
            </a>

            <div className="group flex items-center gap-6 bg-[#25252b] p-6 rounded-3xl border border-white/5 hover:border-[#FF9F00]/50 transition-all duration-500 shadow-xl">
              <div className="bg-white p-4 rounded-2xl group-hover:bg-[#FF9F00] transition-colors duration-500">
                <FaRegEnvelope className="text-black text-4xl group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest italic">Email Me</p>
                <p className="text-white text-lg md:text-xl font-black break-all uppercase tracking-tighter italic">
                  fahmibaiturahmanf@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 border-l-4 border-[#FF9F00] bg-[#25252b]/50 rounded-r-3xl shadow-lg">
            <p className="text-gray-300 italic leading-relaxed text-lg">
              "saya sangat terbuka untuk melakukan diskusi terkait dengan diri saya, lamaran, ataupun tawaran yang diberikan."
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="w-full">
          <div className="bg-[#25252b] rounded-[3rem] p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* INTEGRASI FORMSPREE */}
            <form 
              action="https://formspree.io/f/mojlnkoj" 
              method="POST"
              className="space-y-8 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-white text-sm font-black uppercase tracking-widest ml-1 italic">Nama</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Nama Lengkap"
                    className="w-full bg-[#1E1E1E] text-white border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#FF9F00] transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-white text-sm font-black uppercase tracking-widest ml-1 italic">Email</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="email@anda.com"
                    className="w-full bg-[#1E1E1E] text-white border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#FF9F00] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-white text-sm font-black uppercase tracking-widest ml-1 italic">Pesan</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder="Tulis pesan anda di sini..."
                  className="w-full bg-[#1E1E1E] text-white border border-white/10 rounded-4xl px-6 py-5 outline-none focus:border-[#FF9F00] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#FF9F00] text-black rounded-2xl font-black text-xl uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white hover:shadow-[0_0_30px_rgba(255,159,0,0.4)] transition-all duration-500 group"
              >
                Send Message
                <FaPaperPlane className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage