import { FaGithub, FaFigma } from 'react-icons/fa'
import projectImg1 from '../assets/ProjekSistemPemesanan.png' 
import projectImg2 from '../assets/projekwordpress.png' 
import projectImg3 from '../assets/project3.png'

const ProjectPage = () => {
  return (
    <section className="min-h-screen pt-44 pb-20 flex flex-col items-center overflow-x-hidden relative bg-[#1E1E1E]">

      <div className="absolute top-40 -left-20 w-96 h-96 bg-[#FF9F00]/10 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/2 -right-20 w-96 h-96 bg-white/5 blur-[130px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl mb-24 text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-[0.3em] italic mb-6">
          MY <span className="text-[#FF9F00]">PROJECTS</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#FF9F00] mx-auto rounded-full shadow-[0_0_15px_#FF9F00]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mb-32 relative">
        <span className="absolute -top-20 -left-10 text-[15rem] font-black text-white/3 select-none pointer-events-none hidden lg:block">01</span>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative group lg:sticky lg:top-44" data-aos="fade-right">
            <div className="absolute -inset-4 bg-[#FF9F00]/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 bg-[#25252b] p-4 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="lg:hidden absolute -top-4 -left-4 w-12 h-12 bg-[#FF9F00] text-black flex items-center justify-center rounded-2xl font-black italic text-xl shadow-lg z-20">01</div>
              <img src={projectImg1} alt="Sistem Pemesanan" className="rounded-3xl w-full h-auto object-cover" />
            </div>

            <div className="flex justify-center gap-4 mt-10 relative z-30">
              <a href="https://github.com/fahmibaiturahmanf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-[#25252b] text-white rounded-xl border border-white/10 hover:border-[#FF9F00] hover:text-[#FF9F00] transition-all duration-300 font-bold italic tracking-widest text-[10px] uppercase shadow-lg group/btn">
                <FaGithub className="text-[#FF9F00] group-hover/btn:scale-120 transition-transform" /> Code Github
              </a>
              <a href="https://www.figma.com/design/f5KaWl8b1RIxbwdb4ZcVcn/Website-Pt.Eco-Metalindo-Indonesia-Jasa-Instalasi-dan-Piping-Non-Metal?node-id=0-1&t=zYBeggvFYIN4xLRV-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-[#25252b] text-white rounded-xl border border-white/10 hover:border-[#FF9F00] hover:text-[#FF9F00] transition-all duration-300 font-bold italic tracking-widest text-[10px] uppercase shadow-lg group/btn">
                <FaFigma className="text-[#FF9F00] group-hover/btn:scale-120 transition-transform" /> Figma Prototype
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start text-center lg:text-left">
                <span className="hidden lg:block h-px w-8 bg-[#FF9F00]"></span>
                <h3 className="text-[#FF9F00] text-sm font-black uppercase tracking-[0.4em]">Web Development</h3>
              </div>
              <h2 className="text-3xl font-black text-white uppercase italic leading-tight mb-6 text-center lg:text-left">
                Sistem Informasi Pemesanan Jasa <br /> Instalasi & Piping Non-Metal (Final Project at University)
              </h2>
              <p className="text-white/70 italic text-justify leading-relaxed text-sm bg-white/5 p-6 rounded-3xl border border-white/5">
                Sistem berbasis web dikembangkan menggunakan <span className="text-[#FF9F00]">MERN Stack</span> (React, Node, Express, MongoDB). Dirancang untuk mendigitalisasi proses pemesanan di <span className="text-white font-bold italic underline decoration-[#FF9F00]">PT. Eco Metalindo Indonesia</span> agar lebih efisien, cepat, dan transparan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <h4 className="text-white font-black italic uppercase tracking-widest text-sm border-l-4 border-[#FF9F00] pl-4 mb-2">Fitur Utama Sistem</h4>
              {[
                { title: "Pemesanan Jasa", desc: "User dapat memesan secara online sesuai layanan, otomatis tercatat di database dan dapat dipantau statusnya." },
                { title: "Pembayaran Terintegrasi", desc: "Mendukung upload bukti pembayaran yang terhubung langsung dengan data pemesanan untuk verifikasi admin." },
                { title: "Validasi Admin", desc: "Akses khusus admin untuk memvalidasi transaksi guna memastikan keaslian data sebelum proses berlanjut." },
                { title: "Invoice Otomatis", desc: "Generate Invoice PDF via PDFKit dan kirim otomatis ke email profil pengguna melalui Nodemailer." },
                { title: "Rekap Bulanan", desc: "Admin dapat mengunduh laporan bulanan untuk keperluan analisis dan evaluasi kinerja perusahaan." },
                { title: "Dashboard Admin Panel", desc: "Panel kendali pusat dengan autentikasi JWT untuk mengelola seluruh aktivitas sistem secara aman." }
              ].map((f, i) => (
                <div key={i} className="p-5 bg-[#25252b]/60 rounded-2xl border border-white/5 hover:bg-[#25252b] transition-colors group">
                  <h5 className="text-[#FF9F00] font-bold italic uppercase text-xs mb-1 group-hover:translate-x-1 transition-transform">{f.title}</h5>
                  <p className="text-white/50 text-[11px] leading-relaxed italic">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {['React.js', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'PDFKit', 'Postman'].map(tech => (
                <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-[9px] font-bold uppercase tracking-widest italic">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl px-6 mb-32 flex items-center gap-8 opacity-20">
        <div className="h-px grow bg-linear-to-r from-transparent to-white"></div>
        <div className="w-3 h-3 rotate-45 border border-white"></div>
        <div className="h-px grow bg-linear-to-l from-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mb-44 relative">
        <span className="absolute -top-20 -right-10 text-[15rem] font-black text-white/3 select-none pointer-events-none hidden lg:block">02</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
              <span className="hidden lg:block h-px w-8 bg-[#FF9F00]"></span>
              <h3 className="text-[#FF9F00] text-sm font-black uppercase tracking-[0.4em]">Wordpress Development</h3>
            </div>
            <h2 className="text-3xl font-black text-white uppercase italic leading-tight mb-8 text-center lg:text-left">
              WordPress Company Profile <br /> PT. Eco Metalindo Indonesia (Internship Project)
            </h2>
            <div className="bg-[#25252b]/40 backdrop-blur-xl p-8 rounded-4xl border border-white/5 mb-8">
              <p className="text-white/80 leading-relaxed italic text-justify text-sm">
                Project ini merupakan website company profile yang dikembangkan untuk menampilkan identitas perusahaan. Terdiri dari halaman Beranda, Jasa, dan Kontak yang dirancang profesional guna memperkuat brand identity secara online serta memberikan informasi katalog produk piping FRP secara mendetail.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['WordPress.org', 'XAMPP', 'Elementor', 'Responsive Design'].map(tech => (
                <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-[9px] font-bold uppercase tracking-widest italic">{tech}</span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group" data-aos="fade-left">
            <div className="lg:hidden absolute -top-4 -right-4 w-12 h-12 bg-white text-black flex items-center justify-center rounded-2xl font-black italic text-xl shadow-lg z-20">02</div>
            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10 bg-[#25252b] p-4 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img src={projectImg2} alt="WordPress Site" className="rounded-3xl w-full h-auto object-cover" />
            </div>
            <div className="flex justify-center mt-10 relative z-30">
              <div className="flex items-center gap-3 px-8 py-3 bg-[#25252b] text-white/50 rounded-xl border border-white/5 font-bold italic tracking-widest text-[10px] uppercase cursor-default">
                Development Localhost
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl px-6 mb-32 flex items-center gap-8 opacity-20">
        <div className="h-px grow bg-linear-to-r from-transparent to-white"></div>
        <div className="w-3 h-3 rotate-45 border border-white"></div>
        <div className="h-px grow bg-linear-to-l from-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mb-32 relative">
        <span className="absolute -top-20 -left-10 text-[15rem] font-black text-white/3 select-none pointer-events-none hidden lg:block">03</span>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative group lg:sticky lg:top-44" data-aos="fade-right">
            <div className="absolute -inset-4 bg-[#FF9F00]/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 bg-[#25252b] p-4 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="lg:hidden absolute -top-4 -left-4 w-12 h-12 bg-[#FF9F00] text-black flex items-center justify-center rounded-2xl font-black italic text-xl shadow-lg z-20">03</div>
              <img src={projectImg3} alt="WordPress Retail Catalog" className="rounded-3xl w-full h-auto object-cover" />
            </div>

           <div className="flex justify-center mt-10 relative z-30">
              <a 
                href="https://reflexplus.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-8 py-3 bg-[#25252b]
                 text-white rounded-xl border border-white/10 hover:border-[#FF9F00]
                  hover:text-[#FF9F00] transition-all duration-300 font-bold italic tracking-widest text-[10px] uppercase shadow-lg group/btn">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover/btn:bg-[#FF9F00]"></span> 
                Visit Live Website
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start text-center lg:text-left">
                <span className="hidden lg:block h-px w-8 bg-[#FF9F00]"></span>
                <h3 className="text-[#FF9F00] text-sm font-black uppercase tracking-[0.4em]">Wordpress Development</h3>
              </div>
              <h2 className="text-3xl font-black text-white uppercase italic leading-tight mb-6 text-center lg:text-left">
                WordPress Retail Catalog <br /> Reflex Plus (Professional Project)
              </h2>
              <p className="text-white/70 italic text-justify leading-relaxed text-sm bg-white/5 p-6 rounded-3xl border border-white/5">
                Project ini merupakan website <span className="text-[#FF9F00]">Retail Catalog</span> yang dikembangkan khusus untuk menampilkan produk perusahaan secara komprehensif. Mengintegrasikan kemudahan manajemen konten dengan tampilan yang profesional dan responsif.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <h4 className="text-white font-black italic uppercase tracking-widest text-sm border-l-4 border-[#FF9F00] pl-4 mb-2">Key Implementations</h4>
              {[
                { title: "Katalog Produk Luas", desc: "Manajemen lebih dari 200+ item produk Reflex Plus dengan kategorisasi yang rapi." },
                { title: "WooCommerce Catalog Mode", desc: "Implementasi sistem belanja tanpa checkout langsung, difokuskan untuk display harga dan spesifikasi." },
                { title: "Dynamic Layout", desc: "Menggunakan Elementor Pro untuk desain layout yang fleksibel dan mudah dikelola oleh klien." },
                { title: "Optimasi Gambar", desc: "Proses bulk-editing dan kompresi aset gambar produk untuk memastikan loading speed yang optimal." }
              ].map((f, i) => (
                <div key={i} className="p-5 bg-[#25252b]/60 rounded-2xl border border-white/5 hover:bg-[#25252b] transition-colors group">
                  <h5 className="text-[#FF9F00] font-bold italic uppercase text-xs mb-1 group-hover:translate-x-1 transition-transform">{f.title}</h5>
                  <p className="text-white/50 text-[11px] leading-relaxed italic">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {['WordPress', 'Elementor', 'WooCommerce', 'Bulk Edit', 'Image Optimization'].map(tech => (
                <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-[9px] font-bold uppercase tracking-widest italic">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage