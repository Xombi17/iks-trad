import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-serif text-lg transition-colors";
  const variants = {
    primary: "bg-amber-800 text-amber-100 hover:bg-amber-700",
    secondary: "bg-transparent border-2 border-amber-100 text-amber-100 hover:bg-amber-100/10"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}