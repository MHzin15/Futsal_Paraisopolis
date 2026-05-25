import { motion } from 'motion/react';
import logoAmelia from '../../patrocinadores/AMELIA.png';
import logoAutoE from '../../patrocinadores/auto-escola-são-josé.png';
import logoBarbearia from '../../patrocinadores/barbearia.png';
import logoCenter from '../../patrocinadores/center-cell.png';
import logoCod from '../../patrocinadores/codigo-seguores.png';
import logoMattos from '../../patrocinadores/Mattos.png';
import logoMiofit from '../../patrocinadores/miofit.png';
import logoRomilson from '../../patrocinadores/romilson-santos.png';
import logoSantos from '../../patrocinadores/santos.png';
import logoTres from '../../patrocinadores/tres-jotas.png';
const sponsors = [
  { name: 'Cachaça Amélia', logoUrl: logoAmelia },
  { name: 'Auto Escola São José', logoUrl: logoAutoE},
  { name: 'Barbearia Liviz', logoUrl: logoBarbearia },
  { name: 'Center Cell', logoUrl: logoCenter },
  { name: 'Codigo Seguros', logoUrl: logoCod },
  { name: 'Mattos Calçados e Confecções', logoUrl: logoMattos },
  { name: 'Miofit', logoUrl: logoMiofit },
  { name: 'Romilson-Santos', logoUrl: logoRomilson },
  { name: 'Santos Tintas', logoUrl: logoSantos },
  { name: 'Três Jotas', logoUrl: logoTres },
  
];

export function SponsorsSection() {
  return (
    <section className="py-24 px-4 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[#D4A64A] mb-4"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(212, 166, 74, 0.5)',
            }}
          >
            PATROCINADORES
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#D4A64A] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative bg-[#0A0A0A] border-2 border-[#D4A64A]/30 aspect-square flex items-center justify-center hover:border-[#D4A64A] transition-all duration-300 overflow-hidden">
                <img 
                  src={sponsor.logoUrl} 
                  alt={`Logo da ${sponsor.name}`} 
                  className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm p-4">
                  <span className="text-[#D4A64A] text-center font-bold text-sm md:text-base uppercase tracking-wider drop-shadow-md">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}