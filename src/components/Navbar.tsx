import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const { scrollY } = useScroll();
  
  // Scale transforms based on scroll direction
  const scale = useTransform(
    scrollY,
    [0, 100, 200],
    scrollDirection === "down" ? [1, 0.95, 0.92] : [1, 1, 1]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      
      lastScrollY.current = currentScrollY;
      setScrolled(currentScrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        scale: scrollDirection === "down" ? scale : 1,
        backdropFilter: scrolled ? "blur(80px) saturate(180%)" : "blur(40px) saturate(150%)",
        WebkitBackdropFilter: scrolled ? "blur(80px) saturate(180%)" : "blur(40px) saturate(150%)",
      }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled 
          ? "bg-gray-200/70 dark:bg-gray-800/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-300/30" 
          : "bg-gray-100/50 dark:bg-gray-900/40 border border-gray-200/20"
      }`}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-4"
        animate={{
          scale: scrollDirection === "down" && scrolled ? 0.98 : 1,
          y: scrollDirection === "down" && scrolled ? -2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <motion.a 
            href="/" 
            className="text-2xl font-logo tracking-widest text-foreground uppercase"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Art <span className="text-gold">Tattoo</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors text-foreground/90 hover:text-gold relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#agendar"
            className="hidden md:inline-flex bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-gold-hover transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Consulta
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 bg-white/90 dark:bg-white/10 backdrop-blur-2xl rounded-xl p-4 border border-white/30 shadow-lg"
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-medium text-foreground/90 hover:text-gold py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold"
            >
              Agendar Consulta
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};