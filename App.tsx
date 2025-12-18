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
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Sales Notification Pop-up */}
      <SalesNotification />

      {/* Sticky Top Bar / Timer */}
      <div className="sticky top-0 z-50 shadow-lg border-b border-rose-600">
        <Timer />
      </div>

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white pt-12 pb-24 md:pt-20 md:pb-32 px-4 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl">
        {/* Background Image Overlay */}
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
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
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

      {/* Problem / Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Quer uma Renda Extra ou Apenas <span className="text-rose-600 bg-rose-50 px-2 rounded">Elogios no Domingo?</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Não importa se você é iniciante ou se já vende doces. O maior desafio é o 
              <span className="font-bold text-slate-900"> custo alto de ingredientes</span> e o 
              <span className="font-bold text-slate-900"> medo de errar o ponto</span> e desperdiçar tudo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-8 h-8 fill-rose-600/20" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Economia Real de Gás</h3>
                <p className="text-slate-600 leading-relaxed">
                  Chega de ficar horas mexendo panela no fogão. Nossas receitas sem fogo reduzem drasticamente seus custos e aumentam seu lucro líquido.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 fill-amber-600/20 ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Passo a Passo Visual</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nas <span className="font-bold text-amber-600">Vídeo Aulas 4K</span>, você vê a textura exata. É impossível errar quando você tem o guia visual perfeito na sua tela.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-8 h-8 fill-green-600/20" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Segurança Financeira</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pare de chutar preços! Nossa <span className="font-bold text-green-600">Calculadora Automática</span> diz exatamente por quanto vender para ter lucro real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Netflix Style / Feature Highlight */}
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
              Esqueça PDFs confusos e arquivos perdidos no celular. Tudo organizado para você maratonar e aprender rápido. É entrar, assistir e aplicar na sua cozinha hoje mesmo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <div className="bg-red-500/20 p-3 rounded-lg">
                   <Play className="text-red-500 w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Vídeos em Alta Resolução</h4>
                  <p className="text-sm text-slate-400">Zoom nos detalhes para ver o ponto exato</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <div className="bg-green-500/20 p-3 rounded-lg">
                   <Calculator className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Calculadora Integrada</h4>
                  <p className="text-sm text-slate-400">Precificação automática na palma da mão</p>
                </div>
              </div>

               <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                   <Smartphone className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Acesso Multi-plataforma</h4>
                  <p className="text-sm text-slate-400">Assista no celular, tablet ou computador</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative group w-full flex flex-col items-center justify-center">
            
            <div className="flex flex-col items-center gap-3 mb-4 md:mb-6 animate-fade-in">
               <span className="text-amber-400 font-extrabold text-lg md:text-xl text-center uppercase tracking-wide drop-shadow-md px-4 leading-tight">
                  Assista o vídeo e veja tudo por dentro
               </span>
               <div className="bg-amber-400 text-slate-900 p-3 rounded-full animate-bounce shadow-lg shadow-amber-400/40">
                  <ArrowDown className="w-6 h-6" />
               </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black aspect-video w-full max-w-md">
               <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/BJQD1VWY_CY?autoplay=0&controls=1&rel=0" 
                 title="Por dentro da plataforma" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables / Arsenal Section */}
      <section className="py-24 px-4 bg-rose-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight uppercase">
              O QUE VOCÊ VAI RECEBER
            </h2>
            <p className="text-xl text-slate-600 italic">Um verdadeiro arsenal para dominar a confeitaria</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
             {[
               { title: "Slice Cake", subtitle: "Fatias Lucrativas", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop" },
               { title: "Copo Felicidade", subtitle: "Campeão de Vendas", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop" },
               { title: "Taças Gourmet", subtitle: "Sobremesas Premium", img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=600&auto=format&fit=crop" },
               { title: "Brigadeiros", subtitle: "O Clássico Perfeito", img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=600&auto=format&fit=crop" }
             ].map((item, idx) => (
               <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg cursor-pointer">
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                   <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">{item.subtitle}</span>
                   <span className="text-white font-bold text-2xl leading-none">{item.title}</span>
                 </div>
               </div>
             ))}
          </div>
          
          {/* Detailed List */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
               <Gift className="w-64 h-64" />
             </div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 relative z-10">
               <Gift className="text-rose-500" />
               Lista Completa de Conteúdo:
             </h3>

             <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                {INCLUDED_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-dashed border-slate-100 last:border-0">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg leading-snug">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-slate-900 tracking-tight">
            Quem Faz, Aprova e <span className="text-rose-600 underline decoration-amber-400">Lucra!</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all relative">
                <div className="absolute -top-4 right-8 bg-amber-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                   <Star className="w-3 h-3 fill-white" /> 5.0
                </div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-md">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-none">{t.name}</p>
                    <p className="text-xs text-rose-600 font-bold uppercase tracking-wide mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">Escolha a Melhor Opção</h2>
            <div className="inline-block bg-green-500/10 border border-green-500 text-green-400 px-6 py-2 rounded-full font-bold animate-pulse">
              🎉 DESCONTO ESPECIAL ATIVADO
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            
            {/* Downsell Card (Ghost) - PDF primeiro como opção de entrada */}
            <div className="order-2 md:order-1 bg-slate-800/50 backdrop-blur-sm rounded-3xl w-full max-w-sm border border-slate-700 md:mt-12 flex flex-col h-fit opacity-80 hover:opacity-100 transition-opacity">
              <div className="p-6 text-center border-b border-slate-700">
                <h3 className="text-xl font-bold text-slate-300 uppercase tracking-widest leading-none">Pacote PDF</h3>
                <p className="text-slate-500 text-[10px] font-bold tracking-widest mt-1 uppercase">(APENAS RECEITAS ESCRITAS)</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1 text-slate-300">
                    <span className="text-xl font-bold">R$</span>
                    <span className="text-5xl font-black tracking-tighter leading-none">10,00</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-slate-400 text-sm text-left">Apenas Receitas escritas digitalmente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-slate-400 text-sm text-left line-through decoration-red-500/50 italic opacity-60">SEM as Vídeo Aulas 4K</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-slate-400 text-sm text-left line-through decoration-red-500/50 italic opacity-60">SEM Calculadora Automática</span>
                  </li>
                   <li className="flex items-start gap-3 bg-red-900/20 p-3 rounded-xl border border-red-900/30 mt-4">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-red-300 text-xs text-left font-bold">Atenção: Opção mais difícil para quem está começando do absoluto zero.</span>
                  </li>
                </ul>

                <a 
                  href="https://pay.wiapy.com/vaHa9TGejO"
                  className="w-full bg-transparent border-2 border-slate-600 hover:bg-slate-700 text-slate-400 font-bold py-4 rounded-xl transition-all text-sm group flex flex-col items-center justify-center cursor-pointer"
                >
                  <span className="group-hover:text-slate-200 transition-colors uppercase font-black">Quero apenas o PDF</span>
                  <span className="text-[10px] font-normal opacity-50 mt-1">(Opção de Entrada)</span>
                </a>
              </div>
            </div>

            {/* Main Offer Card (Highlighted) - Arsenal Completo */}
            <div className="order-1 md:order-2 bg-white rounded-[2.5rem] shadow-[0_0_80px_-15px_rgba(255,255,255,0.4)] overflow-hidden w-full max-w-lg relative transform md:-translate-y-8 border-4 border-amber-400 flex flex-col">
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500"></div>
              <div className="absolute top-4 right-0 bg-amber-400 text-slate-900 text-[10px] font-black px-6 py-2 rounded-l-full uppercase z-10 shadow-lg tracking-widest">
                MAIS RECOMENDADO
              </div>
              
              <div className="p-10 text-center bg-rose-50/50 pb-8">
                <h3 className="text-4xl font-black text-rose-600 uppercase mb-2 tracking-tight leading-none">Arsenal Completo</h3>
                <p className="text-slate-800 text-xs font-bold tracking-widest uppercase opacity-60">OFERTA COMPLETA DE ALUNA</p>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="text-center mb-10 border-b border-slate-100 pb-8">
                  <p className="text-slate-400 line-through text-xl font-medium">De R$ 99,90</p>
                  <div className="flex items-center justify-center gap-1 text-slate-900 -mt-2">
                    <span className="text-4xl font-bold mt-4">R$</span>
                    <span className="text-8xl font-black tracking-tighter leading-none">19,90</span>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-tighter">Pagamento Único</span>
                    <span className="bg-rose-100 text-rose-700 text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-tighter">Acesso Vitalício</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {/* Highlights Visuals */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center text-center gap-2 group hover:bg-green-100 transition-colors">
                      <Play className="w-8 h-8 text-green-600 fill-green-600/10" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">Portal de Vídeos <br/>Passo a Passo</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center text-center gap-2 group hover:bg-green-100 transition-colors">
                      <Calculator className="w-8 h-8 text-green-600" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">Calculadora <br/>de Lucro Real</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "+225 Recheios Sem Fogo (PDF incluso)",
                      "28 Panetones e Chocotones Trufados",
                      "20 Copos da Felicidade Campeões",
                      "11 Bolos em Fatias (Slice Cake)",
                      "32 Brigadeiros Gourmet Premium",
                      "09 Taças de Sobremesa Exclusivas"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-100 rounded-full p-0.5 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                        </div>
                        <span className="text-slate-700 text-base font-bold text-left leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="https://pay.wiapy.com/yK-9w1OfhN"
                  className="group w-full bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-black py-7 rounded-2xl shadow-[0_20px_40px_-10px_rgba(34,197,94,0.5)] transition-all mb-6 text-center flex flex-col items-center justify-center leading-none relative overflow-hidden transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 text-2xl md:text-3xl uppercase tracking-tighter leading-none">QUERO O ARSENAL COMPLETO</span>
                  <span className="relative z-10 text-sm font-bold opacity-90 mt-2 uppercase tracking-widest italic">Acesso Imediato • R$ 19,90</span>
                </a>
                
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>Ambiente Blindado e 100% Seguro</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-20 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-40 h-40 flex-shrink-0">
             <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-30 rounded-full animate-pulse"></div>
             <div className="relative w-full h-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-white rounded-full border-[8px] border-amber-400 border-double flex flex-col items-center justify-center p-2 text-center">
                   <ShieldCheck className="w-10 h-10 text-amber-500 mb-1" />
                   <span className="text-amber-600 font-black text-4xl leading-none">7</span>
                   <span className="text-[10px] uppercase font-bold text-amber-600 tracking-widest mt-1">Dias de<br/>Garantia</span>
                </div>
             </div>
          </div>

          <div className="text-center md:text-left space-y-4">
             <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">Sua Satisfação ou seu Dinheiro de Volta</h3>
             <p className="text-slate-600 text-lg leading-relaxed">
               Acreditamos tanto no potencial do **Arsenal da Confeitaria** que oferecemos uma garantia incondicional de 7 dias. Se você não amar as receitas ou as aulas, basta nos enviar um e-mail e devolvemos cada centavo. Sem letras miúdas.
             </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight leading-tight">Dúvidas Frequentes</h2>
          <p className="text-center text-slate-500 mb-16 text-lg">Tudo o que você precisa saber antes de entrar</p>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-4 border-t border-slate-800 text-center">
         <div className="max-w-5xl mx-auto space-y-10">
           <div className="flex flex-col items-center gap-6">
              <span className="text-white font-black text-3xl tracking-tighter uppercase italic">Arsenal da Confeitaria</span>
              <div className="flex flex-wrap justify-center gap-8 text-xs md:text-sm font-bold uppercase tracking-widest opacity-60">
                <a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Contato</a>
              </div>
           </div>
           
           <div className="h-px w-full bg-slate-800/50"></div>

           <p className="text-[10px] text-slate-600 max-w-2xl mx-auto leading-relaxed uppercase tracking-wide">
             Este site não é afiliado ao Facebook nem ao Google. Todos os esforços foram feitos para apresentar o produto de forma clara e honesta. Os resultados podem variar de pessoa para pessoa dependendo da aplicação do método.
           </p>
           
           <p className="font-bold text-xs uppercase tracking-[0.2em] opacity-30">&copy; 2025 • Todos os direitos reservados.</p>
         </div>
      </footer>
    </div>
  );
};

export default App;