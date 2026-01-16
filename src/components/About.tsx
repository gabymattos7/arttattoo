import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Pen } from "lucide-react";
import aboutImage from "@/assets/about-studio.jpg";

const stats = [
  { value: "500+", label: "Clientes Satisfeitos" },
  { value: "10+", label: "Anos de Experiência" },
  { value: "15+", label: "Prêmios Conquistados" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Pen className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wide text-sm">
                Sobre Nós
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Arte que Conta Histórias
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              No Art TATTO, transformamos ideias em arte permanente. Com mais de 10 anos 
              de experiência, nosso estúdio é referência em tatuagens de alta qualidade, 
              combinando técnica impecável com criatividade sem limites.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Cada tatuagem é única, criada especialmente para você. Trabalhamos com os 
              melhores materiais e seguimos rigorosos padrões de higiene e segurança.
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-lg mx-auto lg:ml-auto">
              <img
                src={aboutImage}
                alt="Estúdio Art TATTO"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 lg:left-0 bg-gold text-primary-foreground p-6 md:p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-display font-bold mb-1">100%</div>
              <div className="text-sm font-medium">Satisfação Garantida</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
