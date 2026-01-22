import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { WelcomeScreenConfig } from '../types';

interface WelcomeScreenProps {
  config: WelcomeScreenConfig;
  onStart: () => void;
}

export function WelcomeScreen({ config, onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 max-w-2xl"
      >
        {config.title}
      </motion.h1>

      {config.description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl"
        >
          {config.description}
        </motion.p>
      )}

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="
          inline-flex items-center gap-3 px-8 py-4
          bg-black text-white text-lg font-medium
          rounded-lg hover:bg-gray-800 transition-colors
        "
      >
        {config.buttonText || 'Начать'}
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-8 text-sm text-gray-400"
      >
        Нажмите Enter для продолжения
      </motion.p>
    </motion.div>
  );
}
