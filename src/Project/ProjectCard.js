import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => onClick(project)}
      initial={{ opacity: 0, scale: 0.85 }}       
      whileInView={{ opacity: 1, scale: 1 }}      
      transition={{ 
        duration: 1.4,                            
        delay: index * 0.3,                       
        ease: [0.22, 1, 0.36, 1]                  
      }}
      viewport={{ once: false, amount: 0.2 }}     
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="w-full h-52 overflow-hidden p-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="pl-4 pb-4 flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.type}</p>
        <p className="text-xs text-gray-500 mt-1">
          {project.techStack?.join(" - ")}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
