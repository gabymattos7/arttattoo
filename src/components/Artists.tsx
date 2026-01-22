import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

import artistOldschool from "@/assets/artists/artist-oldschool.jpg";
import artistRealismo from "@/assets/artists/artist-realismo.jpg";
import artistFineline from "@/assets/artists/artist-fineline.jpg";
import artistBlackwork from "@/assets/artists/artist-blackwork.jpg";
import artistDotwork from "@/assets/artists/artist-dotwork.jpg";
import artistOriental from "@/assets/artists/artist-oriental.jpg";
import artistMaori from "@/assets/artists/artist-maori.jpg";
import artistGeometrico from "@/assets/artists/artist-geometrico.jpg";
import artistSingleline from "@/assets/artists/artist-singleline.jpg";

const artists = [
  {
    name: "Ricardo Silva",
    specialty: "Old School / Tradicional",
    description: "Ícones vintage, âncoras, sereias e linhas fortes",
    experience: "12 anos",
    image: artistOldschool,
  },
  {
    name: "Carolina Mendes",
    specialty: "Realismo",
    description: "Tatuagens ultrarealistas em preto, cinza e colorido",
    experience: "10 anos",
    image: artistRealismo,
  },
  {
    name: "Isabela Costa",
    specialty: "Fine Line / Traço Fino",
    description: "Designs minimalistas, delicados e precisos",
    experience: "8 anos",
    image: artistFineline,
  },
  {
    name: "Marcos Rocha",
    specialty: "Blackwork",
    description: "Arte em tinta preta com texturas e formas impactantes",
    experience: "15 anos",
    image: artistBlackwork,
  },
  {
    name: "Felipe Santos",
    specialty: "Pontilhismo / Dotwork",
    description: "Construído com pontos para detalhes e gradientes únicos",
    experience: "9 anos",
    image: artistDotwork,
  },
  {
    name: "Kenji Tanaka",
    specialty: "Oriental",
    description: "Arte japonesa: dragões, carpas e flores de cerejeira",
    experience: "14 anos",
    image: artistOriental,
  },
  {
    name: "Tiago Amorim",
    specialty: "Maori / Tribal",
    description: "Padrões geométricos de culturas polinésias e indígenas",
    experience: "11 anos",
    image: artistMaori,
  },
  {
    name: "Lucas Ferreira",
    specialty: "Geométrico",
    description: "Formas, linhas e padrões matemáticos complexos",
    experience: "7 anos",
    image: artistGeometrico,
  },
  {
    name: "Amanda Oliveira",
    specialty: "Single Line",
    description: "Tatuagens feitas com uma única linha contínua",
    experience: "6 anos",
    image: artistSingleline,
  },
];

export const Artists = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipe" className="py-12 md:py-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium uppercase tracking-wide text-sm">
              Nossa Equipe
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Conheça Nossos Artistas
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Uma equipe diversificada de talentos, cada um especialista em seu estilo, 
            prontos para transformar suas ideias em arte permanente.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden border border-border/50 hover:border-gold/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-1 left-1 right-1">
                  <span className="inline-block bg-gold text-primary-foreground px-1.5 py-0.5 rounded-full text-[8px] font-semibold">
                    {artist.specialty}
                  </span>
                </div>
              </div>
              
              <div className="p-2">
                <h3 className="text-xs font-display font-bold text-foreground mb-0.5 truncate">
                  {artist.name}
                </h3>
                <p className="text-muted-foreground text-[10px] mb-1 line-clamp-1">
                  {artist.description}
                </p>
                <span className="text-gold text-[10px] font-medium">
                  {artist.experience}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
