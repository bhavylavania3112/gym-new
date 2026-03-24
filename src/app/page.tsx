"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Star, CheckCircle, Activity, Users, Clock, Target, MessageCircle, ArrowRight } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="relative min-h-screen bg-pitch font-sans overflow-hidden pb-32">
      {/* Sticky Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-pitch/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5' : 'bg-transparent py-2'}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity className="text-purple w-6 h-6" />
            <span className="text-white font-black text-xl tracking-tight uppercase">Volt<span className="text-purple">Fit</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-neutral-300 uppercase tracking-wide">
            <a href="#programs" className="hover:text-cyan transition-colors">Programs</a>
            <a href="#pricing" className="hover:text-cyan transition-colors">Pricing</a>
            <a href="#trainers" className="hover:text-cyan transition-colors">Coaches</a>
          </div>
          <button className="bg-purple hover:bg-purple/90 text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
            Start Free Trial
          </button>
        </div>
      </motion.nav>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full z-0">
          <Image src="/hero_premium.png" alt="Fitness Training" fill priority className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-pitch/40 via-pitch/60 to-pitch" />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch via-pitch/80 to-transparent w-full md:w-2/3" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-glass px-4 py-2 rounded-full border border-purple/30 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" /> Limited Time Offer
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tighter">
              Transform Your Body <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan">In 90 Days.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-neutral-300 max-w-xl font-medium leading-relaxed">
              Unlimited gym access + elite trainer-led classes starting at just <span className="text-white font-bold tracking-wider">₹999/month</span>. Real results, zero excuses.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple to-cyan text-white px-8 py-4 rounded font-black uppercase tracking-wide hover:scale-[1.03] transition-all shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 group">
                Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white/10 transition-colors">
                View Plans
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-pitch bg-surface flex items-center justify-center overflow-hidden">
                    <Users className="w-5 h-5 text-neutral-400" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-cyan"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                <span className="text-sm font-bold text-white mt-1">10,000+ Active Members</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">The <span className="text-purple">Arsenal</span></motion.h2>
          <motion.p variants={fadeUp} className="text-neutral-400 mt-4 max-w-2xl mx-auto">Elite methodologies designed for absolute transformation.</motion.p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Group Classes", desc: "High energy, community driven workouts." },
            { icon: Target, title: "Expert Trainers", desc: "World-class coaching and form correction." },
            { icon: Clock, title: "Flexible Timings", desc: "24/7 access to fit your brutal schedule." },
            { icon: Activity, title: "Custom Plans", desc: "Tailored nutrition and lifting protocols." }
          ].map((feature, i) => (
            <motion.div key={i} variants={fadeUp} className="glass p-8 rounded border border-white/5 hover:border-purple/50 transition-colors group">
              <feature.icon className="w-10 h-10 text-cyan mb-6 group-hover:scale-110 group-hover:text-purple transition-all" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TRANSFORMATION SECTION */}
      <section className="relative z-10 w-full bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-[500px] w-full rounded overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <Image src="/transform_after.png" alt="Transformation" fill className="object-cover" />
            <div className="absolute bottom-6 right-6 glass px-6 py-3 rounded border border-white/10 flex flex-col items-center">
              <span className="text-cyan font-black text-2xl">-24kg</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest mt-1">Fat Loss</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col">
            <div className="text-purple font-bold tracking-widest uppercase text-sm mb-4">Real People. Real Results.</div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-[1.1] mb-6">&quot;I never thought I could look like this.&quot;</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              &quot;Before joining VoltFit, I struggled with consistency. The expert coaches and high-energy culture pushed me past my limits. 90 days later, I&apos;m literally a different person. If you&apos;re on the fence, just jump.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800" />
              <div>
                <div className="text-white font-bold">Rahul Sharma</div>
                <div className="text-neutral-500 text-sm">Joined 4 months ago</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-20">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">Invest In <span className="text-cyan">Yourself</span></motion.h2>
          <motion.p variants={fadeUp} className="text-neutral-400 mt-4 max-w-2xl mx-auto">Transparent pricing. No hidden fees. Cancel anytime.</motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* HOME */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-8 border border-white/5 rounded flex flex-col hover:border-white/20 transition-all group">
            <h3 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-purple transition-colors">Home</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-4xl font-black text-white">₹499</span><span className="text-neutral-500 mb-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Home Workouts App', 'Nutrition Guides', 'Community Access'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-300"><CheckCircle className="w-4 h-4 text-purple" /> {f}</li>
              ))}
            </ul>
            <button className="w-full glass text-white py-3 rounded font-bold uppercase tracking-wide hover:bg-white/10 transition-colors">Join Now</button>
          </motion.div>
          
          {/* PRO (Most Popular) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-surface p-10 border-2 border-purple rounded relative shadow-[0_0_40px_rgba(124,58,237,0.15)] md:-mt-8 md:mb-8 z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple to-cyan text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">Most Popular</div>
            <h3 className="text-2xl font-black text-white uppercase mb-2">Pro</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-black text-white">₹999</span><span className="text-neutral-400 mb-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Unlimited Gym Access', 'All PRO Group Classes', '1 PT Session / Month', 'App & Nutrition'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white"><CheckCircle className="w-5 h-5 text-cyan" /> <span className="font-medium">{f}</span></li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-purple to-cyan text-white py-4 rounded font-black uppercase tracking-wide hover:scale-[1.03] transition-transform shadow-[0_0_20px_rgba(124,58,237,0.4)]">Join PRO Now</button>
            <p className="text-center text-xs text-purple mt-4 font-semibold uppercase">⚡ Only 12 Spots Left</p>
          </motion.div>

          {/* ELITE */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass p-8 border border-white/5 rounded flex flex-col hover:border-white/20 transition-all group">
            <h3 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-purple transition-colors">Elite</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-4xl font-black text-white">₹1499</span><span className="text-neutral-500 mb-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Everything in PRO', 'Unlimited PT Sessions', 'Recovery Lounge Access', 'Premium Merch Pack'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-300"><CheckCircle className="w-4 h-4 text-purple" /> {f}</li>
              ))}
            </ul>
            <button className="w-full glass text-white py-3 rounded font-bold uppercase tracking-wide hover:bg-white/10 transition-colors">Join Elite</button>
          </motion.div>
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section id="trainers" className="relative z-10 w-full bg-surface/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">Meet The <span className="text-cyan">Elite</span></motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "jax", name: "Jax", role: "Strength Director", exp: "12 Yrs Exp" },
              { id: "viper", name: "Viper", role: "Conditioning", exp: "8 Yrs Exp" },
              { id: "rex", name: "Rex", role: "Hypertrophy", exp: "10 Yrs Exp" }
            ].map((trainer, i) => (
              <motion.div key={trainer.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative h-[450px] rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/5 hover:border-cyan/50 transition-colors duration-500">
                <Image src={`/${trainer.id}.png`} alt={trainer.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 w-full p-8 flex flex-col translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-black uppercase text-white drop-shadow-lg">{trainer.name}</h3>
                  <p className="text-cyan font-bold uppercase tracking-widest text-sm mb-4">{trainer.role}</p>
                  <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{trainer.exp} · World-Class Certifications · Dedicated to your growth.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE / FINAL CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <div className="relative rounded overflow-hidden p-[2px] shadow-[0_0_50px_rgba(124,58,237,0.3)] bg-gradient-to-br from-purple to-cyan">
          <div className="bg-pitch rounded p-12 md:p-20 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4">Start Your Fitness Journey Today</h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl">Don&apos;t wait for tomorrow. Your future self is begging you to start now. Claim your 7-day all-access free pass.</p>
            
            <form className="w-full max-w-md flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="w-full bg-surface border border-white/10 text-white px-6 py-4 rounded focus:outline-none focus:border-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-surface border border-white/10 text-white px-6 py-4 rounded focus:outline-none focus:border-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all" />
              <button type="button" className="w-full mt-2 bg-gradient-to-r from-purple to-cyan text-white py-4 rounded font-black uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                Book Free Trial Now
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-6 font-medium uppercase tracking-widest">⚡ Instant Access · No Credit Card Required</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-white/10 pt-16 pb-8 px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Activity className="text-purple w-8 h-8" />
            <span className="text-white font-black text-2xl tracking-tight uppercase">Volt<span className="text-purple">Fit</span></span>
          </div>
          <div className="flex gap-6 text-sm text-neutral-400 uppercase font-bold">
            <a href="#" className="hover:text-cyan transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan transition-colors">YouTube</a>
            <a href="#" className="hover:text-cyan transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-neutral-600 uppercase tracking-widest">
          © 2026 VoltFit. All rights reserved. Built for the elite.
        </div>
      </footer>
    </main>
  );
}
