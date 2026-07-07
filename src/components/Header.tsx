import React from "react";
import { 
  Presentation, 
  FileText, 
  Maximize2, 
  Minimize2, 
  Info,
  Calendar,
  Sparkles
} from "lucide-react";
import AssaiLogo from "./AssaiLogo";

interface HeaderProps {
  viewMode: "slides" | "report";
  setViewMode: (mode: "slides" | "report") => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  currentSlideNum: number;
  totalSlides: number;
}

export default function Header({
  viewMode,
  setViewMode,
  isFullscreen,
  toggleFullscreen,
  currentSlideNum,
  totalSlides
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#004696] border-b border-white/10 px-4 py-3 md:px-8 md:py-4 shadow-xl flex items-center justify-between" id="app-header">
      {/* Brand Logo left side */}
      <div className="flex items-center gap-4">
        <AssaiLogo showText={true} light={true} />
        <div className="h-10 w-px bg-white/20 hidden md:block ml-2"></div>
        <div className="hidden sm:flex flex-col">
          <span className="text-[#FFDC00] font-display font-bold text-[10px] tracking-[0.22em] uppercase">
            REDE NACIONAL ASSAÍ
          </span>
          <span className="text-sm font-light tracking-tight text-white/95">
            Planejamento Omnichannel 360º
          </span>
        </div>
      </div>

      {/* Control Tools cluster right side */}
      <div className="flex items-center gap-3" id="app-header-controls">
        {/* Toggle Mode Segmented Buttons */}
        <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex items-center">
          <button
            onClick={() => setViewMode("slides")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === "slides"
                ? "bg-[#FF7300] text-white shadow-lg font-bold"
                : "text-white/60 hover:text-white"
            }`}
            title="Modo Apresentação"
            id="toggle-view-slides"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Slides</span>
          </button>
          
          <button
            onClick={() => setViewMode("report")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === "report"
                ? "bg-[#FF7300] text-white shadow-lg font-bold"
                : "text-white/60 hover:text-white"
            }`}
            title="Modo Relatório de Página Única"
            id="toggle-view-report"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Relatório</span>
          </button>
        </div>

        {/* Full-screen Toggle - standard viewport api */}
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#FFAA00] hover:text-white transition-all cursor-pointer hover:bg-white/10 active:scale-95"
          title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
          id="btn-fullscreen-toggle"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4 text-[#FFAA00]" />
          ) : (
            <Maximize2 className="w-4 h-4 text-[#FFAA00]" />
          )}
        </button>
      </div>
    </header>
  );
}
