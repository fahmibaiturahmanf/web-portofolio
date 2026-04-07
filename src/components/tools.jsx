import vscode from '../assets/vscode.jpeg'
import figma from '../assets/Figma.jpeg'
import postman from '../assets/Postman.jpeg'
import canva from '../assets/Canva.jpeg'
import html from '../assets/Html.jpeg'
import css from '../assets/CSS.jpeg'
import javascript from '../assets/Javascript.jpeg'
import reactjs from '../assets/React.jpeg'
import nodejs from '../assets/Node.jpeg'
import tailwindcss from '../assets/Tailwindcss.jpeg'
import mysql from '../assets/Mysql.jpeg'
import mongodb from '../assets/mongodb.jpeg'
import github from '../assets/Github.jpeg'
import wordpress from '../assets/wordpress.jpg'

const Tools = () => {
  const techStack = [
    { name: 'VS Code', img: vscode },
    { name: 'Figma', img: figma },
    { name: 'Postman', img: postman },
    { name: 'Canva', img: canva },
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: javascript },
    { name: 'React.js', img: reactjs },
    { name: 'Node.js', img: nodejs },
    { name: 'Tailwind', img: tailwindcss },
    { name: 'MySQL', img: mysql },
    { name: 'MongoDB', img: mongodb },
    { name: 'WordPress', img: wordpress },
    { name: 'GitHub', img: github },
  ]

  return (
    <section className="py-24 flex flex-col items-center relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF9F00] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-4xl mb-12 px-4">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px grow bg-linear-to-r from-transparent via-[#FF9F00]/50 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-[0.2em] italic">
            <span className="text-[#FF9F00]">Tools</span> Yang Dipakai
          </h2>
          <div className="h-px grow bg-linear-to-r from-transparent via-[#FF9F00]/50 to-transparent"></div>
        </div>
      </div>

      <div className="relative w-full max-w-5xl px-4 group">
        {/* Outer Glow on Hover */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-[#FF9F00] to-white rounded-4xl opacity-0 group-hover:opacity-20 blur-sm transition duration-700"></div>

        <div className="relative bg-[#25252b]/60 backdrop-blur-xl rounded-4xl p-12 md:p-20 border border-white/10 shadow-2xl overflow-hidden">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {techStack.map((tool, index) => (
              <div 
                key={index} 
                className="group/item flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="relative w-20 h-20 flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 group-hover/item:border-[#FF9F00]/30 group-hover/item:bg-white transition-all duration-500 shadow-lg group-hover/item:shadow-[#FF9F00]/20">
                  <img 
                    src={tool.img} 
                    alt={tool.name} 
                    className="max-w-full max-h-full object-contain grayscale group-hover/item:grayscale-0 transition-all duration-500 scale-90 group-hover/item:scale-100"
                  />
                </div>
            
                {/* Tool Name Label */}
                <span className="text-gray-500 text-[11px] font-mono font-bold uppercase tracking-widest group-hover/item:text-[#FF9F00] transition-colors duration-300 text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools