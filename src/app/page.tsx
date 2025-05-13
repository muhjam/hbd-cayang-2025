'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';

export default function Home() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [play] = useSound('/audio/happy-birthday.mp3');

  const handleStart = () => {
    setIsPlaying(true);
    play();
    setTimeout(() => {
      router.push('/birthday-message');
    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r">
      <motion.button
        onClick={handleStart}
        className="px-8 py-4 bg-white rounded-full text-2xl font-bold text-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        disabled={isPlaying}
      >
        {isPlaying ? 'Tungguu yahh...' : 'Mulaiii'}
      </motion.button>
    </main>
  );
}
