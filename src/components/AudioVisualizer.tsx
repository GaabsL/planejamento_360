import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Sparkles } from "lucide-react";

interface AudioVisualizerProps {
  roteiro: string;
  audioUrl?: string;
}

export default function AudioVisualizer({ 
  roteiro, 
  audioUrl = "https://www.image2url.com/r2/default/audio/1781198538983-df5c9366-ec5d-4718-80f0-91e02b3b208c.mp3" 
}: AudioVisualizerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(16); // Force strictly 16 seconds
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      const onLoadedMetadata = () => {
        setDuration(16); // Strictly 16 seconds as requested
      };

      const onTimeUpdate = () => {
        const current = audio.currentTime;
        if (current >= 16) {
          audio.pause();
          audio.currentTime = 0;
          setIsPlaying(false);
          setProgress(0);
        } else {
          setProgress((current / 16) * 100);
        }
      };

      const onEnded = () => {
        setIsPlaying(false);
        setProgress(0);
      };

      // Set some initial events
      audio.addEventListener("loadedmetadata", onLoadedMetadata);
      audio.addEventListener("timeupdate", onTimeUpdate);
      audio.addEventListener("ended", onEnded);

      // Trigger preloading
      audio.load();

      return () => {
        audio.pause();
        audio.removeEventListener("loadedmetadata", onLoadedMetadata);
        audio.removeEventListener("timeupdate", onTimeUpdate);
        audio.removeEventListener("ended", onEnded);
        audioRef.current = null;
      };
    }
  }, [audioUrl]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio playback delayed or prevented by browser autoplay policy:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (audioRef.current) {
      audioRef.current.currentTime = (val / 100) * 16;
    }
  };

  const currentSeconds = Math.floor((progress / 100) * duration);
  const formatTime = (secs: number) => {
    return `0:${secs.toString().padStart(2, "0")}`;
  };

  // Generate 42 smooth soundbar heights for perfect sound waves
  const soundBars = [
    8, 14, 10, 26, 35, 18, 42, 30, 52, 14, 20, 38, 48, 22, 26, 42, 55, 17, 10, 24, 38, 14, 
    45, 18, 30, 54, 35, 16, 28, 49, 20, 25, 40, 14, 8, 17, 32, 45, 24, 12, 10, 18
  ];

  return (
    <div className="bg-[#0b141a]/95 text-[#e9edef] rounded-2xl p-5 border border-emerald-900 shadow-2xl relative overflow-hidden" id="whatsapp-audio-container">
      {/* Decorative WhatsApp Top bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222e35]/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
            G1
          </div>
          <div>
            <h4 className="font-semibold text-sm text-[#e9edef] flex items-center gap-1.5">
              Gerente Regional Assaí 
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            </h4>
            <p className="text-xs text-[#8696a0]">visto recentemente</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-0.5 bg-[#202c33] text-emerald-400 text-[10px] rounded filament font-semibold uppercase tracking-wider">
            Ação Especial
          </span>
        </div>
      </div>

      <div className="bg-[#202c33] p-4 rounded-xl border border-[#2f3b43]/50 flex flex-col md:flex-row items-center gap-4">
        {/* Play control button */}
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-[#00a884] hover:bg-[#00c298] text-[#111b21] flex items-center justify-center shadow-lg transition-transform active:scale-95 flex-shrink-0 cursor-pointer"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
          id="play-audio-btn"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-[#111b21]" />
          ) : (
            <Play className="w-6 h-6 fill-[#111b21] translate-x-0.5" />
          )}
        </button>

        {/* Audio player timeline & waveform */}
        <div className="flex-grow w-full overflow-hidden">
          {/* Waveform */}
          <div className="h-10 flex items-center justify-between gap-[2px] mb-2 px-1 w-full overflow-hidden">
            {soundBars.map((height, index) => {
              // Calculate if this bar is "active" based on progress
              const barProgressTarget = (index / soundBars.length) * 100;
              const isActive = progress >= barProgressTarget;
              const randomAmplify = isPlaying ? Math.sin(Date.now() / 150 + index) * 6 : 0;
              const dynamicHeight = Math.min(100, Math.max(10, height + randomAmplify));

              return (
                <div
                  key={index}
                  className="flex-1 max-w-[4px] rounded-sm transition-all duration-150"
                  style={{
                    height: `${dynamicHeight}%`,
                    backgroundColor: isActive ? "#53bdeb" : "#8696a0",
                    opacity: isActive ? 1 : 0.4,
                  }}
                />
              );
            })}
          </div>

          {/* Timeline slider and times */}
          <div className="flex items-center justify-between text-xs text-[#8696a0]">
            <span>{formatTime(currentSeconds)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="flex-grow mx-4 accent-[#53bdeb] h-1 bg-[#2f3b43] rounded-lg cursor-pointer"
            />
            <span className="flex items-center gap-1">
              {formatTime(duration)}
              <Volume2 className="w-3.5 h-3.5 text-[#53bdeb]" />
            </span>
          </div>
        </div>
      </div>

      {/* Roteiro Display */}
      <div className="mt-4 bg-[#111b21]/70 rounded-xl p-4 border border-[#222e35]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-[#00a884] font-semibold">
            Roteiro de Transmissão (Voz do Gerente)
          </span>
          <span className="text-[11px] text-[#8696a0] flex items-center gap-1 bg-[#202c33] px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            Efeito Realista
          </span>
        </div>
        <p className="text-sm italic text-[#d1d7db] leading-relaxed">
          {roteiro}
        </p>
        <div className="mt-3 flex items-center justify-between text-xs text-[#8696a0]">
          <span>Format: MP3 (High Fidelity Mono)</span>
          <span>Size: 1.2 MB</span>
        </div>
      </div>
    </div>
  );
}
