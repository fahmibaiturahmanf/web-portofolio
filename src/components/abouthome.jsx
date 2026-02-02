const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 flex justify-center scroll-mt-24">
      <div className="relative max-w-4xl w-full group">

        <div className="absolute -top-5 -left-5 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-[#FF9F00] opacity-10 blur-[50px] md:blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-blue-500 opacity-5 blur-[50px] md:blur-[80px] rounded-full pointer-events-none"></div>

        <div className="bg-[#1a1a1e] rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-16 shadow-2xl border border-white/10 relative overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:border-[#FF9F00]/20">

          <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#FF9F00]/40 to-transparent"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8">
              <div className="h-px w-6 md:w-8 bg-[#FF9F00]"></div>
              <span className="text-[#FF9F00] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                About Me
              </span>
            </div>

            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed text-center md:text-left font-medium">
              Lulusan Sistem Informasi <span className="text-gray-400">IBI Kesatuan Bogor</span> yang berfokus pada 
              <span className="text-[#FF9F00] font-bold"> Web Development</span>. Saya berkomitmen menciptakan aplikasi web 
              yang fungsional dan efisien menggunakan JavaScript. Sebagai 
              pribadi yang disiplin, saya senang berkolaborasi dalam tim dan 
              memanfaatkan teknologi AI untuk optimasi solusi digital. Siap 
              berkontribusi dan berkembang lebih jauh di industri teknologi.
            </p>
          </div>

          <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-linear-to-br from-[#FF9F00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
               style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;