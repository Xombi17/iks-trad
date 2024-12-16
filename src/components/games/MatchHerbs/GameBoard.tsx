import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import { Herb } from '../../../types/games';
import { shuffleArray } from '../../../utils/gameUtils';

interface GameBoardProps {
  herbs: Herb[];
  onGameComplete: () => void;
}

export default function GameBoard({ herbs, onGameComplete }: GameBoardProps) {
  const [cards, setCards] = useState<Herb[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const herbPairs = [...herbs, ...herbs];
    setCards(shuffleArray(herbPairs));
  }, [herbs]);

  const handleCardClick = (index: number) => {
    if (flippedIndexes.length === 2 || flippedIndexes.includes(index)) return;

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndexes;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.name === secondCard.name) {
        setMatchedPairs([...matchedPairs, firstCard.name]);
        setFlippedIndexes([]);
        
        if (matchedPairs.length + 1 === herbs.length) {
          setTimeout(onGameComplete, 1000);
        }
      } else {
        setTimeout(() => setFlippedIndexes([]), 1000);
      }
    }
  };

  return (
    <div className="space-y-8">
      <motion.div 
        className="grid grid-cols-4 gap-4 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence>
          {cards.map((herb, index) => (
            <Card
              key={`${herb.name}-${index}`}
              herb={herb}
              isFlipped={flippedIndexes.includes(index)}
              isMatched={matchedPairs.includes(herb.name)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          className="text-amber-700 hover:text-amber-900 font-serif"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Hide Hint" : "Need a Hint?"}
        </button>
        
        <AnimatePresence>
          {showHint && (
            <motion.p
              className="mt-2 text-amber-600 text-sm"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              Try to remember the position of each herb when you flip it!
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}