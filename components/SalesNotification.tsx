import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin, ShoppingBag } from 'lucide-react';

const NAMES = [
  "Ana Paula S.", "Mariana C.", "Fernanda L.", "Juliana M.", "Patrícia R.",
  "Bruna K.", "Camila O.", "Roberta T.", "Larissa B.", "Beatriz D.",
  "Carla F.", "Daniela P.", "Elaine S.", "Gabriela A.", "Jéssica M.",
  "Renata B.", "Luana S.", "Vanessa C."
];

const LOCATIONS = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG",
  "Curitiba, PR", "Salvador, BA", "Porto Alegre, RS", "Brasília, DF",
  "Recife, PE", "Fortaleza, CE", "Goiânia, GO", "Campinas, SP",
  "Manaus, AM", "Vitória, ES"
];

export const SalesNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '' });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const showNotification = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomLoc = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      
      setData({ name: randomName, location: randomLoc });
      setVisible(true);

      // Esconder após 4 segundos
      setTimeout(() => {
        setVisible(false);
        scheduleNext();
      }, 4000);
    };

    const scheduleNext = () => {
      // Agenda a próxima entre 8 e 15 segundos depois de fechar a anterior
      const delay = Math.random() * 7000 + 8000; 
      timeoutId = setTimeout(showNotification, delay);
    };

    // Primeira aparição rápida (3.5 segundos) para o usuário ver que funciona
    timeoutId = setTimeout(showNotification, 3500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 md:right-auto md:w-80 z-[100] transition-all duration-700 transform ${
        visible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-l-4 border-green-500 p-4 flex items-center gap-4 relative overflow-hidden ring-1 ring-slate-900/5">
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-100 to-transparent -mr-2 -mt-2 rounded-bl-full opacity-50"></div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-2.5 rounded-full flex-shrink-0 shadow-lg shadow-green-500/30 text-white">
          <ShoppingBag className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0 relative z-10">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" /> Compra Verificada
          </p>
          <p className="text-sm text-slate-700 leading-tight mb-1">
            <span className="font-bold text-slate-900">{data.name}</span> comprou o <span className="font-bold text-rose-600">Arsenal</span>
          </p>
          <p className="text-[11px] text-slate-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};