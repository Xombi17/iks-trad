import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlantCardProps {
  name: string;
  uses: string[];
  image: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function PlantCard({ name, uses, image, isFlipped, onFlip }: PlantCardProps) {
  return (
    <motion.div 
      className="relative h-64 cursor-pointer group perspective"
      onClick={onFlip}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`absolute w-full h-full transition-transform duration-500 preserve-3d 
        ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <motion.div 
              className="absolute bottom-4 left-4 text-amber-100"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Leaf className="h-6 w-6 mb-2" />
              <h3 className="text-xl font-serif">{name}</h3>
            </motion.div>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-800 rounded-lg p-6 shadow-xl">
          <h3 className="text-xl font-serif text-amber-100 mb-4">{name}</h3>
          <ul className="text-amber-100 space-y-2">
            {uses.map((use, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                • {use}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}