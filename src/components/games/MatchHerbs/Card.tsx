import React from 'react';
import { motion } from 'framer-motion';
import { Herb } from '../../../types/games';

interface CardProps {
  herb: Herb;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export default function Card({ herb, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <motion.div
      className={`relative w-32 h-48 cursor-pointer ${isMatched ? 'opacity-50' : ''}`}
      whileHover={{ scale: isMatched ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={!isMatched ? onClick : undefined}
    >
      <div className={`absolute w-full h-full transition-transform duration-500 preserve-3d 
        ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full rounded-lg bg-amber-800 flex items-center justify-center">
            <span className="text-4xl">🌿</span>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full rounded-lg bg-white p-2 flex flex-col items-center">
            <img src={herb.image} alt={herb.name} className="w-full h-24 object-cover rounded-t-lg" />
            <h3 className="text-sm font-serif text-amber-900 mt-2 text-center">{herb.name}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}