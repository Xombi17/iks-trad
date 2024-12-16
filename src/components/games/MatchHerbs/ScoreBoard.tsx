import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Repeat, Star } from 'lucide-react';

interface ScoreBoardProps {
  onPlayAgain: () => void;
}

export default function ScoreBoard({ onPlayAgain }: ScoreBoardProps) {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.div
        className="inline-block bg-amber-100 p-8 rounded-lg shadow-lg relative overflow-hidden"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 1 }}
      >
        {/* Celebration particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, Math.sin(i * 30) * 100],
              y: [0, Math.cos(i * 30) * 100],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        <Trophy className="h-16 w-16 text-amber-600 mx-auto mb-4" />
        <motion.div className="flex justify-center gap-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
            </motion.div>
          ))}
        </motion.div>
        
        <h3 className="text-2xl font-serif text-amber-900 mb-4">
          Congratulations!
        </h3>
        <p className="text-amber-800 mb-6">
          You've matched all the healing herbs! You're becoming a true healer!
        </p>
        <motion.button
          className="bg-amber-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlayAgain}
        >
          <Repeat className="h-5 w-5" />
          Play Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
}