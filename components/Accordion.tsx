import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-rose-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-slate-600 border-t border-slate-100 bg-slate-50">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};