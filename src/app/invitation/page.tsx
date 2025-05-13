'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Invitation() {
  const router = useRouter();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    router.push('/event-details');
  };

  const handleNoHover = () => {
    const newX = Math.random() * (300 - 100) + 100; // Smaller movement range
    const newY = Math.random() * (300 - 100) + 100; // Smaller movement range
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-pink-600 to-pink-400 p-8 text-white">
      <motion.div
        className="max-w-2xl text-center space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Kaki kamu ga kenapa napa kan?</h1>
        <p className="text-xl mb-12">
         Kalo ga kenapa napa, yukkk jalannn sama akuu, mauu gaa?
        </p>

        <div className="flex justify-center gap-8">
          <motion.button
            onClick={handleYesClick}
            className="px-8 py-4 bg-white text-pink-600 rounded-full text-xl font-bold shadow-lg hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            MAUUUUU!!!!
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-red-500 text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl cursor-pointer"
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            onHoverStart={handleNoHover}
            transition={{ type: 'spring', duration: 0.3 }}
          >
            GA
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}