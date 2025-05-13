'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { eventDetails } from '@/data/eventData';

export default function EventDetails() {
  return (
    <main className="min-h-[100dvh] items-center justify-center flex bg-gradient-to-r from-pink-500 via-pink-600 to-pink-400 p-8">
      <motion.div
        className="w-4xl bg-white rounded-2xl shadow-xl p-8 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
          ASYIKKKKK, KESINII YAHH
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={eventDetails.venueImage}
              alt="Venue"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {eventDetails.location}
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">Tanggal:</span> {eventDetails.date}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Jam:</span> {eventDetails.time}
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}