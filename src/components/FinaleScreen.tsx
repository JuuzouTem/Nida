"use client";

import { motion } from "framer-motion";
import { STORY_TEXTS } from "../lib/constants";

export default function FinaleScreen() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* 5-Star Glow Explosion Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity:[0, 1, 0.8, 1], 
          scale:[0, 2, 1.5, 3] 
        }}
        transition={{ duration: 3, times:[0, 0.4, 0.8, 1], ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] bg-romantic-amber rounded-full blur-[100px] z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="z-10 bg-black/60 backdrop-blur-md border border-romantic-amber p-8 md:p-12 rounded-3xl max-w-2xl text-center shadow-[0_0_40px_rgba(255,191,0,0.4)]"
      >
        <motion.h1 
          animate={{ textShadow:["0px 0px 10px #FFBF00", "0px 0px 20px #FF007F", "0px 0px 10px #FFBF00"] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-widest"
        >
          DENEY BAŞARILI
        </motion.h1>
        
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic">
          "{STORY_TEXTS.finale}"
        </p>

        <div className="mt-12 flex justify-center space-x-4 text-3xl font-bold text-romantic-amber tracking-widest">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>N</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}>&</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }}>B</motion.span>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-romantic-amber rounded-full z-0"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000) - 500,
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000) - 500,
            opacity: 0
          }}
          animate={{
            y:[null, Math.random() * -500],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}