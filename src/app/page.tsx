"use client";

import AudioPlayer from "../components/AudioPlayer";
import DragDropBoard from "../components/DragDropBoard";
import StoryTransition from "../components/StoryTransition";
import RomanticMiniGame from "../components/RomanticMiniGame";
import FinaleScreen from "../components/FinaleScreen";
import DNAHelixAnimation from "../components/DNAHelixAnimation";
import { useGameLogic } from "../hooks/useGameLogic";

export default function Home() {
  // Bütün logic'i (mantığı) hook'tan çekiyoruz. Sayfa tertemiz kalıyor.
  const { phase, isAudioPlaying, startExperiment, advancePhase } = useGameLogic();

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative transition-colors duration-1000 ${
      phase === "FINALE" ? "bg-black" : "bg-lab-dark"
    }`}>
      
      {/* Background DNA Animation (Sadece laboratuvar fazlarında görünür) */}
      {(phase === "START" || phase === "TUTORIAL") && <DNAHelixAnimation />}

      {/* START SCREEN */}
      {phase === "START" && (
        <div className="flex flex-col items-center space-y-8 animate-fade-in z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green shadow-glow-blue">
            NIDA PROJECT
          </h1>
          <button
            onClick={startExperiment}
            className="px-8 py-4 bg-lab-card border-2 border-lab-border text-neon-blue rounded-lg font-bold tracking-widest hover:border-neon-blue hover:shadow-glow-blue transition-all duration-300"
          >
            DENEYİ BAŞLAT
          </button>
        </div>
      )}

      {/* TUTORIAL PHASE */}
      {phase === "TUTORIAL" && (
        <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in z-10">
          <DragDropBoard onComplete={() => advancePhase("TRANSITION")} />
        </div>
      )}

      {/* TRANSITION PHASE */}
      {phase === "TRANSITION" && (
        <div className="w-full h-full flex flex-col items-center justify-center z-10">
          <StoryTransition onComplete={() => advancePhase("MINI_GAME")} />
        </div>
      )}

      {/* MINI GAME PHASE */}
      {phase === "MINI_GAME" && (
        <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in z-10">
          <RomanticMiniGame onComplete={() => advancePhase("FINALE")} />
        </div>
      )}

      {/* FINALE PHASE */}
      {phase === "FINALE" && (
        <div className="w-full h-screen absolute inset-0 z-10">
          <FinaleScreen />
        </div>
      )}

      {/* Background Audio Player */}
      <AudioPlayer isPlaying={isAudioPlaying} />

      {/* Background Grid */}
      {phase !== "FINALE" && (
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
            phase === "MINI_GAME" 
            ? "bg-[url('/grid.svg')] opacity-[0.05] filter sepia" 
            : "bg-[url('/grid.svg')] opacity-[0.03]"
          }`} 
        />
      )}
    </main>
  );
}