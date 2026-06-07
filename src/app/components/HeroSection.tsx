import { useMemo } from 'react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/logo-transparente.png';
import lionHeroImage from 'figma:asset/23d58ee174c7714811d80337535f4d9dc21afe86.png';

export function HeroSection() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={lionHeroImage} 
          alt="Leão Futsal Paraisópolis" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-[#D4A64A] rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={logoImage} 
            alt="Logo Futsal Paraisópolis" 
            className="w-64 h-64 mx-auto drop-shadow-[0_0_30px_rgba(212,166,74,0.6)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
          style={{ 
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            letterSpacing: '0.05em',
            color: '#D4A64A',
            textShadow: '0 0 40px rgba(212, 166, 74, 0.8), 0 0 80px rgba(212, 166, 74, 0.4)',
          }}
        >
          FUTSAL PARAISÓPOLIS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-12"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 300,
            letterSpacing: '0.1em',
          }}
        >
          Mais que um time. Uma identidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => document.getElementById('elenco')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#D4A64A] text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,166,74,0.8)] hover:scale-105"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            VER ELENCO
          </button>
          <button 
            onClick={() => document.getElementById('jogos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-[#D4A64A] text-[#D4A64A] transition-all duration-300 hover:bg-[#D4A64A] hover:text-[#0A0A0A] hover:shadow-[0_0_30px_rgba(212,166,74,0.8)] hover:scale-105"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            PRÓXIMOS JOGOS
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#D4A64A] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4A64A] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
