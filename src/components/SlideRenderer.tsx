import React, { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Video, 
  MessageSquare, 
  Bell, 
  Radio, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Clock, 
  Volume2, 
  Share2, 
  Smartphone, 
  ExternalLink,
  Milestone,
  Compass,
  ArrowRight,
  Info
} from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";
import SmartphoneMockup from "./SmartphoneMockup";
import AssaiLogo from "./AssaiLogo";

interface SlideRendererProps {
  slide: any;
  isActive?: boolean;
}

export default function SlideRenderer({ slide, isActive = true }: SlideRendererProps) {
  const [selectedPushId, setSelectedPushId] = useState(1);
  const [storiesFase, setStoriesFase] = useState<"amanha" | "hoje">("amanha");
  const [storiesSubFase, setStoriesSubFase] = useState<"pre-jogo" | "pos-jogo">("pre-jogo");
  const [activeCronogramaDay, setActiveCronogramaDay] = useState<"both" | "24" | "25">("both");
  const [selectedStickerIdx, setSelectedStickerIdx] = useState(0);

  // Render slides dynamically based on ID
  switch (slide.id) {
    case "capa":
      return (
        <div className="flex flex-col items-center justify-center text-center py-10 px-4 md:py-20 h-full relative overflow-hidden" id="slide-capa">
          {/* Glowing brand orbits background */}
          <div className="absolute inset-0 bg-radial-gradient from-blue-900/45 via-transparent to-transparent opacity-40 select-none pointer-events-none" />
          <div className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full bg-[#FF7300] opacity-10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#FFAA00] opacity-10 blur-3xl" />

          {/* Symmetrical framing badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF7300]/15 border border-[#FF7300]/30 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold text-[#ffffff] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF7300] animate-pulse"></span>
            Planejamento Estratégico 360º
          </div>

          <div className="scale-125 transform transition-transform duration-500 hover:scale-130 mb-8 flex justify-center">
            <AssaiLogo showText={true} light={true} className="text-3xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-[#FFDC00] mt-4 mb-2 drop-shadow-md">
            {slide.title}
          </h1>

          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-wide uppercase max-w-2xl px-6 py-2 border-y border-[#FF7300]/30 mt-2">
            {slide.subtitle}
          </h2>

          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            {slide.description}
          </p>

          <div className="flex items-center justify-center gap-6 mt-12 text-xs font-mono text-slate-400 border border-slate-700/40 bg-slate-900/40 px-6 py-3 rounded-xl backdrop-blur-xs">
            <div className="flex items-center gap-1.5 border-r border-slate-800 pr-5">
              <Calendar className="w-4 h-4 text-[#FF7300]" />
              <span>DATA-CHAVE: 25 de Junho</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFAA00]" />
              <span>Ações: 24 & 25 de Junho</span>
            </div>
          </div>
        </div>
      );

    case "ecossistema":
      return (
        <div className="space-y-6" id="slide-ecossistema">
          <div className="border-l-4 border-[#FF7300] pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 capitalize uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-4xl font-light">
            {slide.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {slide.pillars.map((pillar: any, idx: number) => {
              const isDigital = pillar.accent === "digital";
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl p-6 border transition-all relative overflow-hidden flex flex-col justify-between ${
                    isDigital 
                      ? "bg-slate-900/60 border-blue-900/60 hover:border-blue-700/60 shadow-xl shadow-blue-950/20" 
                      : "bg-[#002f66]/30 border-orange-950/60 hover:border-orange-900/60 shadow-xl shadow-orange-950/10"
                  }`}
                  id={`pillar-${idx}`}
                >
                  {/* Decorative corner tag */}
                  <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full blur-xl opacity-20 ${
                    isDigital ? "bg-cyan-400" : "bg-[#FF7300]"
                  }`} />

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isDigital ? "bg-cyan-500/10 text-cyan-400" : "bg-[#FF7300]/10 text-[#FF7300]"
                      }`}>
                        {isDigital ? <Smartphone className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                      </div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-white">
                        {pillar.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-0.5">Foco Estratégico</span>
                        <p className="text-sm font-semibold text-slate-100">{pillar.foco}</p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">Canais Atuantes</span>
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.canais.map((canal: string, cIdx: number) => (
                            <span 
                              key={cIdx} 
                              className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
                                isDigital 
                                  ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/15" 
                                  : "bg-[#FF7300]/10 text-[#FF7300] border border-[#FF7300]/15"
                              }`}
                            >
                              {canal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/40">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">Papel na Jornada</span>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      {pillar.papel}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

    case "facebook":
      return (
        <div className="space-y-6" id="slide-facebook">
          <div className="border-l-4 border-[#FFAA00] pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left Strategic Column */}
            <div className="space-y-6 flex flex-col justify-between">
              
              {/* Direcionamento Estratégico */}
              <div className="bg-[#002f66]/20 border border-slate-800/60 rounded-2xl p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/40 rounded-xl text-blue-400 flex-shrink-0 mt-0.5">
                    <Facebook className="w-5 h-5 fill-blue-400 stroke-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-md">Direcionamento Estratégico</h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1">{slide.direcionamentoEstrategico}</p>
                  </div>
                </div>
              </div>

              {/* Linha Editorial / Copys de Campanha */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 space-y-4 flex-grow flex flex-col justify-center">
                <h4 className="text-xs font-bold uppercase text-[#FFAA00] tracking-widest flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#FFAA00]" /> Editorial de Campanha (Copywriting)
                </h4>
                
                <div className="space-y-3 mt-1">
                  <div className="bg-[#003674]/30 rounded-xl p-3.5 border border-blue-900/40">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-300 px-2.5 py-0.5 bg-blue-900/50 rounded-full font-bold">
                        Fase {slide.linhaEditorial.faseAmanha.fase} ({slide.linhaEditorial.faseAmanha.data})
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">Expectativa</span>
                    </div>
                    <p className="text-xs italic text-slate-200 font-mono leading-relaxed bg-slate-950/40 p-2.5 rounded-lg border border-slate-900">
                      {slide.linhaEditorial.faseAmanha.headline}
                    </p>
                  </div>

                  <div className="bg-[#FF7300]/10 rounded-xl p-3.5 border border-[#FF7300]/15">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-100 px-2.5 py-0.5 bg-[#FF7300]/30 rounded-full font-bold">
                        Fase {slide.linhaEditorial.faseHoje.fase} ({slide.linhaEditorial.faseHoje.data})
                      </span>
                      <span className="text-[10px] text-[#FFDC00] font-mono">Urgência Máxima</span>
                    </div>
                    <p className="text-xs italic text-slate-200 font-mono leading-relaxed bg-slate-950/40 p-2.5 rounded-lg border border-slate-900">
                      {slide.linhaEditorial.faseHoje.headline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direcionamento Visual (Moved to the left column in place of Por que funciona neles?) */}
              <div className="bg-gradient-to-br from-[#003674] to-[#002f66] border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-inner space-y-3 flex-shrink-0">
                <span className="absolute top-3 right-3 text-[8px] uppercase tracking-widest font-mono text-[#FF7300] bg-[#FF7300]/15 px-2.5 py-0.5 rounded border border-[#FF7300]/25 font-bold">
                  Visual Canvas
                </span>

                <h4 className="text-xs font-bold uppercase text-white tracking-widest flex items-center gap-1 font-mono">
                  Direcionamento Visual
                </h4>

                <div className="flex flex-wrap gap-2 pt-1">
                  {slide.direcionamentoVisual.map((item: string, dIdx: number) => (
                    <span 
                      key={dIdx} 
                      className="text-[11px] bg-slate-950/60 text-slate-200 px-3 py-1 bg-clip-padding rounded-lg border border-slate-800/80 flex items-center gap-1.5 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300]"></span>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Simulated retail offer badge */}
                <div className="mt-3 bg-gradient-to-r from-[#FF7300] to-[#FFDC00] rounded-xl p-3.5 text-[#004696] font-display font-black text-center select-none shadow-md">
                  <p className="text-[8px] tracking-widest uppercase font-extrabold">Formato Concorrente Tradicional</p>
                  <p className="text-xl tracking-tight leading-none uppercase mt-0.5 font-black">PREÇO ULTRA HARDSell</p>
                </div>
              </div>

            </div>

            {/* Right Strategic & Reference Visual Column */}
            <div className="space-y-6 flex flex-col justify-between">
              
              {/* Commercial reference images (Now larger, uncropped, filling space) */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 space-y-4 flex-grow flex flex-col justify-between">
                <div className="border-b border-slate-800/50 pb-2">
                  <h4 className="text-xs font-bold uppercase text-[#FFAA00] tracking-widest font-mono flex items-center gap-1.5">
                    <Facebook className="w-4 h-4 text-blue-400 fill-blue-400 stroke-none" /> Postagens de Referência Comercial
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-4 flex-grow items-center">
                  {[
                    "https://i.imgur.com/oKSOLVJ.png",
                    "https://i.imgur.com/lTS4Jlq.png",
                    "https://i.imgur.com/r99Pc8X.png",
                    "https://i.imgur.com/4lYEbsy.png"
                  ].map((url, imgIdx) => (
                    <div key={imgIdx} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-slate-700/80">
                      {/* Mock FB Header */}
                      <div className="px-3 py-1.5 bg-slate-900/60 flex items-center gap-1.5 justify-between border-b border-slate-850">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-sans font-black text-white selection:bg-transparent">
                            f
                          </div>
                          <span className="text-[9px] font-sans font-extrabold text-white">Ref {imgIdx + 1}</span>
                        </div>
                        <span className="text-[7px] text-slate-400 bg-slate-950 px-1.5 py-0.2 rounded border border-slate-800 font-mono font-bold uppercase">Varejo</span>
                      </div>
                      
                      {/* Image block without cropping info (Using object-contain bg-slate-950) */}
                      <div className="bg-slate-950 flex items-center justify-center overflow-hidden h-[120px] sm:h-[135px] relative group p-1">
                        <img 
                          src={url} 
                          alt={`Referência FB ${imgIdx + 1}`} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Mock FB Actions Footer */}
                      <div className="px-3 py-1 bg-slate-900/60 flex items-center justify-between text-[8px] text-slate-400 border-t border-slate-850 font-sans font-bold">
                        <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1">👍 Likes</span>
                        <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1">💬 Comentar</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive insight card (Moved securely under Commercial reference images) */}
              <div className="bg-[#FFAA00]/10 border border-[#FFAA00]/20 rounded-2xl p-5 space-y-3 flex-shrink-0">
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#FFAA00] tracking-widest mb-1 font-mono">
                    Por que funciona neles?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {slide.whyWorks.text}
                  </p>
                </div>

                <div className="bg-[#002f66]/40 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300]"></span>
                    <h5 className="text-[11px] font-bold uppercase text-white tracking-widest font-mono">O Toque Assaí</h5>
                  </div>
                  <p className="text-xs italic text-slate-300 leading-relaxed">
                    {slide.whyWorks.toqueAssai}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      );

    case "instagram-tiktok":
      return (
        <div className="space-y-6" id="slide-instagram-tiktok">
          <div className="border-l-4 border-cyan-400 pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Strategic direction & formats */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              {/* Strategic overview */}
              <div className="bg-[#002f66]/20 border border-slate-800/60 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-xl text-pink-400 flex-shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm md:text-base">Instagram e TikTok</h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1">
                      {slide.direcionamentoEstrategico}
                    </p>
                  </div>
                </div>
              </div>

              {/* Formatos list */}
              <div className="space-y-3 flex-grow">
                {slide.formatos.map((formato: any, fIdx: number) => (
                  <div key={fIdx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
                    <h4 className="font-display font-semibold text-sm text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {formato.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {formato.ideia}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive script previews */}
            <div className="lg:col-span-6 bg-slate-950/40 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                  <h4 className="text-xs font-bold uppercase text-slate-300 tracking-widest flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-[#FF7300]" /> Narrativas Planejadas
                  </h4>
                  <span className="text-[10px] uppercase font-mono text-[#FFAA00] tracking-wider font-bold">Videos & Reels</span>
                </div>

                <div className="space-y-4">
                  {slide.fases.map((fase: any, fSIdx: number) => (
                    <div 
                      key={fSIdx} 
                      className="bg-[#002f66]/20 border border-slate-800/60 p-5 rounded-2xl relative hover:border-slate-700/80 transition-all flex flex-col sm:flex-row gap-5"
                      id={`narrative-fase-${fSIdx}`}
                    >
                      {/* Left: Text Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span 
                              className="text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded border"
                              style={{ borderColor: `${fase.badgeColor}25`, color: fase.badgeColor, backgroundColor: `${fase.badgeColor}10` }}
                            >
                              {fase.badge}
                            </span>
                            <h5 className="font-display font-bold text-xs text-white">
                              {fase.nome}
                            </h5>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                            {fase.desc}
                          </p>
                        </div>

                        {/* Interactive CTAs as premium buttons */}
                        <div className="space-y-2 mt-2">
                          <a 
                            href={fase.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-[#FF7300] hover:bg-[#FF7300]/90 text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95 leading-none"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Ver Referência de Vídeo
                          </a>
                          <a 
                            href={fase.roteiroLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-all border border-slate-700 active:scale-95 leading-none"
                          >
                            <Video className="w-3.5 h-3.5 text-[#FFAA00]" />
                            Roteiro Comercial
                          </a>
                        </div>
                      </div>

                      {/* Right: Phone mockup frame showing respective image in 9:16 layout */}
                      <div className="w-[130px] h-[231px] bg-slate-950 rounded-2xl border-[3px] border-slate-800 relative overflow-hidden flex-shrink-0 self-center shadow-2xl flex flex-col justify-between p-1.5 group/phone">
                        {/* Speaker line */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-slate-800 rounded-full z-10" />
                        
                        {/* Reference Image Container */}
                        <div className="absolute inset-0 z-0 bg-slate-900 flex items-center justify-center">
                          <img 
                            src={fase.refImage} 
                            alt={`Referência ${fase.nome}`} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/phone:scale-105"
                          />
                        </div>

                        {/* Top App indicators overlay */}
                        <div className="absolute top-2 left-1.5 right-1.5 flex justify-between items-center z-10 text-[6px] text-white/70 font-mono">
                          <span>09:41</span>
                          <span className="bg-black/30 px-1 py-0.2 rounded-sm text-[#FF7300] font-bold uppercase scale-90">REF</span>
                        </div>

                        {/* Mini brand badge bottom overlay */}
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/60 backdrop-blur-xs py-1 px-1.5 rounded-lg border border-white/5 z-10 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-[#004696] flex items-center justify-center p-0.2 overflow-hidden border border-white/20">
                              <AssaiLogo showText={false} className="w-2 h-2" />
                            </div>
                            <span className="text-[6.5px] font-sans font-bold text-white tracking-tight truncate max-w-[50px]">Referência</span>
                          </div>
                          <span className="text-[5.5px] text-[#FFAA00] font-mono font-bold tracking-tighter">9:16</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra advice marker */}
              <div className="mt-6 bg-[#FF7300]/10 border border-[#FF7300]/15 rounded-xl p-3 text-center text-xs text-slate-200">
                Foco no visual nativo e dinamismo real, sem poluição de logos e banners pesados.
              </div>
            </div>
          </div>
        </div>
      );

    case "stories": {
      // Determine active states dynamically based on user selections
      const activeText = storiesFase === "amanha"
        ? (storiesSubFase === "pre-jogo" 
            ? "É Amanhã! 25/06 | Preços Imbatíveis para encher o carrinho!"
            : "Os precinhos do Assaí continuam jogando no ataque! | Prepare-se para amanhã!")
        : "É hoje! 25/06 | Preços ainda mais baixos! Corra pro Assaí e aproveite!";

      const activeCta = storiesFase === "amanha"
        ? "Veja a loja mais próxima de você!"
        : "Confira as ofertas";

      const activeUrl = storiesFase === "amanha"
        ? "assai.com.br/nossas-lojas"
        : "assai.com.br/ofertas";

      return (
        <div className="space-y-6" id="slide-stories">
          <div className="border-l-4 border-pink-400 pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Details side (7 Columns / left) */}
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
              
              {/* Strategic overview */}
              <div className="bg-[#002f66]/20 border border-slate-800/60 rounded-2xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-xl text-pink-400 flex-shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm md:text-base">Direcionamento Estratégico</h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1">
                      {slide.direcionamentoEstrategico}
                    </p>
                  </div>
                </div>
              </div>

              {/* Formato requirement */}
              <div className="bg-[#001733]/30 border border-slate-800/40 rounded-2xl p-4 space-y-1.5 shadow">
                <h4 className="text-xs font-bold uppercase text-[#FF7300] tracking-widest flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#FFAA00]" /> Formação Obrigatória do Encarte
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {slide.formato}
                </p>
              </div>

              {/* Visual Reference block - requested screenshot by user */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-mono text-[#FF7300] bg-[#FF7300]/10 px-3 py-1 rounded border border-[#FF7300]/25 inline-block font-bold">
                  Referência Visual de Campanha
                </span>
                <div className="w-full h-[290px] rounded-xl border border-slate-800 overflow-hidden bg-slate-950/90 p-3 flex items-center justify-center relative shadow-inner group">
                  <img 
                    src="https://i.imgur.com/Q4CIJZs.png" 
                    alt="Referência Visual Stories" 
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Selector buttons for interactive story preview */}
              <div className="space-y-2.5 p-1">
                <div className="flex items-center gap-2 bg-slate-950/40 p-1.5 rounded-xl border border-slate-800" id="stories-tabs">
                  <button
                    onClick={() => {
                      setStoriesFase("amanha");
                      setStoriesSubFase("pre-jogo");
                    }}
                    className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      storiesFase === "amanha"
                        ? "bg-[#004696] text-white border border-[#FF7300]/30 shadow-md"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    id="tab-story-amanha"
                  >
                    Fase "É Amanhã" (24/06)
                  </button>
                  <button
                    onClick={() => setStoriesFase("hoje")}
                    className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      storiesFase === "hoje"
                        ? "bg-[#004696] text-white border border-[#FF7300]/30 shadow-md"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    id="tab-story-hoje"
                  >
                    Fase "É Hoje" (25/06)
                  </button>
                </div>

                {/* Sub-fase togglers for June 24 */}
                {storiesFase === "amanha" && (
                  <div className="flex items-center gap-2 bg-slate-900/40 p-1 rounded-xl border border-slate-805 transition-all">
                    <button
                      onClick={() => setStoriesSubFase("pre-jogo")}
                      className={`flex-1 text-center py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all tracking-wide cursor-pointer ${
                        storiesSubFase === "pre-jogo"
                          ? "bg-[#FF7300] text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      🕒 Pré-Jogo (Manhã)
                    </button>
                    <button
                      onClick={() => setStoriesSubFase("pos-jogo")}
                      className={`flex-1 text-center py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all tracking-wide cursor-pointer ${
                        storiesSubFase === "pos-jogo"
                          ? "bg-[#FF7300] text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      🌙 Pós-Jogo (Noite)
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Story Mockup side (5 Columns / right) - EXACT 9:16 Ratio */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-[240px] h-[426px] bg-slate-950 rounded-[36px] p-3 shadow-2xl border-[6px] border-slate-800 flex flex-col justify-between overflow-hidden" id="instagram-story-mock">
                
                {/* Top notch line */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-900 mr-2"></div>
                  <div className="w-6 h-0.5 bg-slate-900 rounded-full"></div>
                </div>

                {/* Top story header */}
                <div className="absolute top-5 left-4 right-4 z-10 space-y-1">
                  {/* Story Segments indicators */}
                  <div className="flex gap-1 h-0.5 w-full bg-slate-800">
                    <div className="flex-1 bg-white h-full"></div>
                    <div className={`flex-1 h-full ${storiesFase === "hoje" ? "bg-white" : "bg-slate-600"}`}></div>
                  </div>
                  
                  {/* User Profile avatar info */}
                  <div className="flex items-center justify-between text-[10px] text-white font-sans mt-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5.5 h-5.5 rounded-full border border-pink-500 p-0.2 bg-[#004696] overflow-hidden flex items-center justify-center">
                        <AssaiLogo showText={false} className="w-4.5 h-4.5" />
                      </div>
                      <span className="font-bold tracking-tight text-[8px]">assaiatacadista</span>
                      <span className="text-white/60 text-[7px]">12 h</span>
                    </div>
                  </div>
                </div>

                {/* Content background with visual layout */}
                <div className="absolute inset-0 z-0 flex flex-col justify-center items-center p-4 pt-16 text-center select-none"
                     style={{
                       backgroundImage: storiesFase === "amanha" 
                         ? "linear-gradient(135deg, #001633 0%, #004696 100%)"
                         : "linear-gradient(135deg, #740000 0%, #FF7300 100%)"
                     }}>
                  
                  {/* Visual sticker placeholder */}
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20 animate-pulse">
                    <AssaiLogo showText={false} className="w-10 h-10" />
                  </div>

                  <p className="text-[9px] uppercase tracking-widest text-[#FFDC00] font-extrabold font-mono">
                    {storiesFase === "amanha" 
                      ? (storiesSubFase === "pre-jogo" ? "24/06 • PRÉ-JOGO" : "24/06 • PÓS-JOGO") 
                      : "25/06 • É HOJE"}
                  </p>

                  <h3 className="text-white font-display font-black text-xs leading-snug mt-1.5 max-w-[170px] uppercase tracking-tight">
                    {activeText}
                  </h3>
                </div>

                {/* Bottom Story link sticker */}
                <div className="mt-auto w-full text-center pb-3 z-10 px-2 space-y-1">
                  <div className="inline-flex flex-col items-center gap-1 w-full">
                    {/* The Instagram Link Sticker Style */}
                    <a 
                      href={`https://${activeUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 rounded-full py-1.8 px-3 text-[8px] font-extrabold shadow-lg flex items-center justify-center gap-1 w-fit border border-slate-200 transition-transform active:scale-95 hover:bg-slate-50 leading-none"
                      style={{ color: "#004696" }}
                    >
                      <ExternalLink className="w-3 h-3 text-[#FF7300]" />
                      {activeCta}
                    </a>
                    
                    <span className="text-[7px] text-white/70 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-full inline-block font-mono">
                      Sticker de Link {activeUrl}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }

    case "whatsapp":
      return (
        <div className="space-y-6" id="slide-whatsapp">
          <div className="border-l-4 border-emerald-400 pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left Column: Strategic guidelines and Action 1 Audio */}
            <div className="space-y-6 flex flex-col justify-between">
              {/* Direcionamento Estratégico */}
              <div className="bg-[#002f66]/20 border border-slate-800/60 rounded-2xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5 fill-emerald-400 stroke-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm md:text-base">Direcionamento Estratégico</h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1">
                      {slide.direcionamentoEstrategico}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action 1 Audio Card with Mass Broadcast logic */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#FF7300] tracking-widest mb-3 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-4 h-4 text-[#FFAA00]" /> Ação 1 | Áudio de Disparo em Massa
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {slide.acoes[0].funcionamento}
                  </p>
                </div>
                <AudioVisualizer roteiro={slide.acoes[0].audioRoteiro} />
              </div>
            </div>

            {/* Right Column: Action 2 - Sticker Pack with 9:16 phone mockup preview */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold uppercase text-[#FFAA00] tracking-widest mb-1.5 flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-4 h-4 text-[#FFAA00]" /> Ação 2 | Sticker Pack do Assaí
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {slide.acoes[1].funcionamento}
                </p>
              </div>

              {/* Interactive Phone Simulation with exact 9:16 constraint */}
              <div className="mt-5 space-y-4">
                {/* 9:16 Smartphone Mockup */}
                <div className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[250px] aspect-[9/16] bg-[#0b141a]/95 rounded-[36px] ring-8 ring-slate-800/90 border-[5px] border-slate-950 p-3.5 flex flex-col justify-between overflow-hidden shadow-2xl">
                    {/* Topnotch camera/speaker line to emphasize smartphone look */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-slate-950 rounded-b-xl z-20 flex items-center justify-center gap-1">
                      <div className="w-8 h-[3px] bg-slate-800 rounded-full" />
                      <div className="w-[5px] h-[5px] bg-slate-800 rounded-full" />
                    </div>

                    {/* WhatsApp mock header */}
                    <div className="flex items-center gap-1.5 pb-2 pt-2.5 border-b border-slate-800/50 z-10">
                      <div className="w-5 h-5 rounded-full bg-emerald-700 flex items-center justify-center text-[9px] font-sans font-black text-white">
                        C
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9.5px] font-bold text-white truncate leading-none">Grupo de Negócios</p>
                        <span className="text-[7px] text-emerald-400 font-medium pb-0.5 block">online</span>
                      </div>
                    </div>

                    {/* Chat Bubble area inside 9:16 screen */}
                    <div className="flex-1 flex flex-col justify-end space-y-3 pb-2 pt-3 overflow-hidden">
                      {/* Client message bubble */}
                      <div className="bg-[#202c33] text-[9.5px] text-slate-100 p-2 rounded-xl rounded-tl-none self-start max-w-[90%] leading-relaxed border border-slate-700/20 shadow-sm">
                        <span className="text-[#53bdeb] font-bold text-[7.5px] block leading-none mb-1">Roberto Pizzaria:</span>
                        Tem preço bom de farinha e calabresa pro Dia Imbatível?
                      </div>

                      {/* Animated WA Sticker sent bubble */}
                      <div className="self-end align-end flex flex-col items-end">
                        <div className="filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.45)] transform max-w-[130px] animate-fade-in hover:scale-105 transition-transform active:scale-95 cursor-pointer">
                          <div className="bg-[#125ba3] border-[3px] border-white text-white font-black text-[9.5px] uppercase tracking-wide px-3.5 py-3 rounded-xl flex flex-col items-center justify-center min-w-[110px] shadow-sm select-none relative">
                            {selectedStickerIdx === 0 && (
                              <>
                                <span className="text-xl mb-0.5">🛒</span>
                                <span className="text-[8.5px] text-center font-extrabold leading-none mt-0.5">Abastecido com o</span>
                                <span className="text-[#FFDC00] font-sans text-[9px] leading-tight font-black mt-0.5">Imbatível!</span>
                              </>
                            )}
                            {selectedStickerIdx === 1 && (
                              <>
                                <span className="text-xl mb-0.5">🏃‍♂️</span>
                                <span className="text-[8.5px] text-center font-extrabold leading-none mt-0.5">Correndo pro</span>
                                <span className="text-[#FFDC00] font-sans text-[9px] leading-tight font-black mt-0.5">Assaí!</span>
                              </>
                            )}
                            {selectedStickerIdx === 2 && (
                              <>
                                <span className="text-xl mb-0.5">🔥</span>
                                <span className="text-[8.5px] text-center font-extrabold leading-none mt-0.5">Preço baixo assim</span>
                                <span className="text-[#FFDC00] font-sans text-[9px] leading-tight font-black mt-0.5">só hoje!</span>
                              </>
                            )}
                            {/* Sticker stamp brand label */}
                            <div className="absolute -bottom-1 -right-1 bg-[#FF7300] text-white text-[4.5px] px-1.2 py-0.2 rounded-full border border-white font-bold uppercase tracking-tighter">
                              Assaí
                            </div>
                          </div>
                        </div>
                        <span className="text-[7px] text-[#8696a0] font-mono mt-0.5 flex items-center gap-0.5">
                          10:25 <span className="text-[#53bdeb]">✓✓</span>
                        </span>
                      </div>
                    </div>

                    {/* Bottom Phone Indicator pill */}
                    <div className="w-16 h-1 bg-slate-700/80 rounded-full mx-auto mt-0.5 z-20" />
                  </div>
                </div>

                {/* Sticker Buttons underneath phone preview */}
                <div className="space-y-2 pt-1 border-t border-slate-800/40">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400 block text-center">
                    Toque abaixo para alterar a figurinha na simulação:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {slide.acoes[1].frases.map((frase: string, idx: number) => {
                      const icons = ["🛒", "🏃‍♂️", "🔥"];
                      const isSel = selectedStickerIdx === idx;
                      const activeClasses = [
                        "bg-[#004696]/40 border-[#FF7300] text-white ring-1 ring-[#FF7300]/25 shadow-md scale-[1.01]",
                        "bg-[#004696]/44 border-pink-500 text-white ring-1 ring-pink-500/25 shadow-md scale-[1.01]",
                        "bg-[#004696]/44 border-[#FFAA00] text-white ring-1 ring-[#FFAA00]/25 shadow-md scale-[1.01]"
                      ];
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedStickerIdx(idx)}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                            isSel ? activeClasses[idx % 3] : "bg-slate-950/40 border-slate-850 text-slate-400 hover:bg-slate-900/40 hover:text-slate-200"
                          }`}
                        >
                          <span className="text-base mb-1">{icons[idx % 3]}</span>
                          <span className="text-[9px] font-bold tracking-tight leading-tight block truncate w-full">
                            {frase}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );

    case "push":
      return (
        <div className="space-y-6" id="slide-push">
          <div className="border-l-4 border-amber-400 pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Text description side */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#002f66]/20 border border-slate-800/60 rounded-2xl p-5 space-y-4 h-full flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0 mt-0.5">
                    <Bell className="w-5 h-5 fill-amber-400 stroke-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm md:text-base">Gatilho de Impulso</h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1">
                      {slide.direcionamentoEstrategico}
                    </p>
                  </div>
                </div>
 
                <div className="pt-3 border-t border-slate-800/40">
                  <p className="text-xs font-semibold text-[#FFAA00] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF7300] flex-shrink-0 animate-pulse" />
                    <span className="leading-relaxed font-sans">{slide.metrica}</span>
                  </p>
                </div>
              </div>
            </div>
 
            {/* Embedded Interactive Smartphone */}
            <div className="lg:col-span-7 bg-slate-950/30 border border-slate-800/75 rounded-2xl p-5">
              <SmartphoneMockup 
                notifications={slide.ideias}
                selectedId={selectedPushId}
                onSelect={(id) => setSelectedPushId(id)}
              />
            </div>
          </div>
        </div>
      );

    case "retail-media-waze":
      return (
        <div className="space-y-6" id="slide-retail-media-waze">
          <div className="border-l-4 border-orange-500 pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {slide.secoes.map((secao: any, sIdx: number) => {
              const isRadio = sIdx === 0;
              return (
                <div 
                  key={sIdx} 
                  className="bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/60 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  id={`media-card-${sIdx}`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4 justify-between pb-3 border-b border-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isRadio ? "bg-orange-500/10 text-orange-400" : "bg-blue-500/10 text-blue-400"
                        }`}>
                          {isRadio ? <Radio className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                        </div>
                        <h3 className="font-display font-semibold text-white text-base md:text-lg">
                          {secao.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFAA00] font-bold">
                        {isRadio ? "Ponto de Venda" : "Trânsito"}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">Direcionamento Estratégico</span>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                          {secao.direcionamentoEstrategico}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">Formato de mídia</span>
                        <span className="inline-block text-[11px] font-semibold bg-slate-950/50 border border-slate-800 text-white px-3 py-1 rounded-full">
                          {secao.formato}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Announcement script preview area */}
                  <div className="mt-6 p-4 rounded-xl relative bg-slate-950/80 border border-slate-800/60 overflow-hidden">
                    <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-900">
                      <span className="text-[9px] uppercase tracking-widest font-mono text-[#FF7300] font-bold">
                        {isRadio ? "Script de Áudio (Locução)" : "Banner Waze Copy (Carro Parado)"}
                      </span>
                      {isRadio ? <Volume2 className="w-3.5 h-3.5 text-orange-400" /> : <MapPin className="w-3.5 h-3.5 text-blue-400" />}
                    </div>
                    <p className="text-xs italic text-slate-100 font-mono leading-relaxed">
                      {secao.roteiro}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

    case "cronograma":
      return (
        <div className="space-y-6" id="slide-cronograma">
          <div className="border-l-4 border-[#FFDC00] pl-4 py-1">
            <span className="text-[10px] tracking-widest font-mono text-slate-400 uppercase">{slide.category}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#FFDC00]">{slide.title}</h2>
          </div>

          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Acompanhe o fluxo coordenado e dinâmico de disparos de conteúdo planejado para maximizar a conversão durante as duas datas fundamentais do Dia Imbatível.
          </p>

          {/* Interactive view toggle for table */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/40 p-2 rounded-xl border border-slate-800 mb-2">
            <h4 className="text-xs font-bold uppercase text-[#FFAA00] tracking-widest pl-2">
              Visualizar Cronograma por Dia:
            </h4>
            
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setActiveCronogramaDay("both")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                  activeCronogramaDay === "both" ? "bg-[#FF7300] text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                id="cronograma-filter-all"
              >
                Geral (24 e 25)
              </button>
              <button 
                onClick={() => setActiveCronogramaDay("24")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                  activeCronogramaDay === "24" ? "bg-[#004696] text-white border border-[#FF7300]/30" : "text-slate-400 hover:text-slate-200"
                }`}
                id="cronograma-filter-24"
              >
                Dia 24/06 (Aquecimento)
              </button>
              <button 
                onClick={() => setActiveCronogramaDay("25")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                  activeCronogramaDay === "25" ? "bg-[#004696] text-white border border-[#FF7300]/30" : "text-slate-400 hover:text-slate-200"
                }`}
                id="cronograma-filter-25"
              >
                Dia 25/06 (Urgência)
              </button>
            </div>
          </div>

          {/* Symmetrical timeline table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md bg-slate-950/20" id="cronograma-table-container">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800/80 bg-slate-900/60 text-xs font-mono text-[#FFDC00] uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold">Canal / Plataforma</th>
                  {(activeCronogramaDay === "both" || activeCronogramaDay === "24") && (
                    <th className="py-3 px-4 font-semibold border-l border-slate-800/40">
                      Dia 24/06 (Expectativa e Aquecimento)
                    </th>
                  )}
                  {(activeCronogramaDay === "both" || activeCronogramaDay === "25") && (
                    <th className="py-3 px-4 font-semibold border-l border-slate-800/40">
                      Dia 25/06 (Conversão e Urgência Máxima)
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {slide.canais.map((item: any, idx: number) => (
                  <tr 
                    key={idx} 
                    className="border-b border-slate-800/50 hover:bg-[#002f66]/10 transition-colors text-xs md:text-sm"
                    id={`cronograma-row-${idx}`}
                  >
                    <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF7300]"></span>
                      {item.canal}
                    </td>

                    {(activeCronogramaDay === "both" || activeCronogramaDay === "24") && (
                      <td className="py-3.5 px-4 border-l border-slate-800/30">
                        <div className="space-y-1">
                          <p className="text-slate-200">{item.dia24.acao}</p>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#FFAA00] font-semibold bg-amber-500/10 px-2 py-0.5 rounded">
                            <Clock className="w-3 h-3" /> {item.dia24.hora}
                          </span>
                        </div>
                      </td>
                    )}

                    {(activeCronogramaDay === "both" || activeCronogramaDay === "25") && (
                      <td className="py-3.5 px-4 border-l border-slate-800/30">
                        <div className="space-y-1">
                          <p className="text-slate-200">{item.dia25.acao}</p>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#FF7300] font-semibold bg-orange-500/10 px-2 py-0.5 rounded">
                            <Clock className="w-3 h-3" /> {item.dia25.hora}
                          </span>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "conclusao":
      return (
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-16 px-4 h-full relative" id="slide-conclusao">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#FF7300] opacity-5 blur-3xl pointer-events-none" />

          {/* Symmetrical icon block */}
          <div className="w-20 h-20 bg-gradient-to-tr from-[#FF7300] to-[#FFAA00] rounded-3xl flex items-center justify-center text-slate-950 mb-8 shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300">
            <TrendingUp className="w-10 h-10" />
          </div>

          <h2 className="text-xs uppercase font-mono tracking-[0.25em] text-[#FFAA00] font-bold mb-3">
            {slide.category}
          </h2>

          <h3 className="text-2xl md:text-4xl font-display font-medium tracking-tight text-[#FFDC00] max-w-3xl leading-snug">
            "{slide.slogan}"
          </h3>

          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto mt-6 leading-relaxed font-light">
            {slide.conclusaoTexto}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-3xl">
            <div className="bg-[#002f66]/30 border border-slate-800/80 rounded-xl p-4">
              <span className="text-[10px] font-mono uppercase text-[#FFAA00] tracking-wider block mb-1">Canais On-line</span>
              <p className="text-sm font-semibold text-white">Audiência Qualificada</p>
            </div>
            <div className="bg-[#002f66]/30 border border-slate-800/80 rounded-xl p-4">
              <span className="text-[10px] font-mono uppercase text-[#FF7300] tracking-wider block mb-1">Gatilhos Diretos</span>
              <p className="text-sm font-semibold text-white">Urgência Próxima</p>
            </div>
            <div className="bg-[#002f66]/30 border border-slate-800/80 rounded-xl p-4">
              <span className="text-[10px] font-mono uppercase text-[#FFDC00] tracking-wider block mb-1">Conversão Fiel</span>
              <p className="text-sm font-semibold text-white">Resultados Reais</p>
            </div>
          </div>
        </div>
      );

    case "fechamento":
      return (
        <div className="flex flex-col items-center justify-center text-center py-12 md:py-20 px-4 h-full relative" id="slide-fechamento">
          <div className="scale-150 transform transition-transform duration-500 hover:scale-160 mb-10">
            <AssaiLogo showText={true} light={true} className="text-3xl" />
          </div>

          <p className="text-slate-400 font-mono text-xs tracking-wider uppercase mb-8">
            Dia 25 de Junho • Planejamento Integrado
          </p>

          <h2 className="text-2xl md:text-4xl font-display font-black text-[#FFDC00] uppercase tracking-wide">
            {slide.subtitle}
          </h2>

          <div className="mt-8 pt-6 border-t border-slate-800 w-64 mx-auto space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7300]">Apresentado por</p>
            <h3 className="font-display font-extrabold text-base tracking-widest text-[#fff]">
              {slide.parceiro}
            </h3>
            <a 
              href={`https://${slide.site}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors block underline underline-offset-4 mt-2"
            >
              {slide.site}
            </a>
          </div>

          <div className="mt-12 bg-slate-900/40 border border-slate-800/60 px-5 py-2.5 rounded-full text-xs text-slate-300 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Pronto para Execução
          </div>
        </div>
      );

    default:
      return (
        <div className="p-8 text-slate-400 text-center">
          Componente de slide não disponível.
        </div>
      );
  }
}
