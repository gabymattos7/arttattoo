import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tattoo1 from "@/assets/portfolio/tattoo-1.jpg";
import tattoo2 from "@/assets/portfolio/tattoo-2.jpg";
import tattoo3 from "@/assets/portfolio/tattoo-3.jpg";
import tattoo4 from "@/assets/portfolio/tattoo-4.jpg";
import tattoo5 from "@/assets/portfolio/tattoo-5.jpg";
import tattoo6 from "@/assets/portfolio/tattoo-6.jpg";
import tattoo7 from "@/assets/portfolio/tattoo-7.jpg";
import tattoo8 from "@/assets/portfolio/tattoo-8.jpg";
import tattoo9 from "@/assets/portfolio/tattoo-9.jpg";
import tattoo10 from "@/assets/portfolio/tattoo-10.jpg";

interface PortfolioItem {
  id: number;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, image: tattoo1, description: "Índia com cocar e tendas" },
  { id: 2, image: tattoo2, description: "Índia em silêncio" },
  { id: 3, image: tattoo3, description: "Leões com flores" },
  { id: 4, image: tattoo4, description: "São Miguel com medalha" },
  { id: 5, image: tattoo5, description: "Guerreira com tigre" },
  { id: 6, image: tattoo6, description: "Olho realista com anjo" },
  { id: 7, image: tattoo7, description: "Cristo com medalha de São Bento" },
  { id: 8, image: tattoo8, description: "Onça pintada em fechamento" },
  { id: 9, image: tattoo9, description: "Zeus e demônios" },
  { id: 10, image: tattoo10, description: "Arcanjo Miguel" },
];

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">
              Portfólio
            </span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Nossas Artes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Explore nossa galeria de tatuagens e encontre inspiração para sua próxima arte.
            Cada peça é única e feita com dedicação.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          <AnimatePresence mode="popLayout">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-medium text-[10px] line-clamp-1">
                    {item.description}
                  </p>
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
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4 text-sm">
            Gostou do que viu? Agende uma consulta e traga suas ideias!
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gold text-background px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold-hover transition-colors"
          >
            Agendar Consulta
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <p className="text-foreground font-medium text-lg">
                  {selectedImage.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
