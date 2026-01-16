import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets } from "lucide-react";

const services = [
  {
    title: "Old School",
    description: "Ícones clássicos com linhas fortes e cores primárias",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=700&fit=crop",
    featured: true,
  },
  {
    title: "Tribal",
    description: "Padrões geométricos com raízes culturais",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=500&h=700&fit=crop",
    featured: true,
  },
  {
    title: "Oriental",
    description: "Dragões e carpas em estilo japonês",
    image: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?w=500&h=700&fit=crop",
    featured: true,
  },
  {
    title: "Realista",
    description: "Retratos fotorrealistas com detalhes impressionantes",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=500&h=700&fit=crop",
    featured: true,
  },
  {
    title: "Blackwork",
    description: "Designs em tinta preta sólida",
    image: "https://images.unsplash.com/photo-1604941629553-2870e9c39782?w=500&h=700&fit=crop",
  },
  {
    title: "Pontilhismo",
    description: "Arte construída por pontos",
    image: "https://images.unsplash.com/photo-1590246814883-57c511e7c423?w=500&h=700&fit=crop",
  },
  {
    title: "Geométrico",
    description: "Formas e padrões geométricos precisos",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&h=700&fit=crop",
  },
  {
    title: "Minimalista",
    description: "Menos é mais - linhas finas e discretas",
    image: "https://images.unsplash.com/photo-1586717799252-bd134f5c941c?w=500&h=700&fit=crop",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Droplets className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium uppercase tracking-wide text-sm">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Especialidades do Estúdio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-gold/10 transition-all duration-300"
            >
              <div className="h-64 md:h-80 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                
                {service.featured ? (
                  <button className="w-full bg-gold text-primary-foreground py-3 rounded-lg font-semibold hover:bg-gold-hover transition-colors">
                    AGENDAR AGORA
                  </button>
                ) : (
                  <button className="w-full border-2 border-gold text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary-foreground transition-all">
                    SABER MAIS
                  </button>
                )}
                
                <p className="text-xs text-muted-foreground mt-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
