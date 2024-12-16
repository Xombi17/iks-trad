import React, { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoId = "mrLKIL8Qyxg";

  return (
    <section id="video" className="py-20 bg-amber-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-serif text-amber-100 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Journey Through Traditional Healing
        </motion.h2>
        <motion.p 
          className="text-center text-amber-200 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Watch our animated guide to ancient healing practices
        </motion.p>
        
        <motion.div 
          className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}`}
            title="Traditional Healing Practices"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-amber-100 z-10">
            <motion.button
              className="bg-amber-900/80 rounded-full p-3 hover:bg-amber-900 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="h-6 w-6" />
            </motion.button>
            
            <motion.button
              className="bg-amber-900/80 rounded-full p-3 hover:bg-amber-900 transition-colors"
              onClick={() => setIsMuted(!isMuted)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-serif text-amber-100 mb-4">About This Video</h3>
          <p className="text-amber-200">
            Join us on an enchanting journey through the world of Indian traditional healing! 
            This educational animation is specially crafted for young minds, making learning about 
            ancient practices fun and engaging. Watch as we explore the magical world of natural 
            remedies and discover how our ancestors used nature's gifts for healing.
          </p>
          
          <div className="mt-6 flex justify-center">
            <motion.div
              className="bg-amber-900/50 p-4 rounded-lg inline-flex items-center gap-2"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Play className="h-5 w-5 text-amber-200" />
              <span className="text-amber-200 font-serif">Perfect for young learners!</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}