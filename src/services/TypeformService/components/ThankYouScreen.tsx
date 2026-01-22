import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { ThankYouScreenConfig } from '../types';

interface ThankYouScreenProps {
  config: ThankYouScreenConfig;
}

export function ThankYouScreen({ config }: ThankYouScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
        className="mb-8"
      >
        <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 max-w-2xl"
      >
        {config.title}
      </motion.h1>

      {config.description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-xl"
        >
          {config.description}
        </motion.p>
      )}
    </motion.div>
  );
}
