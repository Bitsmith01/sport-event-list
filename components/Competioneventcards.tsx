import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SoccerCardProps {
  image: StaticImageData | string;
  Type: string;
}

const SoccerCard: React.FC<SoccerCardProps> = ({ image, Type }) => {
  return (
    <div className="group relative block w-full shrink-0 md:w-1/4 cursor-pointer">
      <Image
        alt={Type}
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity"
      />

      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative h-full group-hover:bg-[#10101083]">
        <motion.span
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#d41640] w-[100px] text-center h-[80px] flex justify-center items-center text-sm px-5 text-white font-semibold"
        >
          {Type}
        </motion.span>
        <div className="translate-y-8 text-white transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          Step into the realm of world-class competition, where the pulse of
          excitement beats in harmony with the pursuit of greatness. This league
          is the epicenter of athleticism, bringing together competitors from
          every corner of the globe in a celebration of skill, dedication, and
          the sheer joy of the game.
        </div>
      </div>
    </div>
  );
};

export default SoccerCard;
