import { motion } from 'motion/react';

export function StatsSection() {
  const stats = [
    { value: '5', label: 'Jogos' },
    { value: '3', label: 'Vitórias' },
    { value: '1', label: 'Empates' },
    { value: '1', label: 'Derrotas' },
    { value: '67%', label: 'Aproveitamento' },
  ];

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative Lines */}
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
            ESTATÍSTICAS
          </h2>
          <div className="w-24 h-1 bg-[#D4A64A] mx-auto shadow-[0_0_10px_rgba(212,166,74,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#D4A64A] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-[#0A0A0A] border-2 border-[#D4A64A]/30 p-8 text-center hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,166,74,0.4)]">
                <div 
                  className="text-[#D4A64A] mb-2"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-gray-400"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}