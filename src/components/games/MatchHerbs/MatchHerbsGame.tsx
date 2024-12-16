import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import { MEDICINAL_HERBS } from '../../../utils/gameData';

export default function MatchHerbsGame() {
  const [gameComplete, setGameComplete] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleGameComplete = () => {
    setGameComplete(true);
  };

  const handlePlayAgain = () => {
    setGameComplete(false);
    setAttempts(attempts + 1);
  };

  return (
    <div className="p-8">
      <motion.h2 
        className="text-3xl font-serif text-amber-900 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Match the Healing Herbs
      </motion.h2>

      {gameComplete ? (
        <ScoreBoard onPlayAgain={handlePlayAgain} />
      ) : (
        <GameBoard 
          herbs={MEDICINAL_HERBS} 
          onGameComplete={handleGameComplete}
        />
      )}
    </div>
  );
}