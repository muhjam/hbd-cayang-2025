'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { birthdayQuotes } from '@/data/eventData';

export default function BirthdayMessage() {
  const router = useRouter();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    if (currentQuoteIndex < birthdayQuotes.length - 1) {
      const quoteInterval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => prevIndex + 1);
      }, 5000);

      return () => clearInterval(quoteInterval);
    } else {
        const pageTimeout = setTimeout(() => {
            router.push('/invitation');
          }, 5000);
          return () => clearTimeout(pageTimeout);
    }
  }, [currentQuoteIndex, router]);

  const quote = birthdayQuotes[currentQuoteIndex];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-pink-600 to-pink-400 p-8 text-white">
      <motion.div
        className="max-w-2xl text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={currentQuoteIndex}
      >
        <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src={quote.image}
            alt="Birthday Person"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-serif italic mb-4">{quote.text}</p>
          {/* <p className="text-lg">- {quote.author}</p> */}
        </motion.div>
      </motion.div>
    </main>
  );
}