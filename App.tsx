import React from 'react';
import { 
  Play, 
  Flame, 
  Smartphone, 
  Calculator, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Lock, 
  ArrowRight, 
  Gift, 
  AlertCircle,
  ArrowDown,
  ShieldCheck
} from 'lucide-react';
import { Timer } from './components/Timer';
import { Accordion } from './components/Accordion';
import { SalesNotification } from './components/SalesNotification';
import { TESTIMONIALS, FAQS, INCLUDED_ITEMS } from './constants';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      <SalesNotification />

      <div className="sticky top-0 z-50 shadow-lg border-b border-rose-600">
        <Timer />
      </div>

      <header className="relative bg-slate-900 text-white pt-12 pb-24 md:pt-20 md:pb-32 px-4 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-rose-900/40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg animate-fade-in-up">
            <Flame className="w-4 h-4 fill-current" />
            Método Comprovado • Renda Extra ou Hobby
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
            Descubra Como Fazer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-200">Doces Perfeitos & Lucrativos</span>
            <br /> Sem Gastar Horas na Cozinha
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Economize <strong className="text-amber-300 font-bold">Gás e Tempo</strong> com receitas que não vão ao fogo. 
            Seja para mimar a família ou para vender muito, o <span className="text-white font-semibold underline decoration-rose-500 underline-offset-4">Arsenal da Confeitaria</span> é o seu guia definitivo.
          </p>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToPricing}
              className="group relative bg-green-500 hover:bg-green-600 text-white font-black text-xl md:text-2xl py-5 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center gap-3 w-full md:w-auto justify-center overflow-hidden cursor-pointer border-none outline-none"
            >
              <span className="relative z-10">SIM! QUERO COMEÇAR AGORA</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            <p className="text-sm text-slate-400 md:hidden flex items-center gap-1">
              <Lock className="w-3 h-3" /> Compra segura e acesso imediato
            </p>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-white shadow-sm py-6 border-b border-slate-100 -mt-8 relative z-20 mx-4 md:mx-auto max-w-6xl rounded-xl">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 px-4 text-slate-500 font-medium text-sm md:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500 w-5 h-5" /> +5.000 Alunas
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500 w-5 h-5" /> Satisfação Garantida
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500 w-5 h-5" /> Acesso Vitalício
          </div>
        </div>
      </div>

      {/* Deliverables Section */}
      <section className="py-24 px-4 bg-rose-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight text-center uppercase">
              O QUE VOCÊ VAI RECEBER
            </h2>
            <p className="text-xl text-slate-600">Um verdadeiro arsenal para dominar a confeitaria</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
             {[
               { title: "Slice Cake", subtitle: "Fatias Lucrativas", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop" },
               { title: "Copo Felicidade", subtitle: "Campeão de Vendas", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop" },
               { title: "Taças Gourmet", subtitle: "Sobremesas Irresistíveis", img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=600&auto=format&fit=crop" },
               { title: "Brigadeiros", subtitle: "O Clássico Perfeito", img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=600&auto=format&fit=crop" }
             ].map((item, idx) => (
               <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                   <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">{item.subtitle}</span>
                   <span className="text-white font-bold text-2xl leading-none">{item.title}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha a Melhor Opção</h2>
            <div className="inline-block bg-green-500/10 border border-green-500 text-green-400 px-6 py-2 rounded-full font-bold animate-pulse">
              🎉 DESCONTO ATIVADO POR TEMPO LIMITADO
            </div>
          </div>

          <div className="flex flex-col gap-12 items-center justify-center max-w-2xl mx-auto">
            
            {/* PLANO DE 10 REAIS (DOWNSELL) PRIMEIRO */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl w-full border border-slate-700 flex flex-col h-fit transition-opacity">
              <div className="p-6 text-center border-b border-slate-700">
                <h3 className="text-xl font-bold text-slate-300 uppercase">Pacote Leitura</h3>
                <p className="text-slate-500 text-[10px] font-bold tracking-widest mt-1 uppercase">(APENAS PDF - SEM VÍDEOS)</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1 text-slate-300">
                    <span className="text-xl font-bold">R$</span>
                    <span className="text-5xl font-black tracking-tighter">10,00</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-slate-400 text-sm">Apenas Receitas escritas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-slate-400 text-sm line-through decoration-red-500/50">SEM as Vídeo Aulas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-slate-400 text-sm line-through decoration-red-500/50">SEM Calculadora Automática</span>
                  </li>
                   <li className="flex items-start gap-3 bg-red-900/20 p-2 rounded border border-red-900/30">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-red-300 text-xs font-bold text-left">Risco maior de errar o ponto sem ver o vídeo</span>
                  </li>
                </ul>

                <a 
                  href="https://pay.wiapy.com/vaHa9TGejO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-transparent border-2 border-slate-600 hover:bg-slate-700 text-slate-400 font-bold py-4 rounded-xl transition-all text-sm group flex flex-col items-center justify-center cursor-pointer"
                >
                  <span className="group-hover:text-slate-200 transition-colors">Quero apenas ler os arquivos</span>
                  <span className="text-[10px] font-normal opacity-50">(Opção Básica)</span>
                </a>
              </div>
            </div>

            {/* AVISO DE TRANSIÇÃO */}
            <div className="text-center py-4 flex flex-col items-center gap-4">
               <div className="h-px w-24 bg-slate-700"></div>
               <p className="text-amber-400 font-black text-xl md:text-2xl uppercase italic tracking-tighter drop-shadow-md animate-bounce px-4">
                  Mas calma aí... abaixo temos uma oferta melhor ainda! 👇
               </p>
               <div className="h-px w-24 bg-slate-700"></div>
            </div>

            {/* PLANO COMPLETO (OFFER) DEPOIS */}
            <div className="bg-white rounded-3xl shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] overflow-hidden w-full relative border-4 border-amber-400 flex flex-col transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500"></div>
              <div className="absolute top-4 right-0 bg-amber-400 text-slate-900 text-xs font-black px-4 py-1.5 rounded-l-full uppercase z-10 shadow-md">
                MAIS VANTAJOSO
              </div>
              
              <div className="p-8 text-center bg-rose-50/50 pb-6">
                <h3 className="text-3xl font-black text-rose-600 uppercase mb-2 leading-none tracking-tight">Arsenal Completo</h3>
                <p className="text-slate-800 text-sm font-bold tracking-widest uppercase mb-4 opacity-70">+ FERRAMENTAS PREMIUM</p>
              </div>

              <div className="p-6 md:p-10 flex-1 flex flex-col">
                <div className="text-center mb-8 border-b border-slate-100 pb-6">
                  <p className="text-slate-400 line-through text-lg font-medium">De R$ 99,90</p>
                  <div className="flex items-center justify-center gap-1 text-slate-900 -mt-2">
                    <span className="text-3xl font-bold align-top mt-2">R$</span>
                    <span className="text-7xl font-black tracking-tighter">19,90</span>
                  </div>
                  <p className="text-green-600 font-bold text-sm mt-2">Pagamento Único • Acesso Vitalício</p>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                    {[
                      "Acesso ao Portal de Vídeo Aulas 4K",
                      "+225 Recheios Sem Fogo (Sabores Premium)",
                      "Calculadora de Lucro Real Automática",
                      "28 Panetones e Chocotones Trufados",
                      "20 Copos da Felicidade Campeões",
                      "11 Bolos em Fatias (Slice Cake)",
                      "32 Brigadeiros Gourmet",
                      "09 Taças de Sobremesa Gourmet"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 bg-rose-100 rounded-full p-0.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                        </div>
                        <span className="text-slate-700 text-base font-semibold text-left">{feat}</span>
                      </div>
                    ))}
                </div>

                <a 
                  href="https://pay.wiapy.com/yK-9w1OfhN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-6 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-500/40 transition-all mb-4 text-center flex flex-col items-center leading-tight relative overflow-hidden transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 text-xl md:text-2xl uppercase tracking-wide">SIM! QUERO TUDO ISSO</span>
                  <span className="relative z-10 text-sm font-medium opacity-90 mt-1">POR APENAS R$ 19,90 (OFERTA COMPLETA)</span>
                </a>
                
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-50 py-3 rounded-lg">
                  <Lock className="w-3 h-3" />
                  <span>Ambiente Criptografado e 100% Seguro</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center text-sm">
         <div className="max-w-4xl mx-auto space-y-6">
           <span className="text-white font-bold text-xl">Arsenal da Confeitaria</span>
           <p>&copy; 2025 Todos os direitos reservados.</p>
         </div>
      </footer>
    </div>
  );
};

export default App;