import { motion } from "framer-motion";

const FadeSlide = ({ children, delay = 0, direction = "up" }) => {
  const dir = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dir[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, ...dir[direction] }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeSlide;
