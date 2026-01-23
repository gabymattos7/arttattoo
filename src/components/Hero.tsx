import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tattoo.jpg";
export const Hero = () => {
  return <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Artista tatuador trabalhando" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-display font-black text-foreground mb-4 tracking-tight text-shadow-hero text-left">
            Art <span className="text-gold">Tattoo</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gold italic mb-6 font-serif font-semibold">
            Transformando Pele em Arte Desde 2015
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl font-light leading-relaxed mb-10">Cada tatuagem é uma obra única e exclusiva, criada com paixão, técnica e dedicação absoluta. Nosso compromisso é transformar suas ideias em arte permanente que conta sua história.</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.a href="#agendar" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-hover transition-all">
              <Calendar className="w-5 h-5" />
              AGENDAR CONSULTA
            </motion.a>
            
            <motion.a href="#portfolio" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="inline-flex items-center gap-3 border-2 border-foreground text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground hover:text-background transition-all">
              VER PORTFÓLIO
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-foreground/60">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }} className="w-6 h-10 border-2 border-foreground/40 rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-gold rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>;
};