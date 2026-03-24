"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-pitch overflow-hidden selection:bg-acid selection:text-pitch">
      {/* Background Image layer */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <Image
          src="/hero-bg.png"
          alt="Brutalist Gym"
          fill
          priority
          className="object-cover opacity-30 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pitch/60 via-transparent to-pitch/95" />
      </div>

      {/* Navbar overlay */}
      <nav className="absolute top-0 w-full z-50 p-6 md:p-12 flex justify-between items-center mix-blend-difference text-white uppercase text-xs md:text-sm font-bold tracking-[0.2em]">
        <span>VOLT ATHLETIC</span>
        <div className="hidden md:flex gap-12">
          <a href="#classes" className="hover:text-acid transition-colors">The Crucible</a>
          <a href="#cult" className="hover:text-acid transition-colors">The Cult</a>
          <a href="#commit" className="border-b border-acid text-acid pb-1 hover:bg-acid hover:text-pitch transition-all">Commit</a>
        </div>
      </nav>

      {/* Massive Typographic Hero */}
      <section className="relative z-10 h-screen flex flex-col justify-center items-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center pointer-events-none mt-12"
        >
          <h1 className="text-[20vw] leading-[0.75] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 tracking-tighter uppercase text-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
            RAW<br />IRON
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "anticipate" }}
            className="w-full h-[3px] bg-acid mt-12 origin-left"
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 right-6 md:right-12 text-acid uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold max-w-[200px] text-right"
        >
          Sacrifice the weak. Build the elite. No pleasantries.
        </motion.p>
      </section>

      {/* Experimental Asymmetric Classes Section */}
      <section id="classes" className="relative z-10 w-full min-h-screen bg-pitch border-t border-carbon pt-32 pb-32 px-6 md:px-12 flex flex-col lg:flex-row gap-16 md:gap-24">
        <div className="w-full lg:w-1/3 pt-12 sticky top-32 h-fit">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-acid text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter break-words"
          >
            THE<br/>CRUCIBLE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-neutral-400 text-xs md:text-sm uppercase tracking-[0.2em] leading-loose border-l border-carbon pl-6"
          >
            Our training methodologies are designed to break you down and forge you anew. Expect no sympathy. There is only the iron and the inevitable pain of growth.
          </motion.p>
        </div>
        
        <div className="w-full lg:w-2/3 flex flex-col border border-carbon">
          {[
            { id: "01", name: "Hypertrophy Grinder", desc: "Volume. Pain. Unrelenting physical stress yielding maximum muscular growth.", duration: "90 MIN" },
            { id: "02", name: "Lactic Acid Bath", desc: "High intensity conditioning. If you aren't gasping for air, you aren't trying.", duration: "45 MIN" },
            { id: "03", name: "Absolute Strength", desc: "1RM focused powerlifting mechanics. Move heavy earth. Period.", duration: "120 MIN" },
            { id: "04", name: "The Void", desc: "Sensory deprivation calisthenics and endurance. Outlast your own mind.", duration: "60 MIN" }
          ].map((c, i) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-12 border-b border-carbon hover:bg-carbon transition-colors duration-500 cursor-crosshair last:border-b-0"
            >
              <div className="flex gap-8 items-start">
                <span className="text-acid font-mono text-sm md:text-xl font-bold tracking-tighter">{c.id}</span>
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-acid transition-colors duration-300">{c.name}</h3>
                  <p className="text-neutral-500 uppercase text-[10px] md:text-xs mt-4 tracking-[0.2em] leading-relaxed">{c.desc}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 px-6 py-3 border border-neutral-800 text-xs tracking-widest uppercase font-bold group-hover:border-acid group-hover:bg-acid group-hover:text-pitch transition-all duration-300">
                {c.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instructors / Vibe Section */}
      <section id="cult" className="relative z-10 w-full bg-pitch py-32 px-6 md:px-12 border-t border-carbon">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter mb-24 text-center"
          >
            Led by <span className="text-acid">Monsters</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "jax", name: "Jax", role: "Strength Director", quote: "I don't care about your feelings. I care about your deadlift." },
              { id: "viper", name: "Viper", role: "Conditioning Specialist", quote: "Puking is just weakness leaving the body." },
              { id: "rex", name: "Rex", role: "Hypertrophy Coach", quote: "More weight. Less complaining." }
            ].map((trainer, i) => (
              <motion.div 
                key={trainer.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-carbon flex flex-col relative group overflow-hidden min-h-[450px]"
              >
                <div className="absolute inset-0 z-0">
                  <Image src={`/${trainer.id}.png`} alt={trainer.name} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/40 to-transparent" />
                </div>
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-pitch -mr-8 -mt-8 rotate-45 transform group-hover:bg-acid transition-colors duration-500 z-10" />
                
                <div className="relative z-10 mt-auto p-8 flex flex-col gap-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white">{trainer.name}</h3>
                  <p className="text-acid text-xs uppercase tracking-widest font-bold">{trainer.role}</p>
                  <p className="text-neutral-300 text-sm italic font-serif">&quot;{trainer.quote}&quot;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="commit" className="relative z-10 w-full bg-carbon pt-32 pb-12 px-6 md:px-12 flex flex-col items-center border-t-4 border-acid">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[8vw] font-black uppercase tracking-tighter text-white text-center leading-none"
        >
          Sign Your<br/>Soul Away
        </motion.h2>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 bg-acid text-pitch px-12 py-6 text-xl md:text-3xl font-black uppercase tracking-tighter hover:bg-white transition-colors"
        >
          Commit Now
        </motion.button>

        <div className="w-full mt-32 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-acid font-black text-2xl tracking-tighter uppercase">VOLT</span>
          <p className="text-neutral-600 text-xs uppercase tracking-widest">© 2026 Volt Athletic. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
