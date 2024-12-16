import React, { useState } from 'react';
import PlantCard from './PlantCard';
import { PLANTS } from '../../utils/constants';

export default function InteractiveSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  return (
    <section id="learn" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">
          Discover Healing Plants
        </h2>
        <p className="text-center text-amber-800 mb-16 max-w-2xl mx-auto">
          Click on the cards to learn about sacred medicinal plants
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {PLANTS.map((plant, index) => (
            <PlantCard
              key={index}
              {...plant}
              isFlipped={flippedCards[index] || false}
              onFlip={() => setFlippedCards(prev => ({
                ...prev,
                [index]: !prev[index]
              }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}