import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Pen, Award, Users, Calendar, CheckCircle } from "lucide-react";

const stats = [
  { value: "500+", label: "Clientes Satisfeitos", icon: Users },
  { value: "10+", label: "Anos de Experiência", icon: Calendar },
  { value: "15+", label: "Prêmios Conquistados", icon: Award },
  { value: "100%", label: "Satisfação Garantida", icon: CheckCircle },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Pen className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium uppercase tracking-wide text-sm">
              Sobre Nós
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Arte que Conta Histórias
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            No Art TATTO, transformamos ideias em arte permanente. Com mais de 10 anos 
            de experiência, nosso estúdio é referência em tatuagens de alta qualidade, 
            combinando técnica impecável com criatividade sem limites.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Cada tatuagem é única, criada especialmente para você. Trabalhamos com os 
            melhores materiais e seguimos rigorosos padrões de higiene e segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border/50 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
