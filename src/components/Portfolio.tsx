import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all portfolio images
import oldSchool1 from "@/assets/portfolio/old-school-1.jpg";
import oldSchool2 from "@/assets/portfolio/old-school-2.jpg";
import realismo1 from "@/assets/portfolio/realismo-1.jpg";
import realismo2 from "@/assets/portfolio/realismo-2.jpg";
import fineLine1 from "@/assets/portfolio/fine-line-1.jpg";
import fineLine2 from "@/assets/portfolio/fine-line-2.jpg";
import blackwork1 from "@/assets/portfolio/blackwork-1.jpg";
import blackwork2 from "@/assets/portfolio/blackwork-2.jpg";
import dotwork1 from "@/assets/portfolio/dotwork-1.jpg";
import dotwork2 from "@/assets/portfolio/dotwork-2.jpg";
import oriental1 from "@/assets/portfolio/oriental-1.jpg";
import oriental2 from "@/assets/portfolio/oriental-2.jpg";
import maori1 from "@/assets/portfolio/maori-1.jpg";
import maori2 from "@/assets/portfolio/maori-2.jpg";
import geometrico1 from "@/assets/portfolio/geometrico-1.jpg";
import geometrico2 from "@/assets/portfolio/geometrico-2.jpg";
import singleLine1 from "@/assets/portfolio/single-line-1.jpg";
import singleLine2 from "@/assets/portfolio/single-line-2.jpg";

type TattooStyle = 
  | "Todos"
  | "Old School"
  | "Realismo"
  | "Fine Line"
  | "Blackwork"
  | "Pontilhismo"
  | "Oriental"
  | "Maori"
  | "Geométrico"
  | "Single Line";

interface PortfolioItem {
  id: number;
  image: string;
  style: Exclude<TattooStyle, "Todos">;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, image: oldSchool1, style: "Old School", description: "Âncora tradicional com rosas" },
  { id: 2, image: oldSchool2, style: "Old School", description: "Sereia clássica vintage" },
  { id: 3, image: realismo1, style: "Realismo", description: "Retrato realista em preto e cinza" },
  { id: 4, image: realismo2, style: "Realismo", description: "Leão hiperrealista colorido" },
  { id: 5, image: fineLine1, style: "Fine Line", description: "Flores delicadas em traço fino" },
  { id: 6, image: fineLine2, style: "Fine Line", description: "Borboleta minimalista" },
  { id: 7, image: blackwork1, style: "Blackwork", description: "Mandala em blackwork" },
  { id: 8, image: blackwork2, style: "Blackwork", description: "Floresta em silhueta" },
  { id: 9, image: dotwork1, style: "Pontilhismo", description: "Mandala geométrica em pontos" },
  { id: 10, image: dotwork2, style: "Pontilhismo", description: "Rosa em pontilhismo" },
  { id: 11, image: oriental1, style: "Oriental", description: "Dragão japonês tradicional" },
  { id: 12, image: oriental2, style: "Oriental", description: "Carpa koi com ondas" },
  { id: 13, image: maori1, style: "Maori", description: "Braçadeira tribal maori" },
  { id: 14, image: maori2, style: "Maori", description: "Padrões polinésios no ombro" },
  { id: 15, image: geometrico1, style: "Geométrico", description: "Lobo geométrico" },
  { id: 16, image: geometrico2, style: "Geométrico", description: "Padrões sagrados" },
  { id: 17, image: singleLine1, style: "Single Line", description: "Rosto em linha única" },
  { id: 18, image: singleLine2, style: "Single Line", description: "Flor contínua" },
];

const styles: TattooStyle[] = [
  "Todos",
  "Old School",
  "Realismo",
  "Fine Line",
  "Blackwork",
  "Pontilhismo",
  "Oriental",
  "Maori",
  "Geométrico",
  "Single Line",
];

const styleDescriptions: Record<Exclude<TattooStyle, "Todos">, string> = {
  "Old School": "Ícones vintage com linhas fortes e cores primárias",
  "Realismo": "Imita fotos ultrarealistas em preto, cinza ou colorido",
  "Fine Line": "Minimalista e delicado com linhas muito finas",
  "Blackwork": "Usa só tinta preta, jogando com presença e ausência",
  "Pontilhismo": "Construído com pequenos pontos para detalhes e gradientes",
  "Oriental": "Arte japonesa e chinesa com dragões, carpas e cerejeiras",
  "Maori": "Padrões geométricos e simbólicos de culturas polinésias",
  "Geométrico": "Formas, linhas e padrões matemáticos precisos",
  "Single Line": "Tatuagens feitas com uma única linha contínua",
};

export const Portfolio = () => {
  const [activeStyle, setActiveStyle] = useState<TattooStyle>("Todos");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const filteredItems = activeStyle === "Todos"
    ? portfolioItems
    : portfolioItems.filter((item) => item.style === activeStyle);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">
              Portfólio
            </span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa galeria de tatuagens e encontre inspiração para sua próxima arte. 
            Cada peça é única e feita com dedicação.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 ${
                activeStyle === style
                  ? "bg-gold text-background"
                  : "bg-card text-foreground hover:bg-gold/20 border border-border"
              }`}
            >
              {style}
            </button>
          ))}
        </motion.div>

        {/* Style Description */}
        <AnimatePresence mode="wait">
          {activeStyle !== "Todos" && (
            <motion.div
              key={activeStyle}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <p className="text-gold/80 italic">
                {styleDescriptions[activeStyle]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-0.5 bg-gold text-background text-[10px] font-semibold rounded-full mb-1">
                    {item.style}
                  </span>
                  <p className="text-foreground font-medium text-xs">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Gostou do que viu? Agende uma consulta e traga suas ideias!
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-full font-semibold hover:bg-gold-hover transition-colors"
          >
            Agendar Consulta
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.description}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent rounded-b-2xl">
                <span className="inline-block px-3 py-1 bg-gold text-background text-xs font-semibold rounded-full mb-2">
                  {selectedImage.style}
                </span>
                <p className="text-foreground font-medium text-lg">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
