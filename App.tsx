
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star,
  Lock,
  Trophy,
  Layers,
  Brain,
  MousePointer2,
  LockKeyhole,
  BadgeCheck,
  Timer,
  Sparkles,
  Loader2
} from 'lucide-react';
import { GeminiService } from './services/geminiService';

const KIWIFY_LINK = "https://pay.kiwify.com.br/4kYhoIp?fbclid=PAVERFWAPRNzZleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafK2svyJpDclp5P9F13Q-u7Qgeo426nHqR3EYbX2lI7eVD6Kcp2GycWXppebQ_aem_ZmFrZWR1bW15MTZieXRlcw";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-1 font-mono font-black text-slate-950 text-2xl md:text-4xl tracking-tighter">
      <span className="animate-glitch inline-block bg-slate-950/5 px-1 rounded">{format(timeLeft.hours)}</span>
      <span className="opacity-30 text-slate-900 animate-pulse">:</span>
      <span className="animate-glitch inline-block bg-slate-950/5 px-1 rounded">{format(timeLeft.minutes)}</span>
      <span className="opacity-30 text-slate-900 animate-pulse">:</span>
      <span className="animate-glitch inline-block bg-slate-950/5 px-1 rounded">{format(timeLeft.seconds)}</span>
    </div>
  );
};

const AIHabitInsight = () => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const gemini = GeminiService.getInstance();

  const generateInsight = async () => {
    setLoading(true);
    try {
      const result = await gemini.getHabitInsight("Dê uma dica curta e impactante de 2 frases sobre como projetar o quarto para evitar procrastinar ao acordar, focando em engenharia de ambiente.");
      setInsight(result.text);
    } catch (e) {
      setInsight("Prepare seu ambiente hoje para que o amanhã seja automático. Deixe sua roupa de treino visível.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-green-400" size={20} />
        <span className="text-[10px] font-black uppercase tracking-widest text-green-400">HabitEng AI Assistant</span>
      </div>
      {insight ? (
        <p className="text-sm text-slate-300 italic mb-4 animate-in fade-in duration-700">"{insight}"</p>
      ) : (
        <p className="text-sm text-slate-500 italic mb-4">Quer uma amostra do poder da Engenharia de Ambiente?</p>
      )}
      <button 
        onClick={generateInsight}
        disabled={loading}
        className="text-[10px] font-black uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition flex items-center gap-2 disabled:opacity-50"
      >
        {loading ? <Loader2 size={12} className="animate-spin" /> : <Brain size={12} />}
        {loading ? "Processando Biologia..." : "Gerar Insight Personalizado"}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-green-400 selection:text-slate-950 bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format,compress&fit=crop&q=60&w=1920&fm=webp" 
            alt="Ambiente de Alta Performance" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-green-400 mb-10 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
              <Brain size={14} className="animate-bounce" /> Biologia da Persistência Ativada
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[105px] font-black mb-8 leading-[0.82] tracking-tighter uppercase italic">
              Pare de Lutar. <br /><span className="text-green-400 italic">Comece a Fluir.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-xl mb-12 leading-tight font-medium opacity-90 italic">
              Sua força de vontade é finita. O <strong>HabitEng</strong> é o sistema de design que elimina a necessidade de motivação, transformando a disciplina em um <span className="text-white font-black underline decoration-green-500 underline-offset-8">processo automático.</span>
            </p>

            <a 
              href={KIWIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button shimmer-effect animate-pulse-tempting w-full sm:w-auto text-slate-950 px-12 py-6 rounded-2xl text-xl font-black transition flex items-center justify-center gap-4 shadow-[0_25px_60px_rgba(74,222,128,0.4)] group uppercase italic tracking-tighter"
            >
              INSTALAR PROTOCOLO AGORA <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
            </a>

            <AIHabitInsight />

            <div className="mt-16 flex items-center gap-8 border-l-2 border-green-500/40 pl-8">
               <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/96?u=tech${i}`} className="w-12 h-12 rounded-full border-2 border-slate-950 grayscale hover:grayscale-0 transition duration-500 cursor-pointer" alt="Membro" width="48" height="48" />
                 ))}
               </div>
               <div>
                 <p className="text-sm font-black uppercase tracking-widest text-white leading-none mb-1">+2.400 Mentes Reconfiguradas</p>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter italic">Validado por analistas de comportamento.</p>
               </div>
            </div>
          </div>

          <div className="relative hidden lg:block group">
            <div className="absolute -inset-10 bg-green-500/20 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format,compress&fit=crop&q=60&w=800&fm=webp" 
                alt="Alta Performance Visual" 
                className="w-full h-auto brightness-90 group-hover:scale-105 transition duration-[2s]"
                width="800"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                <div className="bg-green-400 text-slate-950 px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest italic inline-block w-fit">
                  SISTEMA ATRITO ZERO v2025
                </div>
                <p className="text-white font-black text-lg italic tracking-tighter uppercase">98% de Eficiência Cognitiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dor & Conflito */}
      <section className="py-32 px-4 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase italic leading-tight tracking-tighter">O Erro Fatal que <br /><span className="text-rose-500 italic decoration-rose-500 underline underline-offset-8">Drena sua Energia.</span></h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium italic">Seu cérebro foi feito para sobreviver, não para treinar. Se você não projeta o ambiente, <span className="text-white font-bold">você é a vítima dele.</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <MousePointer2 className="text-rose-500" />, 
                title: "Decisão Letal", 
                desc: "A cada micro-escolha, seu cérebro queima glicose. No final do dia, você não tem preguiça, tem esgotamento de hardware." 
              },
              { 
                icon: <Layers className="text-rose-500" />, 
                title: "Fricção Invisível", 
                desc: "Um ambiente desorganizado sinaliza ao seu sistema límbico que a tarefa é perigosa ou custosa demais. O HabitEng remove o custo." 
              },
              { 
                icon: <LockKeyhole className="text-rose-500" />, 
                title: "Loop de Inércia", 
                desc: "Sua casa é um gatilho de relaxamento. Mudar isso sem design é como tentar nadar contra uma tsunami de dopamina barata." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-950/80 p-12 rounded-[3rem] border border-white/5 hover:border-rose-500/40 transition-all duration-500 group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">{item.icon}</div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium italic opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Irresistível */}
      <section className="py-40 px-4 relative bg-slate-950">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-green-400 text-slate-950 inline-flex flex-col md:flex-row items-center gap-6 px-10 py-8 rounded-[3rem] mb-12 shadow-[0_0_50px_rgba(74,222,128,0.25)] border-2 border-green-500/40 italic uppercase">
            <div className="flex items-center gap-3 font-black text-sm tracking-widest text-slate-900">
              <Timer size={24} className="animate-spin-slow" /> 
              <span>OFERTA EXPIRA EM:</span>
            </div>
            <CountdownTimer />
            <div className="bg-slate-950 text-green-400 px-6 py-2 rounded-full font-black text-xl shadow-lg">
              80% OFF
            </div>
          </div>
          
          <h2 className="text-6xl md:text-[110px] font-black mb-12 uppercase italic leading-none tracking-tighter">O Upgrade <br /><span className="text-green-400">Definitivo.</span></h2>
          
          <div className="bg-slate-900/60 backdrop-blur-3xl border-2 border-green-400/30 p-10 md:p-20 rounded-[4rem] shadow-[0_40px_120px_rgba(34,197,94,0.25)] relative overflow-hidden">
            <div className="mb-14 relative z-10">
              <span className="text-slate-600 line-through text-2xl font-black opacity-50 italic tracking-tighter">R$ 97,00</span>
              <div className="flex items-center justify-center gap-2 mb-4 italic">
                <span className="text-4xl font-black text-green-500">R$</span>
                <span className="text-[120px] md:text-[150px] font-black text-white leading-none tracking-tighter">18<span className="text-5xl text-green-500">,80</span></span>
              </div>
              <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[11px] italic mb-2">Investimento único. Acesso vitalício.</p>
            </div>

            <a 
              href={KIWIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button shimmer-effect animate-pulse-tempting flex w-full text-slate-950 py-8 rounded-[2.5rem] text-2xl font-black items-center justify-center transition shadow-[0_20px_60px_rgba(74,222,128,0.5)] uppercase italic tracking-tighter"
            >
              BAIXAR PROTOCOLO AGORA
            </a>
          </div>
          
          {/* Garantia Aprimorada */}
          <div className="mt-20 p-10 md:p-16 border-2 border-dashed border-white/10 rounded-[3.5rem] bg-slate-900/40 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/5 blur-[60px] rounded-full group-hover:bg-green-400/10 transition duration-1000"></div>
            
            <div className="flex flex-col items-center gap-8 relative z-10">
              <div className="relative">
                <ShieldCheck size={84} className="text-green-400 drop-shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse" />
                <BadgeCheck size={32} className="text-slate-950 fill-green-400 absolute -bottom-2 -right-2 border-4 border-slate-900 rounded-full" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white">
                  GARANTIA DE <span className="text-green-400">SATISFAÇÃO BLINDADA</span>
                </h3>
                <p className="text-slate-400 text-lg md:text-xl font-medium italic max-w-2xl mx-auto leading-tight">
                  Sua transformação é <span className="text-white font-bold underline decoration-green-500/50">garantida por lei e por nós</span>. Você tem 7 dias inteiros para testar o protocolo HabitEng.
                </p>
                <div className="h-px w-24 bg-green-500/30 mx-auto my-6"></div>
                <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.4em] leading-relaxed max-w-lg mx-auto">
                  Se você não sentir que sua rotina ficou instantaneamente mais simples, basta um e-mail para receber <span className="text-green-400">100% do seu dinheiro de volta</span>. Sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <Zap className="text-green-400 fill-green-400" size={28} />
            <span className="font-outfit font-black text-xl tracking-tighter uppercase italic">Habit<span className="text-green-400">Eng</span> Systems</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] italic">
            <a href="#" className="hover:text-green-400 transition">Políticas</a>
            <a href="#" className="hover:text-green-400 transition">Privacidade</a>
            <a href="#" className="hover:text-green-400 transition">Suporte VIP</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
