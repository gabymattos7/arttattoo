import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-display font-bold text-gold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Página não encontrada</p>
        <a 
          href="/" 
          className="inline-flex bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-gold-hover transition-colors"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
