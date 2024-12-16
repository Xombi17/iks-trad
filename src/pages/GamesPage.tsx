import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Brain, Leaf } from 'lucide-react';
import MatchHerbsGame from '../components/games/MatchHerbs/MatchHerbsGame';

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: "match-herbs",
      title: "Match the Herbs",
      description: "Match pairs of medicinal herbs and learn their uses",
      icon: <Leaf className="h-8 w-8" />,
      color: "bg-green-600",
      comingSoon: false
    },
    {
      id: "healing-quiz",
      title: "Healing Quiz",
      description: "Test your knowledge about traditional healing practices",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-purple-600",
      comingSoon: true
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {!selectedGame ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-serif text-amber-900 mb-4">
                Fun Learning Games
              </h1>
              <p className="text-amber-800 text-lg">
                Learn about traditional healing through interactive games!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {games.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
                    <div className={`${game.color} text-white p-4 rounded-full inline-block mb-4`}>
                      {game.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-2">
                      {game.title}
                    </h3>
                    <p className="text-amber-700 mb-4">
                      {game.description}
                    </p>
                    {game.comingSoon ? (
                      <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm">
                        Coming Soon!
                      </span>
                    ) : (
                      <button 
                        className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                        onClick={() => setSelectedGame(game.id)}
                      >
                        Play Now
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <motion.button
              className="mb-8 text-amber-800 hover:text-amber-900 flex items-center gap-2"
              onClick={() => setSelectedGame(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ← Back to Games
            </motion.button>
            
            {selectedGame === 'match-herbs' && <MatchHerbsGame />}
          </div>
        )}
      </div>
    </div>
  );
}