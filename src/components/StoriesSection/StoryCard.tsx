import React, { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryCardProps {
  title: string;
  preview: string;
  content: string;
  image: string;
  moralLesson: string;
}

export default function StoryCard({ title, preview, image, content, moralLesson }: StoryCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05, y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <motion.div 
            className="absolute top-4 right-4"
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
            <BookOpen className="h-6 w-6 text-amber-100" />
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-serif text-amber-900 mb-3">{title}</h3>
          <p className="text-amber-800">{preview}</p>
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-amber-700 font-serif hover:text-amber-900 transition-colors"
            whileHover={{ scale: 1.1, x: 10 }}
          >
            Read More →
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-amber-50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-serif text-amber-900">{title}</h2>
                  <motion.button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-amber-900 hover:text-amber-700"
                    whileHover={{ rotate: 90 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                
                <motion.img 
                  src={image} 
                  alt={title} 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                
                <div className="prose prose-amber max-w-none">
                  <motion.div 
                    className="text-amber-800 mb-6 whitespace-pre-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {content}
                  </motion.div>
                  
                  <motion.div 
                    className="bg-amber-100 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xl font-serif text-amber-900 mb-2">Moral of the Story</h4>
                    <p className="text-amber-800 italic">{moralLesson}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}