import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Santos",
    role: "Cliente desde 2020",
    content: "Minha experiência no Art TATTO foi incrível! O artista entendeu exatamente o que eu queria e superou minhas expectativas. Recomendo a todos!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Rafael Costa",
    role: "Cliente desde 2019",
    content: "Profissionalismo impecável. Desde o atendimento até a finalização da tatuagem, tudo foi perfeito. Já fiz 3 tatuagens aqui.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Juliana Ferreira",
    role: "Cliente desde 2021",
    content: "O ambiente é acolhedor e higienizado. Os artistas são muito talentosos e pacientes. Minha tatuagem ficou exatamente como eu sonhei!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Carlos Eduardo",
    role: "Cliente desde 2018",
    content: "Fiz minha primeira tatuagem aqui e não me arrependo. A equipe é super profissional e me deixou muito tranquilo durante todo o processo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Fernanda Lima",
    role: "Cliente desde 2022",
    content: "Trabalho de altíssima qualidade! O artista captou perfeitamente a essência do que eu queria. O resultado superou todas as expectativas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    name: "Bruno Martins",
    role: "Cliente desde 2020",
    content: "Ambiente impecável, equipamentos de primeira e artistas extremamente talentosos. Voltarei com certeza para minha próxima tatuagem!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Camila Rodrigues",
    role: "Cliente desde 2021",
    content: "A melhor experiência que já tive em um estúdio de tatuagem. Desde a consulta inicial até o resultado final, tudo perfeito!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    name: "Lucas Almeida",
    role: "Cliente desde 2019",
    content: "Já fiz 5 tatuagens no Art TATTO e todas ficaram incríveis. A atenção aos detalhes e o cuidado com o cliente são incomparáveis.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    name: "Patrícia Souza",
    role: "Cliente desde 2023",
    content: "Fiquei nervosa por ser minha primeira tatuagem, mas a equipe me acolheu tão bem que me senti super confortável. Resultado lindo!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium uppercase tracking-wide text-sm">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            O que Nossos Clientes Dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-4 rounded-xl border border-border/50"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground/90 text-xs leading-relaxed mb-4 line-clamp-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground text-xs">{testimonial.name}</div>
                  <div className="text-[10px] text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
