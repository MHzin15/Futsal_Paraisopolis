import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy } from 'lucide-react';

export function MatchesSection() {
  const upcomingMatches = [
    {
      opponent: 'FC Morumbi',
      date: '20 JUN 2026',
      time: '19:30',
      location: 'Ginásio Paraisópolis',
    },
    {
      opponent: 'Unidos da Vila',
      date: '28 JUN 2026',
      time: '20:00',
      location: 'Arena Capão Redondo',
    },
    {
      opponent: 'Real Jardim',
      date: '05 JUL 2026',
      time: '18:00',
      location: 'Ginásio Paraisópolis',
    },
  ];

  const pastMatches = [
    {
      opponent: 'Resenha FC',
      result: 'D',
      score: '3 - 7',
      date: '02 MAI 2026',
    },
    {
      opponent: 'Borussia Futsal',
      result: 'E',
      score: '4 - 4',
      date: '29 JAN 2026',
    },
    {
      opponent: 'Esther Real',
      result: 'V',
      score: '9 - 2',
      date: '27 JAN 2026',
    },
    {
      opponent: 'Jatobá FC',
      result: 'V',
      score: '7 - 2',
      date: '21 JAN 2026',
    },
    {
      opponent: 'Barcelona',
      result: 'V',
      score: '8 - 3',
      date: '09 JAN 2026',
    },
  ];

  return (
    <section id="jogos" className="py-24 px-4 bg-[#1A1A1A]">
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
            JOGOS
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Matches */}
          <div>
            <h3 
              className="text-[#D4A64A] mb-6"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '2rem',
                letterSpacing: '0.05em',
              }}
            >
              PRÓXIMOS JOGOS
            </h3>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0A0A0A] border-2 border-[#D4A64A]/30 p-6 hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,166,74,0.3)]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '1.5rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      vs {match.opponent}
                    </h4>
                    <div className="text-right">
                      <div 
                        className="text-[#D4A64A]"
                        style={{ 
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                        }}
                      >
                        {match.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4A64A]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                        {match.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#D4A64A]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                        {match.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Matches */}
          <div>
            <h3 
              className="text-[#D4A64A] mb-6"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '2rem',
                letterSpacing: '0.05em',
              }}
            >
              ÚLTIMOS RESULTADOS
            </h3>
            <div className="space-y-4">
              {pastMatches.map((match, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0A0A0A] border-2 border-[#D4A64A]/30 p-6 hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,166,74,0.3)]"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h4 
                        className="text-white mb-2"
                        style={{ 
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '1.25rem',
                          letterSpacing: '0.05em',
                        }}
                      >
                        vs {match.opponent}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-[#D4A64A]" />
                        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                          {match.date}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div 
                        className={`inline-flex items-center justify-center w-10 h-10 mb-2 border-2 ${
                          match.result === 'V' 
                            ? 'bg-green-600/20 border-green-600 text-green-600' 
                            : match.result === 'E'
                            ? 'bg-yellow-600/20 border-yellow-600 text-yellow-600'
                            : 'bg-red-600/20 border-red-600 text-red-600'
                        }`}
                        style={{ 
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '1.25rem',
                        }}
                      >
                        {match.result}
                      </div>
                      <div 
                        className="text-[#D4A64A]"
                        style={{ 
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontSize: '1.25rem',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {match.score}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
