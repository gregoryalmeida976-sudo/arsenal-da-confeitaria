import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(11 * 60 + 47); // 11 minutes 47 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-600 text-white py-2 px-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base animate-pulse">
      <Clock className="w-4 h-4 md:w-5 md:h-5" />
      <span>OFERTA POR TEMPO LIMITADO: {formatTime(timeLeft)}</span>
    </div>
  );
};