import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Paulista, 1000 - São Paulo, SP",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 99999-9999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@arttatto.com.br",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sáb: 10h às 20h",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Send className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium uppercase tracking-wide text-sm">
              Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Entre em Contato
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">
              Agende sua Consulta Gratuita
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {["Instagram", "Facebook", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-3xl border border-border/50"
            id="agendar"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground resize-none"
                  placeholder="Descreva a tatuagem que você deseja..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-gold-hover transition-colors flex items-center justify-center gap-2"
              >
                ENVIAR MENSAGEM
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
