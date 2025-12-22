import { motion } from 'framer-motion';

type ExpandButtonProps = {
  onClick: () => void;
  accentColor: string;
};

export const ExpandButton = ({
  onClick,
  accentColor,
}: ExpandButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 py-3 px-6 rounded-full
                 border-2 font-geist text-xs sm:text-sm xl:text-base
                 font-semibold uppercase transition-all duration-200
                 hover:shadow-lg cursor-pointer"
      style={{
        borderColor: accentColor,
        color: accentColor,
        backgroundColor: 'transparent',
      }}
    >
      Развернуть
      <motion.svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ y: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </motion.button>
  );
};

type CollapseButtonProps = {
  onClick: () => void;
  accentColor: string;
};

export const CollapseButton = ({
  onClick,
  accentColor,
}: CollapseButtonProps) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="inline-flex items-center gap-2 py-3 px-6 rounded-full
               border-2 font-geist text-xs sm:text-sm xl:text-base
               font-semibold uppercase transition-all duration-200
               cursor-pointer"
    style={{
      borderColor: accentColor,
      color: accentColor,
      backgroundColor: 'transparent',
    }}
  >
    Свернуть
    <motion.svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </motion.svg>
  </motion.button>
);
