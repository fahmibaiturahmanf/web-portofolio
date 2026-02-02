const MiniKontak = () => {
  return (
    <section id="contact" className="py-24 flex justify-center px-6 scroll-mt-32">
      <div className="bg-[#25252b] rounded-4xl p-10 md:p-16 w-full max-w-2xl border border-white/5 shadow-2xl relative group">
        
        <div className="absolute -inset-1 bg-linear-to-r from-[#FF9F00] to-transparent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 pointer-events-none"></div>

        <h2 className="text-3xl font-black text-[#FF9F00] text-center uppercase tracking-[0.2em] mb-12 italic">
          CONTACT
        </h2>

        <form 
          action="https://formspree.io/f/mojlnkoj" 
          method="POST"
          className="space-y-8 relative z-10"
        >
          <div className="space-y-2">
            <label className="text-white font-bold text-lg tracking-wide ml-1">Nama :</label>
            <input 
              name="name" 
              required
              type="text" 
              placeholder="Masukkan nama Anda..."
              className="w-full bg-[#d1d1d1] text-black rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#FF9F00] transition-all font-medium placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-bold text-lg tracking-wide ml-1">Email :</label>
            <input 
              name="email"
              required
              type="email" 
              placeholder="Masukkan email Anda..."
              className="w-full bg-[#d1d1d1] text-black rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#FF9F00] transition-all font-medium placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-bold text-lg tracking-wide ml-1">Message :</label>
            <textarea 
              name="message"
              required
              rows="4"
              placeholder="Tuliskan pesan Anda di sini..."
              className="w-full bg-[#d1d1d1] text-black rounded-3xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#FF9F00] transition-all font-medium resize-none placeholder:text-gray-500"
            ></textarea>
          </div>

          <div className="flex justify-center pt-6">
            <button 
              type="submit"
              className="px-16 py-3 bg-[#d1d1d1] text-black rounded-full font-black text-xl uppercase tracking-widest hover:bg-[#FF9F00] hover:text-white hover:shadow-[0_0_20px_rgba(255,159,0,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default MiniKontak