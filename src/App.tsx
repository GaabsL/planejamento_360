import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Presentation, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  TrendingUp,
  MapPin,
  Bell
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { slidesData } from "./data";
import Header from "./components/Header";
import SlideRenderer from "./components/SlideRenderer";

export default function App() {
  const [viewMode, setViewMode] = useState<"slides" | "report">("slides");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const appContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for presentation controls
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (viewMode !== "slides") return;

    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      setCurrentIndex((prev) => Math.min(prev + 1, slidesData.length - 1));
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setCurrentIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setCurrentIndex(slidesData.length - 1);
    }
  }, [viewMode]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Fullscreen support API
  const toggleFullscreen = () => {
    if (!appContainerRef.current) return;
    
    if (!document.fullscreenElement) {
      appContainerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error("Error enabling fullscreen: ", err));
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
    // Scroll to top of slide viewport in slides mode
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, slidesData.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const currentSlide = slidesData[currentIndex];

  return (
    <div 
      ref={appContainerRef}
      className={`min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col selection:bg-[#FF7300] selection:text-white relative ${
        isFullscreen ? "overflow-y-auto" : "overflow-hidden"
      }`}
      id="app-root-container"
    >
      {/* Decorative background glow blobs from Professional Polish design */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFAA00]/10 rounded-full blur-[100px] -mr-40 -mb-40 pointer-events-none select-none z-0"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#FF7300]/5 rounded-full blur-[80px] -ml-32 pointer-events-none select-none z-0"></div>
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none select-none z-0"></div>

      {/* Brand Header with controls */}
      <Header 
        viewMode={viewMode}
        setViewMode={setViewMode}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        currentSlideNum={currentIndex + 1}
        totalSlides={slidesData.length}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10" id="layout-body-pane">
        
        {/* SIDE BAR NAVIGATION - Presenter Panel / Index */}
        <aside className="w-full lg:w-80 bg-slate-900/40 border-b lg:border-b-0 lg:border-r border-white/10 p-5 shrink-0 flex flex-col justify-between" id="presenter-sidebar">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2 font-display">
                <span className="w-1.5 h-4 bg-[#FF7300] rounded-xs"></span>
                Painel de Navegação
              </h3>
              <span className="text-[10px] font-mono text-[#FFAA00] font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                Páginas: {slidesData.length}
              </span>
            </div>

            {/* Quick list index */}
            <div className="space-y-2 max-h-[350px] lg:max-h-[calc(100vh-280px)] overflow-y-auto pr-1" id="sidebar-slide-items">
              {slidesData.map((slide, idx) => {
                const isActive = viewMode === "slides" ? idx === currentIndex : false;
                return (
                  <button
                    key={slide.id}
                    onClick={() => {
                      if (viewMode !== "slides") {
                        setViewMode("slides");
                      }
                      selectSlide(idx);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#004696] to-[#003674] text-white border border-[#FF7300]/50 shadow-md font-semibold"
                        : "hover:bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5"
                    }`}
                    id={`sidebar-slide-${slide.id}`}
                  >
                    {/* Circle sequence indicator */}
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5 ${
                      isActive 
                        ? "bg-[#FF7300] text-white" 
                        : "bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200"
                    }`}>
                      {slide.number}
                    </span>
                    
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] uppercase tracking-wider font-mono font-bold ${
                          isActive ? "text-[#FFDC00]" : "text-[#FF7300]"
                        }`}>
                          {slide.category}
                        </span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>}
                      </div>
                      <p className={`text-xs truncate ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {slide.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive footer tips widget inside sidebar */}
          <div className="mt-6 pt-4 border-t border-white/10 space-y-4 hidden lg:block" id="sidebar-footer-utils">
            <div className="bg-[#002f66]/20 border border-white/5 rounded-xl p-3.5 text-xs leading-relaxed text-slate-300">
              <span className="text-[#FF7300] font-bold uppercase block text-[10px] tracking-wider mb-1.5 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" /> Dica de Apresentador
              </span>
              Use as setas do teclado <span className="font-mono bg-slate-950 px-1 py-0.5 text-[#FFAA00] rounded text-[10px]">←</span> e <span className="font-mono bg-slate-950 px-1 py-0.5 text-[#FFAA00] rounded text-[10px]">→</span> ou Barra de Espaço para navegar rapidamente nos slides.
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>Cliente: Assaí Atacadista</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </aside>

        {/* CONTAINER VIEWPORT FOR SLIDES OR REPORT */}
        <main className="flex-grow flex flex-col justify-between overflow-x-hidden min-w-0" id="deck-display-viewport">
          
          {/* VIEW MODE 1: SLIDE SHOW SCENARIO */}
          {viewMode === "slides" && (
            <div className="flex-1 flex flex-col justify-between p-4 md:p-8 lg:p-10" id="slide-presentation-inner">
              {/* Dynamic Slide Background Wrapper Card */}
              <div className="flex-1 bg-gradient-to-b from-[#004696] to-[#002b62] rounded-3xl p-6 md:p-10 border border-white/10 flex flex-col justify-between shadow-2xl relative min-h-[480px] overflow-hidden" id="active-slide-card">
                {/* Visual grid watermark layer for professional touch */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none select-none" />

                {/* Top tracking line */}
                <div className="flex items-center justify-between text-xs text-slate-300/80 z-10 border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-1.5 font-mono">
                    <span className="w-2.5 h-2.5 bg-[#FF7300] rounded-full" />
                    <span className="tracking-wide">PLANEJAMENTO DIA IMBATÍVEL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[#FFAA00] rounded text-[10px] font-mono tracking-wider font-bold">
                      {currentSlide.category}
                    </span>
                    <span className="font-semibold text-[#FFDC00] font-mono bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                      {currentSlide.number} / {slidesData.length}
                    </span>
                  </div>
                </div>

                {/* Animated Interactive Content Area */}
                <div className="flex-grow flex flex-col justify-center z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="h-full"
                    >
                      <SlideRenderer slide={currentSlide} isActive={true} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom decorative trademark line */}
                <div className="mt-8 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300 font-sans z-10">
                  <span className="font-light">Conteúdo | 360º Dia Imbatível</span>
                  <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span className="text-[#FFDC00] font-bold">ASSAÍ ATACADISTA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span>MEGAMIDIA GROUP</span>
                  </div>
                </div>
              </div>

              {/* Bottom Presentation Slide Progress Controllers */}
              <div className="mt-5 flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-2xl gap-4" id="presentation-footer-bar">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                    id="btn-slide-prev"
                  >
                    <ArrowLeft className="w-4 h-4" /> Anterior
                  </button>
                  
                  <span className="px-3 text-slate-400 text-xs font-mono font-medium hidden sm:inline-block">
                    Progresso: <strong className="text-white">{Math.round(((currentIndex + 1) / slidesData.length) * 100)}%</strong>
                  </span>
                </div>

                {/* Visual Interactive Dot Sequence indicators */}
                <div className="hidden md:flex items-center gap-1.5">
                  {slidesData.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => selectSlide(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        dotIdx === currentIndex
                          ? "w-6 bg-[#FF7300]"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                      title={`Ir para Slide ${dotIdx + 1}`}
                      id={`dot-${dotIdx}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex === slidesData.length - 1}
                    className="p-3 rounded-xl bg-[#FF7300] hover:bg-[#FFAA00] text-white font-semibold transition-all disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs uppercase tracking-wider shadow-md"
                    id="btn-slide-next"
                  >
                    Próximo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW MODE 2: CONTINUOUS SCROLLING EXECUTIVE ONE PAGE REPORT */}
          {viewMode === "report" && (
            <div className="flex-1 p-4 md:p-8 lg:p-10 space-y-12" id="report-view-container">
              
              {/* Report Header Introduction card */}
              <div className="bg-gradient-to-r from-[#004696] to-[#002d62] rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7300]/10 rounded-full blur-2xl" />
                <h2 className="text-xl md:text-3xl font-display font-black text-[#FFDC00] uppercase tracking-wide">
                  Relatório Executivo Integrado
                </h2>
                <p className="text-xs md:text-sm text-slate-200 mt-2 max-w-xl mx-auto font-light">
                  Consulte a estratégia 360° completa para o Dia Imbatível Assaí de forma contínua, unificada e ideal para exportar, estudar ou ler na vertical sem cortes.
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 flex-wrap text-xs text-slate-300">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    🏢 Assaí Atacadista
                  </span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    📅 Dia 25 de Junho
                  </span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    🎯 Estratégia 360 Graus
                  </span>
                </div>
              </div>

              {/* Loop rendering each slide in sequential vertical blocks with pristine borders */}
              <div className="space-y-12 max-w-4xl mx-auto">
                {slidesData.map((slide, sIdx) => (
                  <section 
                    key={slide.id} 
                    className="bg-[#002d62]/35 border border-white/10 hover:border-[#FF7300]/30 rounded-3xl p-6 md:p-10 relative transition-all duration-300 hover:shadow-lg scroll-mt-24 overflow-hidden"
                    id={`report-section-${slide.id}`}
                  >
                    {/* Visual corner flag for section pages */}
                    <div className="absolute top-4 right-6 flex items-center gap-2 font-mono text-[10px] text-[#FFAA00] font-bold select-none">
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded">PÁGINA {slide.number}</span>
                    </div>

                    {/* Rendering Slide contents inside */}
                    <SlideRenderer slide={slide} isActive={true} />
                  </section>
                ))}
              </div>

              {/* Sticky jump back to top or slide presenter */}
              <div className="text-center py-8">
                <button
                  onClick={() => {
                    setViewMode("slides");
                    setCurrentIndex(0);
                  }}
                  className="px-6 py-3.5 bg-[#FF7300] hover:bg-[#FFAA00] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg active:scale-95 inline-flex items-center gap-2"
                  id="btn-report-back-cover"
                >
                  <Presentation className="w-4 h-4" /> Iniciar Apresentação Interativa
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
