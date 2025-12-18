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
  ShieldCheck,
  Sparkles,
  Zap,
  Award,
  ChevronDown,
  ChevronsDown
} from 'lucide-react';
import { Timer } from './components/Timer';
import { Accordion } from './components/Accordion';
import { SalesNotification } from './components/SalesNotification';
import { TESTIMONIALS, FAQS, INCLUDED_ITEMS } from './constants';

const App: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Sales Notification Pop-up */}
      <SalesNotification />

      {/* Sticky Top Bar / Timer - Increased Z-Index to avoid overlaps */}
      <div className="sticky top-0 z-[100] shadow-lg border-b border-rose-600">
        <Timer />
      </div>

      {/* Hero Section */}
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
              <span className="relative z-10 uppercase">SIM! QUERO COMEÇAR AGORA</span>
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
            <ShieldCheck className="text-green-500 w-5 h-5" /> Acesso Vitalício
          </div>
        </div>
      </div>

      {/* Problem / Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Quer uma Renda Extra ou Apenas <span className="text-rose-600 bg-rose-50 px-2 rounded">Elogios no Domingo?</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Não importa se você é iniciante ou profissional. O segredo é ter as ferramentas certas para 
              <span className="font-bold text-slate-900"> lucrar de verdade</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-rose-200 transition-all relative overflow-hidden">
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto">
                <Flame className="w-8 h-8 fill-rose-600/20" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Economia de Gás</h3>
              <p className="text-slate-600 leading-relaxed">Receitas sem fogo reduzem custos e aumentam seu lucro líquido.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-amber-200 transition-all relative overflow-hidden">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto">
                <Play className="w-8 h-8 fill-amber-600/20 ml-1" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Vídeo Aulas</h3>
              <p className="text-slate-600 leading-relaxed">Veja a textura exata em aulas detalhadas passo a passo.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-green-200 transition-all relative overflow-hidden">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto">
                <Calculator className="w-8 h-8 fill-green-600/20" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Precificação</h3>
              <p className="text-slate-600 leading-relaxed">Calculadora automática para você não perder dinheiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Netflix Style Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-900 to-slate-900 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full border border-red-500/50 bg-red-500/10 text-red-400 text-sm font-bold tracking-wider mb-2">
              PLATAFORMA EXCLUSIVA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Aprenda Assistindo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">ESTILO NETFLIX</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Esqueça PDFs confusos. Tudo organizado para você maratonar e aprender rápido.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="bg-red-500/20 p-3 rounded-lg"><Play className="text-red-500 w-6 h-6 fill-current" /></div>
                <div>
                  <h4 className="font-bold text-white">60+ Vídeo Aulas</h4>
                  <p className="text-sm text-slate-400">Tudo explicado tim-tim por tim-tim</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="bg-green-500/20 p-3 rounded-lg"><Calculator className="text-green-500 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-white">Calculadora Inteligente</h4>
                  <p className="text-sm text-slate-400">Saiba seu lucro em segundos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center gap-8">
            {/* ULTRA VISIBLE CTA above video */}
            <div className="w-full flex flex-col items-center gap-4">
              <div className="relative">
                {/* Outer Ping Effect */}
                <div className="absolute inset-0 bg-amber-400 rounded-2xl animate-ping opacity-20"></div>
                
                <div className="relative bg-amber-400 text-slate-900 px-8 py-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(251,191,36,0.5)] border-2 border-amber-300 flex flex-col items-center gap-2 transition-transform hover:scale-105">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                    </span>
                    <span className="text-lg md:text-xl font-black uppercase tracking-tighter leading-none italic">ASSISTA AO VÍDEO ABAIXO</span>
                  </div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80 text-center">
                    Veja por dentro e tudo o que você irá receber
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center -mt-2">
                <ChevronsDown className="w-8 h-8 text-amber-500 animate-bounce" />
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border-4 border-slate-800 bg-black aspect-video w-full group">
               <div className="absolute inset-0 z-10 pointer-events-none border-2 border-white/5 rounded-[2rem]"></div>
               <iframe 
                 className="w-full h-full relative z-0"
                 src="https://www.youtube.com/embed/BJQD1VWY_CY?rel=0" 
                 title="Por dentro da plataforma" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase text-center w-full">Escolha o seu Plano</h2>
            <div className="inline-block bg-green-500/10 border border-green-500 text-green-400 px-6 py-2 rounded-full font-bold">
              OFERTA EXCLUSIVA ATIVADA
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center">
            
            {/* PLANO R$ 10,00 */}
            <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl w-full max-w-lg border border-slate-700 p-8 text-center flex flex-col shadow-xl">
                <h3 className="text-xl font-bold text-slate-300 uppercase tracking-widest leading-none">Pacote PDF</h3>
                <p className="text-slate-500 text-[10px] font-bold tracking-widest mt-1 uppercase">RECEITAS ESCRITAS APENAS</p>
                
                <div className="my-6">
                  <div className="flex items-center justify-center gap-1 text-white">
                    <span className="text-xl font-bold">R$</span>
                    <span className="text-6xl font-black">10,00</span>
                  </div>
                </div>

                <ul className="text-left space-y-3 mb-8 border-y border-slate-700/50 py-4">
                  <li className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm">Todas as Receitas em PDF</span>
                  </li>
                  <li className="flex items-start gap-3 text-red-400/60 italic">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm line-through">Sem Vídeo Aulas</span>
                  </li>
                  <li className="flex items-start gap-3 text-red-400/60 italic">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm line-through">Sem Calculadora</span>
                  </li>
                </ul>

                <a 
                  href="https://pay.wiapy.com/vaHa9TGejO"
                  className="w-full bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-bold py-4 rounded-xl transition-all uppercase tracking-wider text-sm text-center"
                >
                  Quero apenas o PDF
                </a>
            </div>

            {/* TRANSITION MESSAGE - Cleaner spacing and lower priority animation */}
            <div className="text-center py-10 flex flex-col items-center gap-6 w-full max-w-xl">
               <div className="h-px w-full bg-slate-800"></div>
               <p className="text-amber-400 font-black text-xl md:text-3xl uppercase italic tracking-tighter px-4 leading-tight flex flex-col items-center gap-3 text-center">
                  <span className="flex items-center gap-2 justify-center">
                    <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />
                    ATENÇÃO!
                  </span>
                  O plano abaixo é MUITO mais vantajoso! 👇
               </p>
               <div className="h-px w-full bg-slate-800"></div>
            </div>

            {/* PLANO R$ 19,90 - THE MOST ADVANTAGEOUS - Refined to avoid badge collision */}
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-xl relative border-b-8 border-amber-400 flex flex-col transform hover:-translate-y-1 transition-all duration-300">
              
              <div className="flex justify-between items-start px-6 pt-6 mb-2">
                <div className="bg-rose-600 text-white p-3 rounded-2xl shadow-lg flex flex-col items-center -rotate-6 z-10">
                  <Sparkles className="w-4 h-4 mb-1" />
                  <span className="text-[10px] font-black uppercase leading-none">A Escolha</span>
                  <span className="text-xs font-black uppercase">Certa!</span>
                </div>
                <div className="bg-amber-400 text-slate-900 text-[10px] font-black px-4 py-2 rounded-full uppercase shadow-md tracking-widest">
                  MAIS COMPLETO
                </div>
              </div>
              
              <div className="px-10 text-center pb-6">
                <h3 className="text-4xl font-black text-rose-600 uppercase mb-1 italic tracking-tight text-center">Arsenal Completo</h3>
                <div className="flex items-center justify-center gap-2 text-slate-900 font-bold text-xs uppercase opacity-80">
                   <Zap className="w-4 h-4 fill-amber-400 text-amber-400" /> TUDO LIBERADO <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
              </div>

              <div className="p-8 md:p-10 pt-0 flex flex-col">
                <div className="text-center mb-8 border-b border-slate-100 pb-8">
                  <p className="text-slate-400 line-through text-lg text-center">De R$ 147,00</p>
                  <div className="flex items-center justify-center gap-1 text-slate-900 -mt-2">
                    <span className="text-4xl font-bold mt-4">R$</span>
                    <span className="text-8xl font-black tracking-tighter leading-none text-rose-600">19,90</span>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="bg-green-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">PAGAMENTO ÚNICO</span>
                    <span className="bg-slate-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">ACESSO VITALÍCIO</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 bg-green-50 p-4 rounded-2xl border border-green-100">
                    <div className="bg-green-600 p-2 rounded-xl text-white shadow-md"><Play className="w-6 h-6 fill-current" /></div>
                    <div>
                        <span className="text-slate-900 font-black text-xl leading-none block">60+ Vídeo Aulas</span>
                        <span className="text-slate-500 text-sm">Passo a passo visual completo de cada receita</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-2xl border border-amber-100">
                    <div className="bg-amber-500 p-2 rounded-xl text-white shadow-md"><Calculator className="w-6 h-6" /></div>
                    <div>
                        <span className="text-slate-900 font-black text-xl leading-none block">Calculadora Inteligente</span>
                        <span className="text-slate-500 text-sm">Precificação automática para lucro real</span>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 bg-rose-50 p-4 rounded-2xl border border-rose-100">
                    <div className="bg-rose-500 p-2 rounded-xl text-white shadow-md"><Gift className="w-6 h-6" /></div>
                    <div>
                        <span className="text-slate-900 font-black text-xl leading-none block">Todas as Receitas Portal</span>
                        <span className="text-slate-500 text-sm">O acervo completo de doces de sucesso</span>
                    </div>
                  </li>
                </ul>

                <a 
                  href="https://pay.wiapy.com/yK-9w1OfhN"
                  className="group w-full bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-black py-8 rounded-2xl shadow-xl transition-all mb-6 text-center flex flex-col items-center justify-center leading-none transform hover:scale-[1.02]"
                >
                  <span className="text-2xl md:text-3xl uppercase tracking-tighter leading-none italic">QUERO O ARSENAL COMPLETO</span>
                  <span className="text-xs font-bold opacity-80 mt-3 uppercase tracking-widest flex items-center gap-2">
                    <Lock className="w-4 h-4" /> COMPRA 100% SEGURA
                  </span>
                </a>
                
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-black uppercase tracking-widest opacity-60">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>Ambiente Seguro • Satisfação Garantida</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Elegant & Refined Guarantee Section */}
      <section className="py-24 bg-white px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10 rounded-[3rem] -m-4 blur-xl pointer-events-none"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-14 bg-white p-10 md:p-14 rounded-[3rem] border border-amber-200 shadow-[0_30px_60px_-25px_rgba(251,191,36,0.3)]">
               {/* Elegant Gold Seal Badge */}
               <div className="relative flex-shrink-0 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-amber-200 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                  
                  <div className="relative w-44 h-44 bg-gradient-to-br from-amber-400 via-amber-300 to-amber-600 rounded-full p-1.5 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                    <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center border-[8px] border-double border-amber-400 p-4">
                        <Award className="w-12 h-12 text-amber-500 mb-1" />
                        <span className="text-6xl font-black text-amber-600 leading-none drop-shadow-sm">7</span>
                        <div className="flex flex-col items-center mt-1">
                          <span className="text-[11px] font-black text-slate-800 uppercase tracking-[0.25em] leading-tight">Dias de</span>
                          <span className="text-[11px] font-black text-amber-600 uppercase tracking-[0.25em] leading-tight">Garantia</span>
                        </div>
                    </div>
                    <div className="absolute -bottom-3 bg-amber-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl border-2 border-white">
                        Risco Zero
                    </div>
                  </div>
               </div>

               <div className="flex-1 space-y-6 text-center md:text-left text-center">
                  <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-200">
                    <ShieldCheck className="w-4 h-4" /> Compromisso de Ouro
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none italic text-center">
                    Garantia Incondicional <span className="text-amber-500">Premium</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium italic text-center">
                    "Temos tanta confiança na qualidade do nosso conteúdo que assumimos todo o risco por você. Se por qualquer motivo você achar que o <span className="text-rose-600 font-bold">Arsenal da Confeitaria</span> não superou suas expectativas, devolvemos 100% do seu dinheiro. Simples assim."
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 justify-center">
                     <div className="h-0.5 w-12 bg-amber-400 rounded-full"></div>
                     <span className="text-amber-600 font-black uppercase text-xs tracking-[0.2em] text-center">Sua evolução garantida</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500 relative group">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, r) => <Star key={r} className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-md transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-none">{t.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12 text-slate-900 uppercase tracking-[0.2em] text-center w-full">Perguntas Frequentes</h2>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-24 px-4 text-center">
         <div className="max-w-5xl mx-auto space-y-10">
           <span className="text-white font-black text-3xl tracking-tighter uppercase italic opacity-90 block text-center w-full">Arsenal da Confeitaria</span>
           <div className="flex justify-center flex-wrap gap-8 text-[11px] font-black uppercase tracking-[0.3em] opacity-40 justify-center">
             <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-amber-400 transition-colors">Políticas de Privacidade</a>
             <a href="#" className="hover:text-amber-400 transition-colors">Suporte ao Aluno</a>
           </div>
           <div className="h-px w-32 bg-slate-800 mx-auto opacity-50"></div>
           <p className="text-[10px] opacity-25 uppercase tracking-[0.4em] font-medium leading-relaxed block text-center w-full">
             &copy; 2025 • Criado com Paixão pela Confeitaria <br/>
             Todos os direitos reservados.
           </p>
         </div>
      </footer>
    </div>
  );
};

export default App;