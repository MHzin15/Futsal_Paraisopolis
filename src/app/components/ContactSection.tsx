import { motion } from 'motion/react';
import { Mail, Phone, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/logo-transparente.png';

export function ContactSection() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A64A] blur-[200px] opacity-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img 
            src={logoImage} 
            alt="Logo Futsal Paraisópolis" 
            className="w-32 h-32 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(212,166,74,0.6)]"
          />
          
          <h2 
            className="text-[#D4A64A] mb-4"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(212, 166, 74, 0.5)',
            }}
          >
            FAÇA PARTE DO TIME
          </h2>
          
          <p 
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.8',
            }}
          >
            Seja um parceiro do Futsal Paraisópolis. Junte-se a nós na construção de uma história de 
            vitórias e representação da nossa comunidade. Entre em contato e descubra as oportunidades 
            de parceria e patrocínio.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.instagram.com/futsalparaisoo/', '_blank')}
            className="px-10 py-4 bg-[#D4A64A] text-[#0A0A0A] mb-12 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,166,74,0.8)]"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontSize: '1.125rem',
            }}
          >
            FALE CONOSCO
          </motion.button>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'contato@futsalparaisopolis.com.br' },
              { icon: Phone, label: 'Telefone', value: '+55 35 99120-5200' },
              { icon: Instagram, label: 'Instagram', value: '@futsalparaisoo' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#D4A64A]/30 p-6 hover:border-[#D4A64A] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,166,74,0.3)]"
              >
                <item.icon className="w-8 h-8 text-[#D4A64A] mx-auto mb-3" />
                <div 
                  className="text-gray-400 mb-2"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {item.label}
                </div>
                <div 
                  className="text-white"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.875rem',
                  }}
                >
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-[#D4A64A]/30 pt-8">
            <p 
              className="text-gray-500"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.875rem',
              }}
            >
              © 2026 Futsal Paraisópolis. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
