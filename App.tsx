
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star,
  Brain,
  Timer,
  Trophy,
  Layers,
  MousePointer2,
  LockKeyhole,
  BadgeCheck,
  Lock,
  Activity,
  Users
} from 'lucide-react';

const KIWIFY_LINK = "https://pay.kiwify.com.br/4kYhoIp?fbclid=PAVERFWAPRNzZleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafK2svyJpDclp5P9F13Q-u7Qgeo426nHqR3EYbX2lI7eVD6Kcp2GycWXppebQ_aem_ZmFrZWR1bW15MTZieXRlcw";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-1 font-mono font-black text-slate-950">
      <span className="animate-glitch inline-block">{format(timeLeft.hours)}</span>
      <span className="opacity-50">:</span>
      <span className="animate-glitch inline-block">{format(timeLeft.minutes)}</span>
      <span className="opacity-50">:</span>
      <span className="animate-glitch inline-block">{format(timeLeft.seconds)}</span>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920" 
            alt="Ambiente de Alta Performance" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
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

            {/* Design Aprimorado de Prova Social */}
            <div className="mt-16 inline-flex items-center gap-6 glass-panel p-6 rounded-[2.5rem] border border-white/10 shadow-2xl group hover:border-green-500/30 transition-all duration-500">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="relative">
                     <img 
                      src={`https://i.pravatar.cc/150?u=habit${i}`} 
                      className="w-14 h-14 rounded-full border-4 border-slate-950 grayscale-0 group-hover:scale-110 transition duration-500 cursor-pointer object-cover shadow-lg" 
                      alt="Membro HabitEng" 
                     />
                     <div className="absolute inset-0 rounded-full bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                 ))}
                 <div className="w-14 h-14 rounded-full border-4 border-slate-950 bg-slate-900 flex items-center justify-center text-green-400 text-xs font-black shadow-lg">
                   <Users size={16} />
                 </div>
               </div>
               
               <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                   <p className="text-white font-black text-xl md:text-2xl uppercase italic tracking-tighter leading-none">
                     +2.400 <span className="text-green-400">Mentes</span>
                   </p>
                 </div>
                 <div className="flex items-center gap-2">
                   <Activity size={12} className="text-slate-500" />
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic leading-none">
                     Protocolo Reconfigurado & Ativo
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div className="relative hidden lg:block group">
            <div className="absolute -inset-10 bg-green-500/20 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" 
                alt="Alta Performance Visual" 
                className="w-full h-auto brightness-90 group-hover:scale-105 transition duration-[2s]"
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

      {/* Pain Section */}
      <section className="py-32 px-4 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase italic leading-tight tracking-tighter">O Erro Fatal que <br /><span className="text-rose-500 italic decoration-rose-500 underline underline-offset-8">Drena sua Energia.</span></h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium italic">Seu cérebro foi feito para sobreviver, não para treinar. Se você não projeta o ambiente, <span className="text-white font-bold">você é a vítima dele.</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <MousePointer2 className="text-rose-500" />, title: "Decisão Letal", desc: "A cada micro-escolha, seu cérebro queima glicose. No final do dia, você não tem preguiça, tem esgotamento." },
              { icon: <Layers className="text-rose-500" />, title: "Fricção Invisível", desc: "Um ambiente desorganizado sinaliza ao seu sistema límbico que a tarefa é perigosa. O HabitEng remove o custo." },
              { icon: <LockKeyhole className="text-rose-500" />, title: "Loop de Inércia", desc: "Sua casa é um gatilho de relaxamento. Mudar isso sem design é lutar contra uma tsunami de dopamina barata." }
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

      {/* Authority Section */}
      <section className="py-32 px-4 overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] uppercase italic tracking-tighter">
              A Ciência por trás do <br /><span className="text-green-400 italic">Sucesso Inevitável.</span>
            </h2>
            <div className="space-y-8">
              {[
                { t: "Configuração de Âncoras", d: "Transformamos objetos comuns em gatilhos neurológicos que disparam a vontade de agir." },
                { t: "Arquitetura de Fluxo", d: "Criamos um corredor de atrito zero entre o seu trabalho e o primeiro peso da academia." },
                { t: "Design de Recompensa", d: "Hackeamos o ciclo de feedback do cérebro para que a disciplina se sinta viciante." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-1 flex-shrink-0 bg-green-400/10 p-2 rounded-lg text-green-400 border border-green-400/20 group-hover:rotate-12 transition-transform"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-lg font-black uppercase text-white tracking-tighter italic mb-1">{item.t}</h4>
                    <p className="text-slate-500 font-medium text-base italic leading-snug">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <a 
              href={KIWIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button shimmer-effect animate-pulse-tempting inline-flex mt-16 text-slate-950 px-10 py-5 rounded-2xl font-black text-lg transition shadow-[0_20px_50px_rgba(74,222,128,0.3)] uppercase italic tracking-tighter"
            >
              ATIVAR MINHA NOVA BIOLOGIA
            </a>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-green-400/5 blur-3xl rounded-full animate-pulse"></div>
            <div className="bg-slate-900 border border-white/10 p-3 rounded-[3.5rem] shadow-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" className="rounded-[2.8rem] grayscale-50 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-1000" alt="Habit Engineering" />
               <div className="p-8 flex items-center justify-between">
                  <div>
                    <p className="text-green-400 font-black text-2xl uppercase italic tracking-tighter">EFICIÊNCIA TOTAL</p>
                    <p className="text-slate-500 font-bold uppercase text-[9px] tracking-widest opacity-60">Status: Sistema Impregnado</p>
                  </div>
                  <Trophy size={40} className="text-green-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-40 px-4 relative bg-slate-950">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-green-400 text-slate-950 inline-flex items-center gap-4 px-8 py-3 rounded-full text-[10px] font-black mb-10 shadow-[0_0_30px_rgba(74,222,128,0.3)] border border-green-500/20 italic uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2"><Timer size={14} /> EXPIRA EM:</span>
            <CountdownTimer />
            <span className="bg-slate-950/20 px-2 py-0.5 rounded ml-2">80% OFF</span>
          </div>
          
          <h2 className="text-6xl md:text-[110px] font-black mb-12 uppercase italic leading-none tracking-tighter">O Upgrade <br /><span className="text-green-400">Definitivo.</span></h2>
          
          <div className="bg-slate-900/60 backdrop-blur-3xl border-2 border-green-400/30 p-10 md:p-20 rounded-[4rem] shadow-[0_40px_120px_rgba(34,197,94,0.25)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Zap size={200} className="text-green-400" />
            </div>

            <div className="mb-14 relative z-10">
              <span className="text-slate-600 line-through text-2xl font-black opacity-50 italic tracking-tighter">R$ 97,00</span>
              <div className="flex items-center justify-center gap-2 mb-4 italic">
                <span className="text-4xl font-black text-green-500">R$</span>
                <span className="text-[120px] md:text-[150px] font-black text-white leading-none tracking-tighter">18<span className="text-5xl text-green-500">,80</span></span>
              </div>
              <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[11px] italic mb-2">Um investimento único. Sem mensalidades.</p>
              <p className="text-green-400/80 font-bold text-xs uppercase tracking-widest italic animate-pulse">Preço de um café por uma vida de disciplina.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-12 max-w-2xl mx-auto border-y border-white/5 py-10 relative z-10">
              {[
                "Framework HabitEng Completo",
                "Guia de Design de Ambiente",
                "Protocolo de Atrito Zero",
                "Bônus: Comunidade de Elite"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <CheckCircle2 className="text-green-400 group-hover:scale-125 transition" size={18} />
                  <span className="font-black text-[11px] uppercase tracking-widest text-slate-300 italic">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href={KIWIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button shimmer-effect animate-pulse-tempting flex w-full text-slate-950 py-8 rounded-[2.5rem] text-2xl font-black items-center justify-center transition shadow-[0_20px_60px_rgba(74,222,128,0.5)] uppercase italic tracking-tighter hover:scale-[1.02] active:scale-95"
            >
              BAIXAR PROTOCOLO IMEDIATAMENTE
            </a>
            
            <div className="mt-14 flex flex-wrap items-center justify-center gap-10 opacity-50">
               <div className="flex items-center gap-2">
                  <Lock size={16} className="text-green-400" /> <span className="text-[9px] font-black uppercase tracking-[0.3em] italic">Transação 100% Criptografada</span>
               </div>
               <div className="flex items-center gap-5 grayscale brightness-150">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Pix_logo.svg" alt="Pix" className="h-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-7" />
               </div>
            </div>
          </div>
          
          {/* Enhanced Guarantee Section */}
          <div className="mt-20 p-10 md:p-16 border-2 border-dashed border-white/10 rounded-[3.5rem] bg-slate-900/40 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/5 blur-[60px] rounded-full group-hover:bg-green-400/10 transition duration-1000"></div>
            
            <div className="flex flex-col items-center gap-8 relative z-10">
              <div className="relative">
                <ShieldCheck size={100} className="text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.7)] animate-pulse" />
                <BadgeCheck size={38} className="text-slate-950 fill-green-400 absolute -bottom-2 -right-2 border-4 border-slate-900 rounded-full" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                  GARANTIA DE <span className="text-green-400">SATISFAÇÃO BLINDADA</span>
                </h3>
                <p className="text-slate-300 text-lg md:text-2xl font-medium italic max-w-3xl mx-auto leading-tight">
                  Seu sucesso é a nossa única métrica. Você tem <span className="text-white font-bold underline decoration-green-500/50">7 dias de teste incondicional</span> para sentir a ciência agindo na sua rotina.
                </p>
                <div className="h-px w-24 bg-green-500/30 mx-auto my-6"></div>
                <p className="text-slate-400 font-black uppercase text-[11px] tracking-[0.4em] leading-relaxed max-w-2xl mx-auto">
                  Se você não sentir que sua consistência deu um salto quântico, basta um único clique para receber <span className="text-green-400">100% do seu investimento de volta</span>. O risco é 100% nosso. Sua segurança é prioridade máxima.
                </p>
                <div className="flex items-center justify-center gap-6 mt-8">
                   <div className="flex items-center gap-2 bg-slate-950/40 px-4 py-2 rounded-xl border border-white/5">
                      <Lock size={14} className="text-green-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest italic">Pagamento Seguro</span>
                   </div>
                   <div className="flex items-center gap-2 bg-slate-950/40 px-4 py-2 rounded-xl border border-white/5">
                      <ShieldCheck size={14} className="text-green-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest italic">Acesso Imediato</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-4 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-24 uppercase italic tracking-tighter leading-none italic">Resultados <span className="text-green-400">Mensuráveis.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lucas M.", role: "Advogado Sênior", text: "O HabitEng mudou meu jogo. Não gasto mais força de vontade para ir treinar, o ambiente faz isso por mim." },
              { name: "Carolina V.", role: "Founder & CEO", text: "Simples, direto e altamente eficaz. É engenharia pura aplicada ao comportamento humano." },
              { name: "Gabriel S.", role: "Engenheiro", text: "Eliminei a fricção e hoje treino no piloto automático. O investimento mais inteligente do meu ano." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/20 p-10 rounded-[3rem] border border-white/5 hover:bg-slate-900/40 transition-all duration-700 shadow-xl">
                <div className="flex gap-1 text-green-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed font-medium text-base opacity-90">"{item.text}"</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img src={`https://i.pravatar.cc/150?u=user${i+10}`} alt={item.name} className="grayscale brightness-110" />
                  </div>
                  <div>
                    <div className="font-black text-white uppercase text-xs tracking-widest italic">{item.name}</div>
                    <div className="text-[9px] text-green-500 font-black uppercase tracking-[0.2em]">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Zap className="text-green-400 fill-green-400" size={28} />
              <span className="font-outfit font-black text-xl tracking-tighter uppercase italic">Habit<span className="text-green-400">Eng</span> Systems</span>
            </div>
            <p className="text-slate-600 text-[10px] max-w-xs font-black uppercase tracking-[0.2em] italic">
              Performance Humana por Design. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
             <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] italic">
              <a href="#" className="hover:text-green-400 transition">Políticas</a>
              <a href="#" className="hover:text-green-400 transition">Privacidade</a>
              <a href="#" className="hover:text-green-400 transition">Suporte VIP</a>
            </div>
            <p className="text-slate-800 text-[9px] font-black uppercase tracking-[0.5em] italic">
              © 2025 HabitEng Lab. Desenvolvido para Vencedores.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
