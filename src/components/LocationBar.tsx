import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export const LocationBar = () => {
  const [city, setCity] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ip-api.com/json/?fields=city,regionName&lang=pt-BR")
      .then((res) => res.json())
      .then((data) => {
        if (data.city) {
          setCity(data.city);
          setRegion(data.regionName);
        }
      })
      .catch(() => {});
  }, []);

  if (!city) return null;

  return (
    <div className="fixed top-[88px] left-4 right-4 z-40 flex justify-center pointer-events-none">
      <div className="bg-gold/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-md backdrop-blur-sm">
        <MapPin className="w-3 h-3" />
        <span>
          Bem-vindo de {city}
          {region ? `, ${region}` : ""}!
        </span>
      </div>
    </div>
  );
};
