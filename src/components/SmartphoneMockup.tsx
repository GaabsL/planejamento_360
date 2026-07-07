import React from "react";
import { Bell, ShieldCheck, ShoppingCart, Locate, MapPin, Sparkles, Flame, Percent } from "lucide-react";
import AssaiLogo from "./AssaiLogo";

interface NotificationItem {
  id: number;
  titulo: string;
  texto: string;
}

interface SmartphoneMockupProps {
  notifications: NotificationItem[];
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function SmartphoneMockup({ notifications, selectedId, onSelect }: SmartphoneMockupProps) {
  const currentNotification = notifications.find((n) => n.id === selectedId) || notifications[0];

  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <MapPin className="w-4 h-4 text-[#FF7300]" />;
      case 2:
        return <Flame className="w-4 h-4 text-[#FF7300]" />;
      case 3:
        return <ShoppingCart className="w-4 h-4 text-[#FF7300]" />;
      case 4:
        return <Sparkles className="w-4 h-4 text-[#FFAA00]" />;
      default:
        return <Bell className="w-4 h-4 text-[#FF7300]" />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center w-full" id="smartphone-mockup-wrapper">
      {/* Selector side */}
      <div className="flex-1 space-y-3 w-full" id="phone-notifications-selectors">
        <h4 className="text-xs font-bold uppercase text-[#FFDC00] tracking-widest mb-2">
          Abordagens Táticas (Toque para Testar no Celular)
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {notifications.map((notif) => {
            const isSelected = notif.id === selectedId;
            return (
              <button
                key={notif.id}
                onClick={() => onSelect(notif.id)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-gradient-to-r from-[#003674] to-[#004696] border-[#FF7300] shadow-md scale-[1.02]"
                    : "bg-[#002f66]/40 border-slate-700/65 hover:bg-[#002f66]/70 hover:border-slate-500/50"
                }`}
                id={`btn-push-${notif.id}`}
              >
                {/* Visual Active Border bar */}
                {isSelected && (
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#FF7300] to-[#FFAA00]" />
                )}
                
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${isSelected ? "bg-[#FF7300]/20" : "bg-slate-700/25"} flex-shrink-0`}>
                    {getIcon(notif.id)}
                  </div>
                  <div>
                    <h5 className={`font-semibold text-xs transition-colors ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}>
                      {notif.titulo}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {notif.texto}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phone device frame visualizer */}
      <div className="relative w-72 h-[480px] bg-slate-950 rounded-[40px] p-2.5 shadow-2xl border-[5px] border-slate-800 flex-shrink-0 transition-transform hover:scale-[1.01]" id="smartphone-device-frame">
        {/* Phone Speaker & Camera Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-full z-20 flex items-center justify-between px-4">
          <div className="w-2 h-2 rounded-full bg-slate-950"></div>
          <div className="w-12 h-1 bg-slate-950 rounded-full"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full rounded-[30px] overflow-hidden relative flex flex-col justify-between p-4 pt-10"
             style={{ 
               backgroundImage: "radial-gradient(circle at top, #004696 0%, #001633 100%)"
             }}>
          
          {/* Status Bar */}
          <div className="absolute top-1 right-6 left-6 flex justify-between items-center text-[10px] text-slate-300 font-sans tracking-tight opacity-85">
            <span>09:41</span>
            <div className="flex gap-1.5 items-center">
              <span>5G</span>
              <div className="w-5 h-2.5 border border-slate-300 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-4 bg-white rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Clock Widget on Lockscreen */}
          <div className="text-center pt-4 text-white font-sans select-none" id="lockscreen-date-clock">
            <p className="text-[10px] uppercase tracking-widest text-[#FFDC00] font-medium">Quinta-feira, 25 de Junho</p>
            <h2 className="text-4xl font-display font-light tracking-tight mt-1">09:41</h2>
            <div className="inline-flex items-center gap-1.5 bg-[#FF7300]/15 border border-[#FF7300]/30 px-2 py-0.5 rounded-full mt-2">
              <span className="w-1.5 h-1.5 bg-[#FF7300] rounded-full animate-ping"></span>
              <span className="text-[9px] text-[#ffffff] font-semibold uppercase tracking-wider">DIA IMBATÍVEL</span>
            </div>
          </div>

          {/* Notification Center */}
          <div className="flex-grow flex flex-col justify-center items-center px-1" id="lockscreen-notifications-center">
            {/* Animated Push Content Area */}
            <div className="w-full bg-[#1e293b]/95 backdrop-blur-md rounded-2xl p-3 border.5 border-[#334155]/60 shadow-xl transition-all duration-300 transform scale-100 uppercase-none" id="lockscreen-push-card">
              <div className="flex items-center justify-between pb-2 border-b border-[#334155]/40 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#004696] rounded-md flex items-center justify-center p-0.5">
                    <AssaiLogo showText={false} className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white tracking-wider">MEU ASSAÍ</span>
                </div>
                <span className="text-[9px] text-slate-400">agora</span>
              </div>
              
              <div>
                <h4 className="text-white font-bold text-xs flex items-center gap-1.5">
                  {getIcon(currentNotification.id)}
                  {currentNotification.titulo.substring(3)}
                </h4>
                <p className="text-slate-300 text-[10px] leading-relaxed mt-1">
                  {currentNotification.texto}
                </p>
              </div>

              {/* Slider CTA under notification */}
              <div className="mt-3 bg-slate-800/50 rounded-lg p-1.5 text-center text-[8px] text-slate-400 border border-slate-700/25">
                Deslize para ver o encarte digital
              </div>
            </div>
          </div>

          {/* Footer Slide Indicator */}
          <div className="text-center text-slate-400 text-[9px] mt-auto select-none" id="lockscreen-footer-help">
            <div className="w-24 h-1 bg-slate-400 rounded-full mx-auto mb-2 opacity-50"></div>
            <span>Pressione para abrir</span>
          </div>
        </div>
      </div>
    </div>
  );
}
