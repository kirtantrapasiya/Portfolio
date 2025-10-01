import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const Cards = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          className="h-full rounded-2xl"
          initial={{ 
            opacity: 0, 
            scale: 0.7, 
            y: 40,
            rotateY: -20
          }}
          whileInView={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotateY: 0
          }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ 
            scale: 1.08,
            y: -5,
            rotateY: 5,
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <Card {...skill} />
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
