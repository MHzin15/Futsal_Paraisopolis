import { motion } from 'motion/react';
import andreImage from '@/assets/andre.png';
import rafaelImage from '@/assets/rafael.png';
import bolachaImage from '@/assets/bolacha.png';
import ezequielImage from '@/assets/ezequiel_augusto.png';
import alyssonImage from '@/assets/alysson.jpeg';
import sanseiImage from '@/assets/sansei.png';
import carlinhosImage from '@/assets/carlinhos.png';
import ericImage from '@/assets/eric.png';
import felipeImage from '@/assets/felipe.png';
import fernandoImage from '@/assets/fernando_ferraz.png';

type Player = {
  name: string;
  position: string;
  number?: number;
  games: number;
  goals: number;
  assists: number;
  image: string;
};

export function RosterSection() {
  const players: Player[] = [
    {
      name: 'André',
      position: 'Ala',
      number: 6,
      games: 5,
      goals: 5,
      assists: 2,
      image: andreImage,
    },
    {
      name: 'Rafael',
      position: 'Ala',
      number: 9,
      games: 4,
      goals: 5,
      assists: 4,
      image: rafaelImage,
    },
    {
      name: 'Bolacha',
      position: 'Fixo',
      number: 5,
      games: 5,
      goals: 4,
      assists: 2,
      image: bolachaImage,
    },
    {
      name: 'Ezequiel Augusto',
      position: 'Ala',
      number: 10,
      games: 4,
      goals: 4,
      assists: 0,
      image: ezequielImage,
    },
    {
      name: 'Alysson',
      position: 'Ala',
      number: 20,
      games: 4,
      goals: 3,
      assists: 2,
      image: alyssonImage,
    },
    {
      name: 'Sansei',
      position: 'Pivô',
      number: 11,
      games: 5,
      goals: 3,
      assists: 4,
      image: sanseiImage,
    },
    {
      name: 'Carlinhos',
      position: 'Pivô',
      number: 7,
      games: 5,
      goals: 2,
      assists: 4,
      image: carlinhosImage,
    },
    {
      name: 'Eric',
      position: 'Fixo',
      number: 30,
      games: 5,
      goals: 2,
      assists: 5,
      image: ericImage,
    },
    {
      name: 'Felipe',
      position: 'Ala',
      games: 5,
      goals: 1,
      assists: 0,
      image: felipeImage,
    },
    {
      name: 'Fernando Ferraz',
      position: 'Goleiro',
      number: 2,
      games: 5,
      goals: 1,
      assists: 1,
      image: fernandoImage,
    },
  ];

  return (
    <section id="elenco" className="py-24 px-4 bg-[#0A0A0A]">
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
            ELENCO
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#D4A64A] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A1A1A] border-2 border-[#D4A64A]/30 overflow-hidden hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,166,74,0.4)]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-[#0A0A0A]">
                  <img 
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                  
                  {/* Number Badge */}
                  {player.number !== undefined && (
                    <div 
                      className="absolute top-4 right-4 w-16 h-16 border-2 border-[#D4A64A] bg-[#0A0A0A]/80 flex items-center justify-center"
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '2rem',
                        color: '#D4A64A',
                      }}
                    >
                      {player.number}
                    </div>
                  )}
                </div>

                {/* Player Info */}
                <div className="p-6">
                  <h3 
                    className="text-[#D4A64A] mb-1"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.5rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {player.name}
                  </h3>
                  <p 
                    className="text-gray-400 mb-4"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {player.position}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#D4A64A]/10 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mb-1">Jogos</span>
                      <span className="text-gray-200 text-sm font-semibold">{player.games}</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-[#D4A64A]/10">
                      <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mb-1">Assist.</span>
                      <span className="text-gray-200 text-sm font-semibold">{player.assists}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[#D4A64A] text-[10px] font-bold uppercase tracking-wider mb-1">Gols</span>
                      <span className="text-white text-sm font-bold">{player.goals}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}