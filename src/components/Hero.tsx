import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import Scene from './Hero3D/Scene';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2023/12/21/05/55/black-8461280_640.jpg')"
      }}
    >
      {/* 3D Background */}
      <Scene />

      {/* Content Overlay */}
      <div className="relative z-10 pt-32 pb-16 px-4">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-8"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Leaf className="h-16 w-16 text-amber-300" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-amber-100 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ancient Healing Wisdom
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-amber-200 mb-8 font-serif max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover the timeless knowledge of Indian traditional healing practices, 
            passed down through generations of tribal healers
          </motion.p>

          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              onClick={() => navigate('/wisdom')}
              className="bg-amber-800 text-amber-100 px-8 py-3 rounded-lg font-serif text-lg 
                hover:bg-amber-700 transition-colors transform hover:scale-105 duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Journey
            </motion.button>
            
            <motion.button 
              onClick={() => navigate('/stories')}
              className="bg-transparent border-2 border-amber-100 text-amber-100 px-8 py-3 rounded-lg font-serif text-lg 
                hover:bg-amber-100/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Stories
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-900/50 to-transparent" />
    </div>
  );
}
