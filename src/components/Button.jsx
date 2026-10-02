import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Button = ({
  children,
  onClick,
  type = "button",
  showArrow = true,
  className = "",}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#FFD600]
        px-6
        py-3
        font-semibold
        text-black
        shadow-[0_0_25px_rgba(255,214,0,0.15)]
        transition-all
        duration-300
        hover:bg-[#FFE44D]
        hover:shadow-[0_0_30px_rgba(255,214,0,0.3)]
        active:shadow-none
        ${className}`}>
      <span>{children}</span>

      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          className="flex items-center">
          <FiArrowRight size={18} />
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;